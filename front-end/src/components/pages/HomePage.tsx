import Header from "../Header";
import { HeroHomePage } from "../HomePage/HeroHomePage";
import InfoCard from "../HomePage/InfoCard";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroHomePage />
      <InfoCard />
    </div>
  );
}
