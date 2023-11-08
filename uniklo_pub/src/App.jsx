import "./App.css";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./components/ProductDetail";
import SearchFilter from "./components/SearchFilter";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)
  const [products, setProducts] = useState([
    {
      name: "Jeans Slim Fit",
      description: "Celana yang nyaman dipakai dan keren",
      price: 599000,
      stock: 100,
      imgUrl:
        "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/459688/item/idgoods_65_459688.jpg?width=750",
      categoryId: 2,
      authorId: 1,
    },
    {
      name: "Jeans Slim Fit",
      description: "Celana yang nyaman dipakai dan keren",
      price: 599000,
      stock: 100,
      imgUrl:
        "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/459688/item/idgoods_65_459688.jpg?width=750",
      categoryId: 2,
      authorId: 1,
    },
    {
      name: "Jeans Slim Fit",
      description: "Celana yang nyaman dipakai dan keren",
      price: 599000,
      stock: 100,
      imgUrl:
        "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/459688/item/idgoods_65_459688.jpg?width=750",
      categoryId: 2,
      authorId: 1,
    },
    {
      name: "Jeans Slim Fit",
      description: "Celana yang nyaman dipakai dan keren",
      price: 599000,
      stock: 100,
      imgUrl:
        "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/459688/item/idgoods_65_459688.jpg?width=750",
      categoryId: 2,
      authorId: 1,
    },
    {
      name: "Jeans Slim Fit",
      description: "Celana yang nyaman dipakai dan keren",
      price: 599000,
      stock: 100,
      imgUrl:
        "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/459688/item/idgoods_65_459688.jpg?width=750",
      categoryId: 2,
      authorId: 1,
    },
    {
      name: "Jeans Slim Fit",
      description: "Celana yang nyaman dipakai dan keren",
      price: 599000,
      stock: 100,
      imgUrl:
        "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/459688/item/idgoods_65_459688.jpg?width=750",
      categoryId: 2,
      authorId: 1,
    },
  ]);
  return (
    <>
      <Navbar />
      <SearchFilter />
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {products.map((product, i) => {
          return <ProductCard key={i} detail={product} />;
        })}
      </section>
      <Pagination />
      <ProductDetail />
    </>
  );
}

export default App;
