"use client";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type TFoodsId = {
  _id: string;
  categoryId: string;
  image: string;
  ingredient: string;
  name: string;
  price: number;
};
type TUserID = {
  _id: string;
  email: string;
  name: string;
  password: string;
  phoneNumber: number;
  role: string;
};

type TOrder = {
  _id: string;
  userId: TUserID;
  orderNumber: number;
  foodIds: TFoodsId[];
  totalPrice: string;
  process?: string;
  district: string;
  khoroo: string;
  apartment: string;
  phoneNumber: string;
  information: string;
  paymentType: string;
  createdAt: string;
};
type TOrderContext = {
  orders: TOrder[];
  setOrders: React.Dispatch<React.SetStateAction<TOrder[]>>;
  fetchOrders: () => void;
};

const OrderContext = createContext<TOrderContext | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [orders, setOrders] = useState<any[]>([]);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/api/orders`);
      const dataOrders = await response.json();
      setOrders(dataOrders?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [setOrders]);

  const contextValue = {
    orders,
    setOrders,
    fetchOrders,
  };

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useFoodContext must be used within a FoodProvider");
  }
  return context;
};
