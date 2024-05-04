import React from "react";
import { Link } from "react-router-dom";
import { routersObj } from "../../common/routes";

import "./style.css";

const HomePage = () => {
  return (
    <div className="home container">
      <h2>Welcome to Pizza Joint</h2>
      <Link to={routersObj.base.path}>
        <button>Create Your Pizza</button>
      </Link>
    </div>
  );
};

export default HomePage;
