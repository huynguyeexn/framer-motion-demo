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
            <li onClick={() => handleChooseTopping(item)}>
              <span className={pizza.toppings.includes(item) ? "active" : ""}>
                {item}
              </span>
            </li>
          ))
        )}
      </ul>
      <div className="navigation">
        <PrevButton />
        <div className="next">
          <Link to="/order">
            <button>Order</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ToppingPage;
