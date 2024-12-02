import { PlusIcon } from "@/svg/PlusIcon";
import { NextIcon } from "@/svg/NextIcon";
import { FoodCard } from "./FoodCard";
import { useFoodContext } from "../context/DataContext";
import { useCategorizedFoodContext } from "../context/CategorizedFoodsContext";

export const FoodHomePage = () => {
  const { categorizedFoods } = useCategorizedFoodContext();
  return (
    <div className="w-full flex justify-center mb-[80px]">
      <div className="w-[1200px] flex flex-col gap-[80px]">
        {categorizedFoods?.map((food) => {
          return (
            <div key={food._id} className="flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <div className="flex gap-1 items-center">
                  <PlusIcon />
                  <p className="text-[22px] font-[700] leading-[33px]">
                    {food?._id}
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
                {food?.items?.slice(0, 4).map((item) => {
                  return (
                    <FoodCard
                      key={item?._id}
                      _id={item?._id}
                      image={item?.image}
                      name={item?.name}
                      price={item?.price}
                      ingredient={item?.ingredient}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
