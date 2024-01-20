import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => (
  <header className="heading">
    <h1>Namaste React Header component using Functional component</h1>
  </header>
);

const BodyComponent = () => (
  <div className="container">
    <span>body area</span>
  </div>
);

const FooterComponent = () => <footer>Learning Namaste React.</footer>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <HeaderComponent />
    <BodyComponent />
    <FooterComponent />
  </div>
);
