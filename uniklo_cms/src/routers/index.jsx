import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../views/Login";
import Parent from "../views/Parent";
import ShowProducts from "../views/ShowProducts";
import AddProduct from "../views/AddProduct";
import UploadImage from "../views/UploadImage";
import ShowCategories from "../views/ShowCategories";
import RegisterForm from "../views/RegisterForm";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Login />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <Parent />,
    children: [
      {
        path: "/products",
        element: <ShowProducts />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/edit-product/:productId",
        element: <AddProduct />,
      },
      {
        path: "/upload-image/:productId",
        element: <UploadImage />,
      },
      {
        path: "/categories",
        element: <ShowCategories />,
      },
      {
        path: "/add-user",
        element: <RegisterForm />,
      },
    ],
  },
]);

export default router;
