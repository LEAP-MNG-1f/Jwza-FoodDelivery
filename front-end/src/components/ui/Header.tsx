"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { LogoIcon } from "@/svg/LogoIcon";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { SagsIcon } from "@/svg/SagsIcon";
import RightDrawer from "../order/RightDrawer";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BACKEND_ENDPOINT } from "@/constants/constant";

const pages = ["Нүүр", "Хоолны цэс", "Хүргэлтийн бүс"];

function Header() {
  const [foods, setFoods] = useState([]);

  const fetchFoods = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/api/foods`);
      const dataFoods = await response.json();

      setFoods(dataFoods?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);
  return (
    <AppBar className="!bg-white !h-[57px] !flex !items-center !justify-center !shadow-none !w-full">
      <Container className="!w-[1200px] !flex !items-center !justify-between !p-0">
        <div className="!flex !gap-[24px] !items-center">
          <LogoIcon />
          <div className="!flex !gap-[8px] ">
            <Link
              href={"./"}
              className="!text-[14px] !leading-[16px] !font-[700] !text-black !px-4 !py-2"
            >
              Нүүр
            </Link>
            <Link
              href={"./menu"}
              className="!text-[14px] !leading-[16px] !font-[700] !text-black !px-4 !py-2"
            >
              Хоолны цэс
            </Link>
            <Link
              href={"delivery-area"}
              className="!text-[14px] !leading-[16px] !font-[700] !text-black !px-4 !py-2"
            >
              Хүргэлтийн бүс
            </Link>
          </div>
        </div>
        <div className="!flex !gap-2">
          <div className="flex items-center">
            <Button className="!flex !gap-[8px] !justify-center !items-center !px-4 !py-2">
              <SagsIcon />
            </Button>
            <RightDrawer foods={foods} />
          </div>
          <Button className="!flex !gap-[8px] !justify-center !items-center !px-4 !py-2">
            <PermIdentityIcon sx={{ color: "text.primary" }} />
            <Typography className="!text-[14px] !leading-[20px] !font-[700] !text-black !text-align">
              Нэвтрэх
            </Typography>
          </Button>
        </div>
      </Container>
    </AppBar>
  );
}
export default Header;
