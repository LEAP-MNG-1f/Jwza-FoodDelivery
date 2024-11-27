import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import MenuBody from "../menupage/MenuBody";
import { MockDataOrder } from "./OrderPage";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { useEffect, useState } from "react";

export default function MenuPage() {
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
      <MenuBody foods={foods} />
      <Footer />
    </div>
  );
}
