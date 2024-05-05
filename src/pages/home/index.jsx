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
      transition={{
        delay: 0.3,
        duration: 0.5,
      }}
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to={routersObj.base.path} onClick={resetPizza}>
        <motion.button
          initial={{
            scale: 0.001,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            delay: 0.6,
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default HomePage;
