import { AdminDashboard } from "../adminPage/AdminDashboard";
import { Footer } from "../ui/Footer";
import Header from "../ui/Header";
import { MockDataOrder } from "./OrderPage";

export const AdminPage = () => {
  return (
    <div>
      <Header foods={MockDataOrder}/>
      <AdminDashboard />
      <Footer />
    </div>
  );
};
