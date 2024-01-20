import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            width="70"
            height="70"
            src="https://img.icons8.com/matisse/100/hamburger.png"
            alt="hamburger"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only"></span>
            </a>
            <a className="nav-item nav-link" href="#">
              Features
            </a>
            <a className="nav-item nav-link" href="#">
              Pricing
            </a>
            <a className="nav-item nav-link disabled" href="#">
              Disabled
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

const RestaurantCards = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        width="50"
        height="70"
        src="https://img.icons8.com/matisse/100/hamburger.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Burger King</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
};
const BodyComponent = () => {
  return (
    <div className="body-area">
      <RestaurantCards />
    </div>
  );
};
const AppLayoutComponent = () => {
  return (
    <div className="app container">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);
