import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzaContext } from "../../App";
import { motion } from "framer-motion";

const OrderPage = () => {
  const { pizza, resetPizza } = useContext(PizzaContext);

  return (
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <p>
        You ordered a <strong>{pizza.base}</strong> pizza with:
      </p>
      {React.Children.toArray(
        pizza.toppings.map((topping) => (
          <>
            <strong>{topping}</strong>
            <br />
          </>
        ))
      )}
      <div className="prev">
        <Link to="/" onClick={resetPizza}>
          <motion.button
            whileHover={{
              scale: 1.2,
              textShadow: "0px 0px 10px #ffffff",
              boxShadow: "0px 0px 10px #ffffff",
            }}
          >
            New Order
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default OrderPage;
