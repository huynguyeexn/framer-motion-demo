import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import BasePage from "../pages/base";
import ToppingPage from "../pages/topping";
import OrderPage from "../pages/order";

export const routersObj = {
  home: {
    path: "/",
    component: <HomePage />,
  },
  base: {
    path: "/base",
    component: <BasePage />,
  },
  topping: {
    path: "/topping",
    component: <ToppingPage />,
  },
  order: {
    path: "/order",
    component: <OrderPage />,
  },
};

const routers = createBrowserRouter(
  Object.keys(routersObj).map((key) => ({
    path: routersObj[key].path,
    element: routersObj[key].component,
  }))
);

export default routers;
