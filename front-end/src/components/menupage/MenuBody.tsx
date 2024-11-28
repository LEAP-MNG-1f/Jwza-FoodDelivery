"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import { FoodCard } from "../homepage/FoodCard";
import { TMenuPage } from "../ui/Types";

export default function MenuBody({
  categorizedFoods,
  categories,
  handleSelectedCategory,
  selectedCategory,
}: TMenuPage) {
  return (
    <div className="w-full mt-[89px] mb-[32px] flex justify-center ">
      <div className="w-[1200px] flex flex-col">
        <div className="flex justify-between">
          {categories.map((category) => {
            return (
              <Button
                onClick={() => {
                  handleSelectedCategory(category.name);
                }}
                key={category._id}
                className={`!w-[280.5px] !h-[43px] !rounded-[8px] !border-1 ${
                  category?.name === selectedCategory
                    ? "!bg-[#18BA51] !text-white"
                    : "!bg-white !text-black "
                } `}
                variant="contained"
              >
                {category?.name}
              </Button>
            );
          })}
        </div>
        <div className="w-[1200px] grid grid-cols-4 mt-[80px] gap-6">
          {categorizedFoods?.map((food) => {
            return (
              <FoodCard
                key={food._id}
                image={food.image}
                name={food.name}
                price={food.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
