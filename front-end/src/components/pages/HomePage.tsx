import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import { FoodHomePage } from "../HomePage/BodyHomePage";
import { HeroHomePage } from "../HomePage/HeroHomePage";
import InfoCard from "../HomePage/InfoCard";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { useEffect, useState } from "react";
import { FoodType } from "../ui/Types";

export default function HomePage() {
  const [foods, setFoods] = useState<FoodType[]>([]);

  const breakfast = foods.filter((food) => {
    return food.categoryId?.name === "Breakfest";
  });
  console.log(breakfast);

  const soup = foods.filter((food) => {
    return food.categoryId?.name === "Soup";
  });
  const mainCourse = foods.filter((food) => {
    return food.categoryId?.name === "Main Course";
  });
  const dessert = foods.filter((food) => {
    return food.categoryId?.name === "Dessert";
  });

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
      <FoodHomePage foods={foods} breakfast={breakfast} />
      <Footer />
    </div>
  );
}
