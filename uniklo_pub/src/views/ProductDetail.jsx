import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
const ProductDetail = () => {
  const { productId } = useParams();
  // console.log(productId);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await axios.get(
        `https://www.bryanowen.tech/pub/products/${productId}`
      );
      // console.log(data.data.product);
      setProducts(data.data.product);
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
      <section className=" min-h-screen md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 md:block">
          <img
            className="w-full h-[30rem] object-fit object-cover "
            src={products.imgUrl}
          />
        </div>
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">
              Uniklo Collection
            </p>
            <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
              {products.name}
            </h1>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
              Colours
            </p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600 dark:text-gray-300">
                Smoke Blue with red accents
              </p>
              <div className="w-6 h-6 bg-gradient-to-b from-gray-900 to-indigo-500 ml-3 mr-4 cursor-pointer" />
              <img
                className="dark:hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg2.svg"
                alt="next"
              />
              <img
                className="hidden dark:block"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg2dark.svg"
                alt="next"
              />
            </div>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
              Size
            </p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">
                38.2
              </p>
              <img
                className="dark:hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg2.svg"
                alt="next"
              />
              <img
                className="hidden dark:block"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg2dark.svg"
                alt="next"
              />
            </div>
          </div>
          <div>
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">
              {products.description}
            </p>
            <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">
              Product Code: 8BN321AF2IF0NYA
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
              Length: 13.2 inches
            </p>
            {/* <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
                Height: 10 inches
              </p>
              <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
                Depth: 5.1 inches
              </p> */}
            <p className="md:w-96 text-base leading-normal text-gray-600 dark:text-gray-300 mt-4">
              Composition: 100% calf leather, inside: 100% lamb leather
            </p>
          </div>
          <div>
            <div className="border-t border-b py-4 mt-7 border-gray-200">
              <div
                data-menu=""
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
                  Shipping and returns
                </p>
                <button
                  className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                  role="button"
                  aria-label="show or hide"
                >
                  <img
                    className="transform dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4.svg"
                    alt="dropdown"
                  />
                  <img
                    className="transform hidden dark:block"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4dark.svg"
                    alt="dropdown"
                  />
                </button>
              </div>
              <div
                className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300"
                id="sect"
              >
                You will be responsible for paying for your own shipping costs
                for returning your item. Shipping costs are nonrefundable
              </div>
            </div>
          </div>
          <div>
            <div className="border-b py-4 border-gray-200">
              <div
                data-menu=""
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
                  Contact us
                </p>
                <button
                  className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                  role="button"
                  aria-label="show or hide"
                >
                  <img
                    className="transform dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4.svg"
                    alt="dropdown"
                  />
                  <img
                    className="transform hidden dark:block"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail3-svg4dark.svg"
                    alt="dropdown"
                  />
                </button>
              </div>
              <div
                className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300"
                id="sect"
              >
                If you have any questions on how to return your item to us,
                contact us.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
