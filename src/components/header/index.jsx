import React from "react";
import logo from "../../assets/logo.svg";

import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} className="app-logo" alt="logo" />
      </Link>
      <div className="title">
        <h1>Hui Pizza</h1>
      </div>
    </header>
  );
};

export default Header;
