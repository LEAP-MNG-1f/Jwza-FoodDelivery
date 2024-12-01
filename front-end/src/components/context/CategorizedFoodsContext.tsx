"use client";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type CategoryType = {
  _id?: string;
  name: string;
  _v?: number;
};

type FilteredItems = {
  category: CategoryType;
  categoryId: string;
  image: string;
  ingredient: string;
  name: string;
  price: number;
  _id: string;
  quantity?: number;
};

type FilteredObject = {
  count: number;
  _id: string;
  category: CategoryType;
  categoryId: string;
  items: FilteredItems[];
};

type TCategorizedFoods = {
  categorizedFoods: FilteredObject[];
  item?: FilteredItems;
  cartFoods: FilteredObject[];
  setCartFoods: React.Dispatch<React.SetStateAction<FilteredObject[]>>;
  addToCart: (
    _id: string,
    image: string,
    name: string,
    ingredient: string,
    price: string,
    quantity: number
  ) => void;
};

const CategorizedFoodsContext = createContext<TCategorizedFoods | undefined>(
  undefined
);

export const CategorizedFoodsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [categorizedFoods, setCategorizedFoods] = useState<FilteredObject[]>(
    []
  );
  const [cartFoods, setCartFoods] = useState<FilteredObject[]>([]);

  const fetchFoods = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/api/foods`);
      const dataFoods = await response.json();

      setCategorizedFoods(dataFoods?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (
    _id: string,
    image: string,
    name: string,
    ingredient: string,
    price: any,
    quantity: number
  ) => {
    // Convert price to number if it's a string
    // const priceNum = Number(price);

    // Check if the item already exists in the cart
    const existingItemIndex = cartFoods.findIndex((item) =>
      item.items.some((foodItem) => foodItem._id === _id)
    );

    if (existingItemIndex !== -1) {
      // If item exists, increment its count
      const updatedCartFoods = cartFoods.map((cartItem, index) =>
        index === existingItemIndex
          ? {
              ...cartItem,
              count: (cartItem.count || 0) + 1,
              items: cartItem.items.map((item) =>
                item._id === _id
                  ? { ...item, quantity: (item.quantity || 0) + 1 }
                  : item
              ),
            }
          : cartItem
      );
      setCartFoods(updatedCartFoods);
    } else {
      // If item doesn't exist, find its category
      let foundCategory: CategoryType | undefined;
      let foundCategoryId = "";

      categorizedFoods.forEach((categoryGroup) => {
        const matchedItem = categoryGroup.items.find(
          (item) => item._id === _id
        );
        if (matchedItem) {
          foundCategory = matchedItem.category;
          foundCategoryId = matchedItem.categoryId;
        }
      });

      const newCartItem: FilteredObject = {
        _id,
        category: foundCategory || { _id: "", name: "Unknown" },
        categoryId: foundCategoryId,
        items: [
          {
            _id,
            category: foundCategory || { _id: "", name: "Unknown" },
            categoryId: foundCategoryId,
            name,
            price,
            image,
            ingredient,
            quantity: 1,
          },
        ],
        count: 1,
      };

      setCartFoods((prevCartFoods) => [...prevCartFoods, newCartItem]);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const contextValue = {
    categorizedFoods,
    cartFoods,
    setCartFoods,
    addToCart,
  };

  return (
    <CategorizedFoodsContext.Provider value={contextValue}>
      {children}
    </CategorizedFoodsContext.Provider>
  );
};

export const useCategorizedFoodContext = () => {
  const context = useContext(CategorizedFoodsContext);
  if (context === undefined) {
    throw new Error("useFoodContext must be used within a FoodProvider");
  }
  return context;
};
