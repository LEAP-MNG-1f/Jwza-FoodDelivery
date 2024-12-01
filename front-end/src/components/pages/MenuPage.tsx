import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import MenuBody from "../menupage/MenuBody";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { SetStateAction, useEffect, useState } from "react";

export default function MenuPage() {
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/api/categories`);
      const dataCategories = await response.json();
      setCategories(dataCategories?.data);

      if (dataCategories?.data && dataCategories.data.length > 0) {
        setSelectedCategory(dataCategories?.data[0].name);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectedCategory = (category: SetStateAction<string>) => {
    setSelectedCategory(category);
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

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchFoods();
    }
  }, [selectedCategory]);
  return (
    <div>
      <Header />
      <MenuBody
        selectedCategory={selectedCategory}
        categorizedFoods={foods}
        categories={categories}
        foods={[]}
        handleSelectedCategory={handleSelectedCategory}
        setSelectedCategory={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Footer />
    </div>
  );
}
