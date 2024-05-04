import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzaContext } from "../../App";

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
          <button>New Order</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderPage;
