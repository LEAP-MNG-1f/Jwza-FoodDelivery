"use client";

import { AdminDashboard } from "../adminpage/AdminDashboard";
import HeaderAdmin from "../adminpage/Header";

export const AdminDashboardPage = () => {
  return (
    <div>
      <HeaderAdmin />
      <AdminDashboard />
    </div>
  );
};
