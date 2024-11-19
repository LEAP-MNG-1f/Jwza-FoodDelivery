import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import { FoodHomePage, FoodHomePageProps } from "../HomePage/BodyHomePage";
import { HeroHomePage } from "../HomePage/HeroHomePage";
import InfoCard from "../HomePage/InfoCard";

export default function HomePage({ foods }: FoodHomePageProps) {
  return (
    <div>
      <Header />
      <HeroHomePage />
      <InfoCard />
      <FoodHomePage foods={foods} />
      <Footer />
    </div>
  );
}
