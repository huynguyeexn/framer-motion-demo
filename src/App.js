import { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import routers from "./common/routes";

export const initialPizza = {
  base: null,
  toppings: [],
};
export const PizzaContext = createContext(null);

function App() {
  const [pizza, setPizza] = useState(initialPizza);
  const resetPizza = () => setPizza(initialPizza);

  return (
    <PizzaContext.Provider value={{ pizza, setPizza, resetPizza }}>
      <RouterProvider router={routers} />
    </PizzaContext.Provider>
  );
}

export default App;
