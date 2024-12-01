import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import MenuBody from "../menupage/MenuBody";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { SetStateAction, useEffect, useState } from "react";

export default function MenuPage() {
  return (
    <div>
      <Header />
      <MenuBody />
      <Footer />
    </div>
  );
}
