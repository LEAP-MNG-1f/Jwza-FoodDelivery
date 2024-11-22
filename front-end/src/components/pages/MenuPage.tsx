import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import MenuBody from "../MenuPage/MenuBody";
import { MockDataOrder } from "./OrderPage";
import { FoodHomePageProps } from "../HomePage/BodyHomePage";

export default function MenuPage({ foods }: FoodHomePageProps) {
  return (
    <div>
      <Header foods={MockDataOrder} />
      <MenuBody foods={foods} />
      <Footer />
    </div>
  );
}
