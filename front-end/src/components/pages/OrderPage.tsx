import RightDrawer from "../orderpage/RightDrawer";
import { Footer } from "../ui/Footer";
import Header from "../ui/Header";

export const MockDataOrder = [
  {
    _id: "1",
    name: "Ugluunii hool",
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwcNFoNWXoJ4khYIgrYGc98xBxAbMZiz85Q&s",
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр",
    price: 1000,
  },
];
export default function OrderPage() {
  return (
    <div>
      <Header foods={MockDataOrder} />
      <Footer />
    </div>
  );
}
