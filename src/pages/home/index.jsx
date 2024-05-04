import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { routersObj } from "../../common/routes";

import "./style.css";
import { PizzaContext } from "../../App";

const HomePage = () => {
  const { resetPizza } = useContext(PizzaContext);
  return (
    <div className="home container">
      <h2>Welcome to Pizza Joint</h2>
      <Link to={routersObj.base.path} onClick={resetPizza}>
        <button>Create Your Pizza</button>
      </Link>
    </div>
  );
};

export default HomePage;
