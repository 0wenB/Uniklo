import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const ShowProducts = () => {
  const navigate = useNavigate();
  const clickEdit = () => {
    navigate(`/edit-product`);
  };
  const clickDelete = () => {
    navigate(`/products`);
  };
  const clickUpload = () => {
    navigate(`/upload-image`);
  };
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const { data } = await axios.get("https://www.bryanowen.tech/products", {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log(data.products);
      setProducts(data.products);
      // console.log(products);
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
      <Link
        to="/add-product"
        className="text-red-400 flex justify-center pt-[2rem]"
      >
        Add Product
      </Link>
      <section className="min-h-screen">
        <div className="flex pt-[3rem] justify-center items-center px-2">
          <div className="relative w-[70rem] overflow-x-auto shadow-md sm:rounded-lg ">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Stock
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Image URL
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  return (
                    <>
                      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {product.id}
                        </th>
                        <td className="px-6 py-4">{product.name}</td>
                        <td className="px-6 py-4">{product.description}</td>
                        <td className="px-6 py-4">{product.price}</td>
                        <td className="px-6 py-4">{product.stock}</td>
                        <td className="px-6 py-4">{product.imgUrl}</td>
                        <td className="px-6 py-4">
                          <Link
                            to="/edit-product"
                            className="font-medium pr-2 text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Edit
                          </Link>
                          <Link
                            href="#"
                            onClick={async () => {
                              try {
                                const token = localStorage.getItem("token");
                                await axios.delete(
                                  `https://www.bryanowen.tech/products/${product.id}`,
                                  {
                                    headers: {
                                      Authorization: `Bearer ${token}`,
                                    },
                                  }
                                );
                                clickDelete();
                              } catch (error) {
                                setError(error.message);
                              }
                            }}
                            className="font-medium pr-2 text-red-600 dark:text-blue-500 hover:underline"
                          >
                            Delete
                          </Link>
                          <Link
                            to="/upload-image"
                            className="font-medium text-purple-600 dark:text-blue-500 hover:underline"
                          >
                            Upload_IMG
                          </Link>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowProducts;
