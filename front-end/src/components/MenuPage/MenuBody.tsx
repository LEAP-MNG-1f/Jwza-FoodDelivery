"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import { FoodCard } from "../HomePage/FoodCard";
import { FoodsArrayProps } from "../ui/Types";

export default function MenuBody({ foods }: FoodsArrayProps) {
  const [isClicked, setIsClicked] = useState(true);
  const [clicked, setClicked] = useState(false);

  const handleButton = () => {
    setIsClicked(!isClicked);
  };
  const handleGreenButton = () => {
    setClicked(!clicked);
  };
  return (
    <div className="w-full mt-[89px] mb-[32px] flex justify-center ">
      <div className="w-[1200px] flex flex-col">
        <div className="flex justify-between">
          <Button
            onClick={handleButton}
            className={`!w-[280.5px] !h-[43px] !rounded-[8px] !border-1 ${
              isClicked
                ? "!bg-[#18BA51] !text-white"
                : "!bg-[white] !text-black"
            } `}
            variant="contained"
          >
            Breakfast
          </Button>
          <Button
            onClick={handleGreenButton}
            className={`!w-[280.5px] !h-[43px] !rounded-[8px] !border-1 ${
              clicked ? "!bg-[#18BA51] !text-white" : "!bg-[white] !text-black"
            } `}
            variant="contained"
          >
            Soup
          </Button>
          <Button
            onClick={handleGreenButton}
            className={`!w-[280.5px] !h-[43px] !rounded-[8px] !border-1 ${
              clicked ? "!bg-[#18BA51] !text-white" : "!bg-[white] !text-black"
            } `}
            variant="contained"
          >
            Main Course
          </Button>
          <Button
            onClick={handleGreenButton}
            className={`!w-[280.5px] !h-[43px] !rounded-[8px] !border-1 ${
              clicked ? "!bg-[#18BA51] !text-white" : "!bg-[white] !text-black"
            } `}
            variant="contained"
          >
            Dessert
          </Button>
        </div>
        <div className="flex flex-col mt-[80px] gap-[60px]">
          <div className="flex justify-between">
            {foods.map((food) => {
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
          <div className="flex justify-between">
            {foods.map((food) => {
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
          <div className="flex justify-between">
            {foods.map((food) => {
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
    </div>
  );
}
