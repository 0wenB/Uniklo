// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import RegisterForm from "./components/RegisterForm";
import ShowCategories from "./components/ShowCategories";
import ShowProducts from "./components/ShowProducts";
import UploadImage from "./components/UploadImage";
import AddProduct from "./components/addProduct";

function App() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen">
        <Login />
      </section>
      <section className="min-h-screen">
        <ShowProducts />
      </section>
      <section className="min-h-screen">
        <AddProduct />
      </section>
      <section className="min-h-screen flex items-center justify-center">
        <UploadImage />
      </section>
      <section className="min-h-screen">
        <ShowCategories />
      </section>
      <section className="min-h-screen flex items-stretch text-white ">
        <RegisterForm />
      </section>
    </>
  );
}

export default App;
