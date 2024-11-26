"use client";
import { AdminDashboard } from "../adminPage/AdminDashboard";
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
