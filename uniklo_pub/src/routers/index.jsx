import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "../views/home";
import ProductDetail from "../views/ProductDetail";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:productId",
    element: <ProductDetail />,
  },
]);

export default router;
