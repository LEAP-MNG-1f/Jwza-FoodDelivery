import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import { FoodHomePageProps } from "../homepage/BodyHomePage";
import MenuBody from "../menupage/MenuBody";
import { MockDataOrder } from "./OrderPage";

export default function MenuPage({ foods }: FoodHomePageProps) {
  return (
    <div>
      <Header foods={MockDataOrder} />
      <MenuBody foods={foods} />
      <Footer />
    </div>
  );
}
