import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import { FoodHomePage } from "../homepage/BodyHomePage";
import { HeroHomePage } from "../homepage/HeroHomePage";
import InfoCard from "../homepage/InfoCard";

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
