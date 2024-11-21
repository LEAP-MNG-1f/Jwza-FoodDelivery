import { AddressInfo } from "../order/AddressInfo";
import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import { MockDataOrder } from "./OrderPage";

export default function ConfirmationPage() {
  return (
    <div>
      <Header foods={MockDataOrder} />
      <AddressInfo />
      <Footer />
    </div>
  );
}
