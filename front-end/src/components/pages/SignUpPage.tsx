import Header from "../ui/Header";
import { MockDataOrder } from "./OrderPage";
import { Footer } from "../ui/Footer";
import { Login } from "../login/Login";
import { SignUp } from "../signup/SignUp";

export const SignUpPage = () => {
  return (
    <div>
      <Header foods={MockDataOrder} />
      <SignUp />
      <Footer />
    </div>
  );
};
