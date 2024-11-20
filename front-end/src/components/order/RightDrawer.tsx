import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import { LeftArrowIcon } from "@/svg/LeftArrowIcon";
import { FoodHomePageProps } from "../HomePage/BodyHomePage";
import { OrderView } from "./OrderView";
import { Typography } from "@mui/material";

type Anchor = "right";

export default function RightDrawer({ foods }: FoodHomePageProps) {
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
                    img_url={food.img_url}
                    price={food.price}
                    name={food.name}
                    ingredient={food.ingredient}
                  />
                );
              })}
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
