"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { LogoIcon } from "@/svg/LogoIcon";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import RightDrawer from "../order/RightDrawer";
import Link from "next/link";
import { useOrderContext } from "../context/OrderContext";

const pages = ["Нүүр", "Хоолны цэс", "Хүргэлтийн бүс"];

function Header() {
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
          <div className="flex items-center justify-center">
            <div className="!flex !gap-[8px] !justify-center !items-center !px-4 !py-2">
              <RightDrawer />
            </div>
          </div>
          <Link
            href={"/login"}
            className="!flex !gap-[8px] !justify-center !items-center !px-4 !py-2"
          >
            <PermIdentityIcon sx={{ color: "text.primary" }} />
            <p className="!text-[14px] !leading-[20px] !font-[700] !text-black !text-align">
              Нэвтрэх
            </p>
          </Link>
        </div>
      </Container>
    </AppBar>
  );
}
export default Header;
