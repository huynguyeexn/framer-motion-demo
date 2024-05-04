import React from "react";
import logo from "../../assets/logo.svg";

import "./style.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} className="app-logo" alt="logo" />
      </div>
      <div className="title">
        <h1>Hui Pizza</h1>
      </div>
    </header>
  );
};

export default Header;
