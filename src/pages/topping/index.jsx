import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzaContext } from "../../App";
import PrevButton from "../../components/prev-button";
import { motion } from "framer-motion";

const ToppingPage = () => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];
  const { pizza, setPizza } = useContext(PizzaContext);

  const handleChooseTopping = (item) => {
    let newToppings = [];
    if (pizza.toppings.includes(item)) {
      newToppings = pizza.toppings.filter((topping) => topping !== item);
    } else {
      newToppings = [...pizza.toppings, item];
    }

    setPizza((prevState) => ({
      ...prevState,
      toppings: newToppings,
    }));
  };

  return (
    <motion.div
      className="topping container"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <h3>Step 2: Choose your toppings</h3>

      <ul>
        {React.Children.toArray(
          toppings.map((item) => (
            <motion.li
              onClick={() => handleChooseTopping(item)}
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: "#f8e112",
              }}
              transition={{
                type: "spring",
                stiffness: 500,
              }}
            >
              <span className={pizza.toppings.includes(item) ? "active" : ""}>
                {item}
              </span>
            </motion.li>
          ))
        )}
      </ul>
      <div className="navigation">
        <PrevButton />
        <div className="next">
          <Link to="/order">
            <motion.button
              whileHover={{
                scale: 1.2,
                textShadow: "0px 0px 10px #ffffff",
                boxShadow: "0px 0px 10px #ffffff",
              }}
            >
              Order
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ToppingPage;
