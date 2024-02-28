import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import HeaderComponent from "./components/layout/Header";
import BodyComponent from "./components/Body";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantDetails from "./components/RestaurantDetails";
import About from "./components/About";

const AppLayoutComponent = () => {
  return (
    <div className="app container-fluid">
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutComponent />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/:id",
        element: <RestaurantDetails />,
      },
      {
        path: "/about",
        element: (
          <About
            name={"Hardik Bhatia"}
            location={"Vadodara"}
            techstack={"React, NodeJs, ExpressJs, Next.Js, MongoDB"}
          />
        ),
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
