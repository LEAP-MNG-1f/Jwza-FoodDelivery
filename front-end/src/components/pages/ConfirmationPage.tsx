"use client";
import { useEffect, useState } from "react";
import { AddressInfo } from "../order/AddressInfo";
import { OrderConfirm } from "../order/OrderConfirm";
import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import { BACKEND_ENDPOINT } from "@/constants/constant";

export default function ConfirmationPage() {
  const [foods, setFoods] = useState([]);

  const fetchFoods = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/api/foods`);
      const dataFoods = await response.json();

      setFoods(dataFoods?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <div>
      <Header />
      <div className="w-full flex justify-center items-center">
        <div className="w-[1200px] flex justify-between px-[80px] my-[120px]">
          <AddressInfo />
          <OrderConfirm foods={foods} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
