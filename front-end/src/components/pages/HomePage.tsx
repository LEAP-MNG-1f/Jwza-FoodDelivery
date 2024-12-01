import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import { FoodHomePage } from "../homepage/BodyHomePage";
import { HeroHomePage } from "../homepage/HeroHomePage";
import InfoCard from "../homepage/InfoCard";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { useEffect, useState } from "react";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroHomePage />
      <InfoCard />
      <FoodHomePage />
      <Footer />
    </div>
  );
}
