import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { LeftArrowIcon } from "@/svg/LeftArrowIcon";
import { OrderView } from "./OrderView";
import { FoodsArrayProps } from "../ui/Types";

type Anchor = "right";

export default function RightDrawer({ foods }: FoodsArrayProps) {
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
            className="!text-[14px] !leading-[20px] !font-[700] !text-black !text-align"
            onClick={toggleDrawer(anchor, true)}
          >
            Сагс
          </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            className="!w-[586px] "
          >
            <div className="flex gap-[171px] items-center mt-[26px] ml-6">
              <LeftArrowIcon />
              <p className="text-[20px] font-[900] leading-[30px]">Таны сагс</p>
            </div>
            <div className="flex w-[538px] h-[182px]">
              {foods.map((food) => {
                return (
                  <OrderView
                    key={food._id}
                    image={food.image}
                    price={food.price}
                    name={food.name}
                    ingredient={food.ingredient}
                  />
                );
              })}
            </div>
            <div className="w-[586px] h-[172px] px-[8] py-[30px] flex justify-center mt-[747px] gap-[10px]  border-t border-t-[#BBBECD33]">
              <div className="w-[256px] flex flex-col">
                <p className="text-[18px] font-[400] leading-[27px] text-[#5E6166]">
                  Нийт төлөх дүн
                </p>
                <p className="text-[18px] font-[700] leading-[27px]">Тоо ₮</p>
              </div>
              <button className="w-[256px] h-[48px] rounded-1 text-[16px] font-[400] leading-[19.09px] bg-[#18BA51] text-white px-4 py-2 flex justify-center items-center">
                Захиалах
              </button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
