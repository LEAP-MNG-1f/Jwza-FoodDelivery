import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import { FoodHomePageProps } from "../HomePage/BodyHomePage";
import MenuBody from "../MenuPage/MenuBody";

export default function MenuPage({ foods }: FoodHomePageProps) {
  return (
    <div>
      <Header foods={foods} />
      <MenuBody foods={foods} />
      <Footer />
    </div>
  );
}
