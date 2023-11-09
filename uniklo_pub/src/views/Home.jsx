import axios from "axios";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";
import SearchFilter from "../components/SearchFilter";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://www.bryanowen.tech/pub/products"
      );
      setProducts(data.result.data);
      // console.log(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
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
    </>
  );
};

export default Home;
