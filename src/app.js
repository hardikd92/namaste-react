import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderComponent from "./components/layout/Header";
import BodyComponent from "./components/Body";
import ErrorComponent from "./components/ErrorComponent";

const AppLayoutComponent = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BodyComponent />,
      errorElement: <ErrorComponent />,
    },
  ]);
  return (
    <div className="app container-fluid">
      <HeaderComponent />
      <RouterProvider router={router} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);
