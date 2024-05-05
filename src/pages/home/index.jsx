import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { routersObj } from "../../common/routes";
import { motion } from "framer-motion";

import "./style.css";
import { PizzaContext } from "../../App";

const HomePage = () => {
  const { resetPizza } = useContext(PizzaContext);
  return (
    <motion.div
      className="home container"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to={routersObj.base.path} onClick={resetPizza}>
        <button>Create Your Pizza</button>
      </Link>
    </motion.div>
  );
};

export default HomePage;
