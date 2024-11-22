import { ConditionOfUse } from "../ui/ConditionOfUse";
import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import { PrivacyNotice } from "../ui/PrivacyNotice";
import { MockDataOrder } from "./OrderPage";

export const PrivacyNoticePage = () => {
  return (
    <div>
      <Header foods={MockDataOrder} />
      <PrivacyNotice />
      <Footer />
    </div>
  );
};
