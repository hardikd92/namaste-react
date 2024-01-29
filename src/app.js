import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/layout/Header";
import BodyComponent from "./components/Body";

const AppLayoutComponent = () => {
  return (
    <div className="app container-fluid">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);
