"use client";
import { OrderConfirmation } from "../order/OrderConfrimation";
import { Footer } from "../ui/Footer";
import Header from "../ui/Header";

export default function OrderConfirmationPage() {
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center items-center">
        <div className="w-[1200px] flex justify-between px-[80px] my-[120px]">
          <OrderConfirmation />
        </div>
      </div>
      <Footer />
    </div>
  );
}
