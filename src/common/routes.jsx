import { createHashRouter } from "react-router-dom";
import Layout from "../components/layout";
import BasePage from "../pages/base";
import HomePage from "../pages/home";
import OrderPage from "../pages/order";
import ToppingPage from "../pages/topping";

export const routersObj = {
  home: {
    path: "",
    component: <HomePage />,
  },
  base: {
    path: "base",
    component: <BasePage />,
  },
  topping: {
    path: "toppings",
    component: <ToppingPage />,
  },
  order: {
    path: "order",
    component: <OrderPage />,
  },
};

const routers = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: Object.keys(routersObj).map((key) => ({
      path: routersObj[key].path,
      element: routersObj[key].component,
    })),
  },
  {
    basename: window.location.pathname || "",
  },
]);

export default routers;
