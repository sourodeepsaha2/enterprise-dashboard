import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Analytics from "../pages/Analytics/Analytics";
import Customers from "../pages/Customers/Customers";
import Products from "../pages/Products/Products";
import Orders from "../pages/Orders/Orders";
import Settings from "../pages/Settings/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/settings" element={<Settings />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;