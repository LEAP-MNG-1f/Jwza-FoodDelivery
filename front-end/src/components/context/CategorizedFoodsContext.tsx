"use client";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useFoodContext } from "./DataContext";

type CategoryType = {
  _id: string;
  name: string;
  _v?: number;
};

type FilteredItems = {
  category: CategoryType;
  categoryId: string;
  image: string;
  ingredient: string;
  name: string;
  price: string;
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

export type CartItemsType = {
  _id: string;
  name: string;
  image: string;
  ingredient: string;
  price: string;
  quantity?: number;
  count?: number;
};

type TCategorizedFoods = {
  categorizedFoods: FilteredObject[];
  item?: FilteredItems;
  cartFoods: CartItemsType[];
  totalPrice: number | undefined;
  setCartFoods: React.Dispatch<React.SetStateAction<CartItemsType[]>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
  addToCart: (
    _id: string,
    image: string,
    name: string,
    ingredient: string,
    price: string,
    quantity: number
  ) => void;
  calculateTotal: () => void;
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
  const [cartFoods, setCartFoods] = useState<CartItemsType[]>([]);
  const { setQuantity } = useFoodContext();

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
    price: string,
    quantity: number
  ) => {
    const selectedFood = {
      _id,
      image,
      name,
      ingredient,
      price,
      quantity,
    };

    const existingFood = cartFoods.find((food) => food._id === _id);

    if (existingFood) {
      const updatedFood = cartFoods.map((food) => {
        if (food._id === _id) {
          return {
            ...food,
            quantity: food.quantity! + 1,
          };
        }
        return food;
      });
      setCartFoods(updatedFood);
      setQuantity(1);
    } else {
      setCartFoods((prevCartFoods) => [...prevCartFoods, selectedFood]);
      setQuantity(1);
    }
  };

  const [totalPrice, setTotalPrice] = useState<number>();

  const calculateTotal = () => {
    const total = cartFoods.reduce((acc, current) => {
      return acc + Number(current.price) * current.quantity!;
    }, 0);
    setTotalPrice(total);
  };
  useEffect(() => {
    calculateTotal();
  }, [cartFoods]);

  useEffect(() => {
    fetchFoods();
  }, []);

  const contextValue = {
    categorizedFoods,
    cartFoods,
    setCartFoods,
    addToCart,
    totalPrice,
    setTotalPrice,
    calculateTotal,
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
