import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import { FoodHomePage, FoodHomePageProps } from "../homepage/BodyHomePage";
import { MockDataOrder } from "./OrderPage";
import { HeroHomePage } from "../homepage/HeroHomePage";
import InfoCard from "../homepage/InfoCard";

export default function HomePage({ foods }: FoodHomePageProps) {
  return (
    <div>
      <Header foods={MockDataOrder} />
      <HeroHomePage />
      <InfoCard />
      <FoodHomePage foods={foods} />
      <Footer />
    </div>
  );
}
