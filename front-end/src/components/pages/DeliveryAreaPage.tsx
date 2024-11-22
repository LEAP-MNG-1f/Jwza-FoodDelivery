import { DeliveryArea } from "../ui/DeliveryArea";
import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import { MockDataOrder } from "./OrderPage";

export const DeliveryAreaPage = () => {
  return (
    <div>
      <Header foods={MockDataOrder} />
      <DeliveryArea />
      <Footer />
    </div>
  );
};
