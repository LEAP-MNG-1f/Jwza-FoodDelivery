import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import { PrivacyNotice } from "../ui/PrivacyNotice";
import { MockDataOrder } from "./OrderPage";

export const PrivacyNoticePage = () => {
  return (
    <div>
      <Header />
      <PrivacyNotice />
      <Footer />
    </div>
  );
};
