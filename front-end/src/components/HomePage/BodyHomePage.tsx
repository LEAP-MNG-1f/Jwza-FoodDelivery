import { PlusIcon } from "@/svg/PlusIcon";
import { FoodCard } from "./FoodCard";
import { NextIcon } from "@/svg/NextIcon";

export type FoodType = {
  _id?: string;
  name: string;
  img_url: string;
  ingredient?: string;
  price: number;
};

export type FoodHomePageProps = {
  foods: FoodType[];
};

export const FoodHomePage = (props: FoodHomePageProps) => {
  return (
    <div className="w-full flex justify-center mb-[80px]">
      <div className="w-[1200px] flex flex-col gap-[80px]">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <PlusIcon />
              <p className="text-[22px] font-[700] leading-[33px]">
                Өглөөний хоол
              </p>
            </div>
            <button className="flex gap-1 items-center">
              <p className="text-[14px] font-[400] leading-[16.71px] text-[#18BA51]">
                Бүгдийг харах
              </p>
              <NextIcon />
            </button>
          </div>
          <div className="flex justify-between">
            {props.foods.map((food) => {
              return (
                <FoodCard
                  key={food._id}
                  img_url={food.img_url}
                  name={food.name}
                  price={food.price}
                  ingredient={food.ingredient}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <PlusIcon />
              <p className="text-[22px] font-[700] leading-[33px]">
                Үндсэн хоол
              </p>
            </div>
            <button className="flex gap-1 items-center">
              <p className="text-[14px] font-[400] leading-[16.71px] text-[#18BA51]">
                Бүгдийг харах
              </p>
              <NextIcon />
            </button>
          </div>
          <div className="flex justify-between">
            {props.foods.map((food) => {
              return (
                <FoodCard
                  key={food._id}
                  img_url={food.img_url}
                  name={food.name}
                  price={food.price}
                  ingredient={food.ingredient}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <PlusIcon />
              <p className="text-[22px] font-[700] leading-[33px]">
                Салад зууш
              </p>
            </div>
            <button className="flex gap-1 items-center">
              <p className="text-[14px] font-[400] leading-[16.71px] text-[#18BA51]">
                Бүгдийг харах
              </p>
              <NextIcon />
            </button>
          </div>
          <div className="flex justify-between">
            {props.foods.map((food) => {
              return (
                <FoodCard
                  key={food._id}
                  img_url={food.img_url}
                  name={food.name}
                  price={food.price}
                  ingredient={food.ingredient}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <PlusIcon />
              <p className="text-[22px] font-[700] leading-[33px]">Амттан</p>
            </div>
            <button className="flex gap-1 items-center">
              <p className="text-[14px] font-[400] leading-[16.71px] text-[#18BA51]">
                Бүгдийг харах
              </p>
              <NextIcon />
            </button>
          </div>
          <div className="flex justify-between">
            {props.foods.map((food) => {
              return (
                <FoodCard
                  key={food._id}
                  img_url={food.img_url}
                  name={food.name}
                  price={food.price}
                  ingredient={food.ingredient}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};