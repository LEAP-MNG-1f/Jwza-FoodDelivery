import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { LeftArrowIcon } from "@/svg/LeftArrowIcon";
import { useCategorizedFoodContext } from "../context/CategorizedFoodsContext";
import { CloseIcon } from "@/svg/CloseIcon";
import { MinusIcon } from "@/svg/MinusIcon";
import { Addicon } from "@/svg/AddIcon";
import { useFoodContext } from "../context/DataContext";
import Link from "next/link";
import { SagsIcon } from "@/svg/SagsIcon";

type Anchor = "right";

export default function RightDrawer() {
  const { cartFoods, totalPrice, setCartFoods } = useCategorizedFoodContext();

  const updateIncrease = (_id: string) => {
    const updateFood = cartFoods?.map((food) => {
      if (food._id === _id) {
        return {
          ...food,
          quantity: food.quantity! + 1,
        };
      }
      return food;
    });
    setCartFoods(updateFood);
  };
  const updateDecrease = (_id: string) => {
    const updateFood = cartFoods?.map((food) => {
      if (food._id === _id && food.quantity! > 0) {
        return {
          ...food,
          quantity: food.quantity! - 1,
        };
      }
      return food;
    });
    setCartFoods(updateFood);
  };

  const deleteFoodFromCard = (_id: string) => {
    const leftFoods = cartFoods?.filter((food) => {
      if (food._id !== _id) {
        return food;
      }
    });
    setCartFoods(leftFoods);
  };

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setState({ ...state, [anchor]: open });
    };

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <button
            className="!flex !justify-center !items-center !text-[14px] gap-2  !leading-[20px] !font-[700] !text-black !text-align"
            onClick={toggleDrawer(anchor, true)}
          >
            <div className="flex gap-1">
              <SagsIcon />
              <p
                className={`${
                  cartFoods.length === 0 ? "text-white" : "text-black"
                }`}
              >
                {cartFoods.length}
              </p>
            </div>
            <p className="text-center ">Сагс</p>
          </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            className="!w-[586px]  !flex !flex-col !h-full"
          >
            <div className="flex flex-col h-full">
              <div className="flex gap-[171px] items-center mt-[26px] ml-6">
                <LeftArrowIcon />
                <p className="text-[20px] font-[900] leading-[30px]">
                  Таны сагс
                </p>
              </div>
              <div className="flex-grow overflow-auto p-4 ">
                {cartFoods?.map((food) => {
                  return (
                    <div key={food?._id} className="w-[538px]  p-6">
                      <div className="flex gap-4 p-4 border-t border-t-[#D6D8DB] border-b border-b-[#D6D8DB]">
                        <img className="w-[245px]" src={food?.image} alt="" />
                        <div className="flex flex-col gap-4">
                          <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-[2px]">
                              <p className="text-[18px] font-[600] leading-[27px]">
                                {food?.name}
                              </p>
                              <p className="text-[18px] font-[600] leading-[27px] text-[#18BA51]">
                                {Number(food?.price) * food?.quantity!}₮
                              </p>
                            </div>
                            <button
                              onClick={() => deleteFoodFromCard(food._id)}
                            >
                              <CloseIcon />
                            </button>
                          </div>
                          <p className="text-[16px] font-[400] leading-[19.09px] text-[#767676]">
                            {food?.ingredient}
                          </p>
                          <div className="flex gap-2 items-center ">
                            <button onClick={() => updateDecrease(food._id)}>
                              <MinusIcon />
                            </button>
                            <p className="w-[45px] text-center">
                              {food?.quantity}
                            </p>
                            <button onClick={() => updateIncrease(food._id)}>
                              <Addicon />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-[586px] h-[172px] px-[8] py-[30px] flex justify-center items-center  gap-[10px]  border-t border-t-[#BBBECD33] sticky bottom-0">
              <div className="w-[256px] flex flex-col">
                <p className="text-[18px] font-[400] leading-[27px] text-[#5E6166]">
                  Нийт төлөх дүн
                </p>
                <p className="text-[18px] font-[700] leading-[27px]">
                  {totalPrice} ₮
                </p>
              </div>

              <Link
                href={cartFoods?.length > 0 ? "/confirmation" : "#"} // Link only works if cart is not empty
                className={`w-[256px] h-[48px] rounded-1 text-[16px] font-[400] leading-[19.09px] px-4 py-2 flex justify-center items-center ${
                  cartFoods.length === 0
                    ? "bg-[#1C20243D] text-[#EEEFF2] cursor-not-allowed"
                    : "bg-[#18BA51] text-white"
                }`}
              >
                Захиалах
              </Link>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
