"use client";

import { SetStateAction, useEffect, useState } from "react";
import { AdminMain } from "../adminpage/AdminMain";
import HeaderAdmin from "../adminpage/Header";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { CategoryType } from "../ui/Types";

export const AdminPage = () => {
  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/api/categories`);
      const dataCategories = await response.json();
      if (dataCategories?.data && Array.isArray(dataCategories.data)) {
        setCategories(dataCategories.data);

        if (dataCategories.data.length > 0) {
          setSelectedCategory(dataCategories.data[0].name);
        }
      } else {
        // Fallback to empty array if data is not in expected format
        setCategories([]);
      }
    } catch (error) {
      console.log(error);
      setCategories([]);
    }
  };

  const handleSelectedCategory = (category: SetStateAction<string>) => {
    setSelectedCategory(category);
  };

  const createNewCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory(event.target.value);
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
      <HeaderAdmin />
      <AdminMain
        selectedCategory={selectedCategory}
        categorizedFoods={foods}
        categories={categories}
        handleSelectedCategory={handleSelectedCategory}
        createNewCategory={createNewCategory}
        newCategory={newCategory}
        setCategories={setCategories}
      />
    </div>
  );
};
