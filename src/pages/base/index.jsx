import React, { useContext } from "react";
import { PizzaContext } from "../../App";
import { Link } from "react-router-dom";
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
    <div className="base container">
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
          <div className="next">
            <Link to="/toppings">
              <button>Next</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasePage;
