"use client";
import { AdminDashboard } from "../adminpage/AdminDashboard";
import { Footer } from "../ui/Footer";
import Header from "../ui/Header";

export const AdminPage = () => {
  return (
    <div>
      <Header />
      <AdminDashboard />
      <Footer />
    </div>
  );
};
