"use client";
import { AdminPage } from "@/components/pages/AdminPage";
import { ConditionOfUsePage } from "@/components/pages/CondiitonOfUsePage";
import ConfirmationPage from "@/components/pages/ConfirmationPage";
import { DeliveryAreaPage } from "@/components/pages/DeliveryAreaPage";
import HomePage from "@/components/pages/HomePage";
import MenuPage from "@/components/pages/MenuPage";
import OrderPage from "@/components/pages/OrderPage";
import { PrivacyNoticePage } from "@/components/pages/PrivacyNotiePage";
import { BACKEND_ENDPOINT } from "@/constants/constant";

export default function Home() {
  const MockData = [
    {
      _id: "1",
      name: "Ugluunii hool",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWwcNFoNWXoJ4khYIgrYGc98xBxAbMZiz85Q&s",
      ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр",
      price: 1000,
    },
    {
      _id: "2",
      name: "Ugluunii hool",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiIHO1CUN98drcLnuFJTmD3Vx1pGgf0alExg&s",
      ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр",
      price: 1000,
    },
    {
      _id: "3",
      name: "Ugluunii hool",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQehobQBbx8nrvfZxWtzLXOneVuPCrdx2YDUg&s",
      ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр",
      price: 1000,
    },
    {
      _id: "4",
      name: "Ugluunii hool",
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGro_fmqKHFPhFVp57xdW-FzjlyLDMpSnv_w&s",
      ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр",
      price: 1000,
    },
  ];

  return (
    <div>
      {/* <HomePage foods={MockData} />
      <MenuPage foods={MockData} />
      <OrderPage />
      <ConfirmationPage />
      <ConditionOfUsePage />
      <PrivacyNoticePage /> */}
      {/* <AdminPage /> */}
      <DeliveryAreaPage />
    </div>
  );
}
