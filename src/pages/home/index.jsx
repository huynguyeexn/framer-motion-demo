import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { routersObj } from "../../common/routes";
import { motion } from "framer-motion";

import "./style.css";
import { PizzaContext } from "../../App";

const HomePage = () => {
  const { resetPizza } = useContext(PizzaContext);
  return (
    <div className="home container">
      <motion.h2
        animate={{
          fontSize: "50px",
          color: "#ff2994",
          y: -50,
        }}
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to={routersObj.base.path} onClick={resetPizza}>
        <motion.button
          animate={{
            rotateZ: "360deg",
            scale: 1.5,
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </div>
  );
};

export default HomePage;
