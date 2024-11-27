import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import { FoodHomePage } from "../homepage/BodyHomePage";
import { HeroHomePage } from "../homepage/HeroHomePage";
import InfoCard from "../homepage/InfoCard";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { useEffect, useState } from "react";

export default function HomePage() {
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
      <HeroHomePage />
      <InfoCard />
      <FoodHomePage foods={foods} />
      <Footer />
    </div>
  );
}
