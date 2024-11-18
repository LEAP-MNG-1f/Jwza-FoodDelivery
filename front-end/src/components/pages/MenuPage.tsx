import { Footer } from "../Footer";
import Header from "../Header";
import { FoodHomePageProps } from "../HomePage/BodyHomePage";
import MenuBody from "../MenuPage/MenuBody";

export default function MenuPage({ foods }: FoodHomePageProps) {
  return (
    <div>
      <Header />
      <MenuBody foods={foods} />
      <Footer />
    </div>
  );
}
