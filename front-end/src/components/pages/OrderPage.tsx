import RightDrawer from "../order/RightDrawer";

const MockDataOrder = [
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
  return <RightDrawer foods={MockDataOrder} />;
}
