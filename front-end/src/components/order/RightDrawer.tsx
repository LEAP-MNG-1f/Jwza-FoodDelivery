import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import { LeftArrowIcon } from "@/svg/LeftArrowIcon";
import { FoodHomePageProps } from "../HomePage/BodyHomePage";
import { OrderView } from "./OrderView";

type Anchor = "top" | "left" | "bottom" | "right";

export default function RightDrawer({ foods }: FoodHomePageProps) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 586, top: 1, display: "flex", flexDirection: "column" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
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
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
