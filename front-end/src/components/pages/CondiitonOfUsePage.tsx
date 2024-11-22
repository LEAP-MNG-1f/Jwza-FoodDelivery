import { ConditionOfUse } from "../ui/ConditionOfUse";
import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import { MockDataOrder } from "./OrderPage";

export const ConditionOfUsePage = () => {
  return (
    <div>
      <Header foods={MockDataOrder} />
      <ConditionOfUse />
      <Footer />
    </div>
  );
};
