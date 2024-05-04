import { RouterProvider } from "react-router-dom";
import routers from "./common/routes";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
