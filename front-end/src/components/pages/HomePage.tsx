import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import { FoodHomePage } from "../homepage/BodyHomePage";
import { HeroHomePage } from "../homepage/HeroHomePage";
import InfoCard from "../homepage/InfoCard";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { useEffect, useState } from "react";
import { FoodType } from "../ui/Types";

// type CartParamType = {
//   id: string
// }

export default function HomePage() {
  const [foods, setFoods] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<FoodType[]>([]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  const fetchFoods = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/api/foods`);
      const dataFoods = await response.json();

      setFoods(dataFoods?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <div>
      <Header />
      <HeroHomePage />
      <InfoCard />
      <FoodHomePage
        foodsData={foods}
        item={{
          catgeory: {
            _id: "",
            name: "",
          },
          categoryId: "",
          image: "",
          ingredient: "",
          name: "",
          price: 0,
          _id: "",
        }}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        quantity={quantity}
      />
      <Footer />
    </div>
  );
}
