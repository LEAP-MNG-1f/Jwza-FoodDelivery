"use client";
import { useEffect, useState } from "react";
import { AddressInfo } from "../order/AddressInfo";
import { OrderConfirm } from "../order/OrderConfirm";
import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import { BACKEND_ENDPOINT } from "@/constants/constant";

export default function ConfirmationPage() {
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center items-center">
        <div className="w-[1200px] flex justify-between px-[80px] my-[120px]">
          <AddressInfo />
          <OrderConfirm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
