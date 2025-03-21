import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router } from "react-router-dom";

const AppRoutes = lazy(() => import("./routes.js"));

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Router>
        <Navbar />
        <Suspense fallback={<div className="p-4">Loading...</div>}>
          <AppRoutes />
        </Suspense>
      </Router>
    </div>
  );
};

export default App;