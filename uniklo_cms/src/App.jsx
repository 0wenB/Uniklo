// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import RegisterForm from "./components/RegisterForm";
import ShowProducts from "./components/ShowProducts";
import UploadImage from "./components/UploadImage";
import AddProduct from "./components/addProduct";

function App() {
  return (
    <>
      <section className="min-h-screen">
        <Navbar />
        <Login />
      </section>
      <section className="min-h-screen">
        <Navbar />
        <ShowProducts />
      </section>
      <section className="min-h-screen">
        <Navbar />
        <AddProduct />
      </section>
      <section className="min-h-screen">
        <Navbar />
        <AddProduct />
      </section>
      <div>
        <Navbar />
        <section className="min-h-screen flex items-center justify-center">
          <UploadImage />
        </section>
      </div>
      {/* <div>
        <Navbar />
        <section className="min-h-screen flex items-stretch text-white ">
          <RegisterForm />
        </section>
      </div> */}
    </>
  );
}

export default App;
