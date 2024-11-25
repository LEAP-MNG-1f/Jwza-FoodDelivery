import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import { FoodHomePage } from "../HomePage/BodyHomePage";
import { MockDataOrder } from "./OrderPage";
import { HeroHomePage } from "../HomePage/HeroHomePage";
import InfoCard from "../HomePage/InfoCard";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchFoods = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/api/foods`);
      const dataFoods = await response.json();

      setFoods(dataFoods?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCategories = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/api/categories`);
      const dataCategories = await response?.json();

      setCategories(dataCategories?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFoods();
    fetchCategories();
  }, []);

  return (
    <div>
      <Header foods={MockDataOrder} />
      <HeroHomePage />
      <InfoCard />
      <FoodHomePage foods={foods} categories={categories} />
      <Footer />
    </div>
  );
}
