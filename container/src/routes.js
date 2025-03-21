import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const HomePage = React.lazy(() => import("./components/Homepage.jsx"));
const ListingApp = React.lazy(() => import("listing/App"));
const CartApp = React.lazy(() => import("cart/App"));
const CheckoutApp = React.lazy(() => import("checkout/App"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="listing/*" element={<ListingApp />} />
      <Route path="cart/*" element={<CartApp />} />
      <Route path="checkout/*" element={<CheckoutApp />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;