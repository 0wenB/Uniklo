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
    loader: async () => {
      if (localStorage.getItem("token")) {
        return redirect("/products");
      }
      return null;
    },
  },
  {
    path: "/",
    element: <Login />,
    loader: async () => {
      if (localStorage.getItem("token")) {
        return redirect("/products");
      }
      return null;
    },
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
    loader: async () => {
      if (!localStorage.getItem("token")) {
        return redirect("/");
      }
      return null;
    },
  },
]);

export default router;
