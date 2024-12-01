"use client";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
  SetStateAction,
} from "react";

// Define types for your context
export interface CategoryType {
  _id?: string;
  name: string;
  // Add other properties as needed
}

interface FoodContextType {
  foods: any[]; // Replace 'any' with your specific food type
  categories: CategoryType[];
  selectedCategory: string;
  newCategory: string;
  quantity: number;
  setFoods: React.Dispatch<React.SetStateAction<any[]>>;
  setCategories: React.Dispatch<React.SetStateAction<CategoryType[]>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setNewCategory: React.Dispatch<React.SetStateAction<string>>;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  fetchCategories: () => Promise<void>;
  fetchFoods: () => Promise<void>;
  handleSelectedCategory: (category: SetStateAction<string>) => void;
  createNewCategory: (event: React.ChangeEvent<HTMLInputElement>) => void;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

// Create the context
const FoodContext = createContext<FoodContextType | undefined>(undefined);

// Provider component
export const FoodProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [foods, setFoods] = useState<any[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [newCategory, setNewCategory] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/api/categories`);
      const dataCategories = await response.json();

      if (dataCategories?.data && Array.isArray(dataCategories?.data)) {
        setCategories(dataCategories?.data);

        if (dataCategories.data.length > 0) {
          setSelectedCategory(dataCategories?.data[0].name);
        }
      } else {
        setCategories([]);
      }
    } catch (error) {
      console.log(error);
      setCategories([]);
    }
  };

  const fetchFoods = async () => {
    try {
      const response = await fetch(
        `${BACKEND_ENDPOINT}/api/categorized?selectedCategory=${selectedCategory}`
      );
      const dataFoods = await response.json();

      setFoods(dataFoods?.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectedCategory = (category: SetStateAction<string>) => {
    setSelectedCategory(category);
  };

  const createNewCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory(event.target.value);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchFoods();
    }
  }, [selectedCategory]);

  // Context value
  const contextValue = {
    foods,
    categories,
    selectedCategory,
    newCategory,
    setFoods,
    setCategories,
    setSelectedCategory,
    setNewCategory,
    fetchCategories,
    fetchFoods,
    handleSelectedCategory,
    createNewCategory,
    quantity,
    setQuantity,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <FoodContext.Provider value={contextValue}>{children}</FoodContext.Provider>
  );
};

// Custom hook to use the context
export const useFoodContext = () => {
  const context = useContext(FoodContext);
  if (context === undefined) {
    throw new Error("useFoodContext must be used within a FoodProvider");
  }
  return context;
};
