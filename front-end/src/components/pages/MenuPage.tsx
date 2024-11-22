import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import MenuBody from "../menupage/MenuBody";
import { MockDataOrder } from "./OrderPage";
import { FoodHomePageProps } from "../homepage/BodyHomePage";

export default function MenuPage({ foods }: FoodHomePageProps) {
  return (
    <div>
      <Header foods={MockDataOrder} />
      <MenuBody foods={foods} />
      <Footer />
    </div>
  );
}
