import React from "react";
import { Routes, Route } from "react-router-dom";
import CheckoutPage from "./components/CheckoutPage";
import ThankYouPage from "./components/ThankYouPage";

const App = () => {
  return (
      <Routes>
        <Route index element={<CheckoutPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
  );
};

export default App;