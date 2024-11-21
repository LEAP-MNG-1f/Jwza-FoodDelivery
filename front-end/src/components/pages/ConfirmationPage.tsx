import { AddressInfo } from "../order/AddressInfo";
import { OrderConfirm } from "../order/OrderConfirm";
import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import { MockDataOrder } from "./OrderPage";

export default function ConfirmationPage() {
  return (
    <div>
      <Header foods={MockDataOrder} />
      <div className="w-full flex justify-center items-center">
        <div className="w-[1200px] flex justify-between px-[80px] my-[120px]">
          <AddressInfo />
          <OrderConfirm foods={MockDataOrder} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
