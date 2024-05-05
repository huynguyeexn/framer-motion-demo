import { motion } from "framer-motion";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzaContext } from "../../App";
import PrevButton from "../../components/prev-button";

const BasePage = () => {
  const bases = ["Classic", "Thin & Crispy", "Thich Crust"];
  const { pizza, setPizza } = useContext(PizzaContext);

  const handleChooseBase = (base) => {
    if (base === pizza.base) base = "";
    setPizza((prevState) => ({
      ...prevState,
      base,
    }));
  };

  console.log(pizza);

  return (
    <motion.div
      className="base container"
      initial={{
        x: "150vw",
      }}
      animate={{
        x: 0,
      }}
    >
      <h3>Step 1: Choose your base</h3>
      <ul>
        {React.Children.toArray(
          bases.map((item) => (
            <li onClick={() => handleChooseBase(item)}>
              <span className={item === pizza.base ? "active" : ""}>
                {item}
              </span>
            </li>
          ))
        )}
      </ul>
      <div className="navigation">
        <PrevButton />

        {pizza.base && (
          <motion.div
            className="next"
            initial={{
              x: "100vw",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
          >
            <Link to="/toppings">
              <button>Next</button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default BasePage;
