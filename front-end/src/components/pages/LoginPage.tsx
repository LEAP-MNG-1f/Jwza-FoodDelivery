import Header from "../ui/Header";
import { MockDataOrder } from "./OrderPage";
import { Footer } from "../ui/Footer";
import { Login } from "../login/Login";

export const LoginPage = () => {
  return (
    <div>
      <Header />
      <Login />
      <Footer />
    </div>
  );
};
