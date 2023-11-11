import ReusableButton from "../components/ReusableButton";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const AddProduct = () => {
  const { productId } = useParams();
  const [categories, setCategories] = useState([]); //buat nunjukin categories di select option
  // const [populateData, setPopulateData] = useState([]); //buat data yg mo dipopulate(edit)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    name: "",
    price: "",
    imgUrl: "",
    stock: "",
    categoryId: "",
    description: "",
  });

  const getSelectedValueCategory = (event) => {
    const newInput = {
      name: userInput.name,
      price: userInput.price,
      imgUrl: userInput.imgUrl,
      stock: userInput.stock,
      categoryId: event.target.value,
      description: userInput.description,
    };
    setUserInput(newInput);
  };
  // const getSelectedValueAuthor = (event) => {
  //   const newInput = {
  //     name: userInput.name,
  //     price: userInput.price,
  //     imgUrl: userInput.imgUrl,
  //     stock: userInput.stock,
  //     categoryId: userInput.categoryId,
  //     description: userInput.description,
  //   };
  //   setUserInput(newInput);
  // };

  const fetchData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const { data } = await axios.get(
        "https://www.bryanowen.tech/categories",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // console.log(data);
      setCategories(data.categories);

      if (productId) {
        const { data } = await axios.get(
          `https://www.bryanowen.tech/products/${productId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        // console.log(data, "<<<");
        // setPopulateData(data.product); //gkjd pake
        // console.log(populateData);
        setUserInput({
          name: data.product.name,
          price: data.product.price,
          imgUrl: data.product.imgUrl,
          stock: data.product.stock,
          categoryId: data.product.categoryId,
          description: data.product.description,
        });
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const postData = async (event) => {
    try {
      event.preventDefault();
      const token = localStorage.getItem("token");
      if (productId) {
        await axios.put(
          `https://www.bryanowen.tech/products/${productId}`,
          userInput,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } else {
        await axios.post("https://www.bryanowen.tech/products", userInput, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
      navigate("/products");
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <>
      {/* {JSON.stringify(userInput)} */}

      <div
        className="relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1613461920867-9ea115fee900?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0" />
        <form
          className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10"
          onSubmit={postData}
        >
          <div className="grid  gap-8 grid-cols-1">
            <div className="flex flex-col ">
              <div className="flex flex-col sm:flex-row items-center py-2">
                {productId ? (
                  <h2 className="font-semibold text-lg mr-auto">
                    Edit Product
                  </h2>
                ) : (
                  <h2 className="font-semibold text-lg mr-auto">Add Product</h2>
                )}
                <div className="w-full sm:w-auto sm:ml-auto mt-1 sm:mt-0" />
              </div>
              <div className="">
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Product name <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="--Product Name--"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="text"
                      name="name"
                      id="integration_shop_name"
                      value={userInput.name}
                      onChange={(event) => {
                        const newInput = {
                          name: event.target.value,
                          price: userInput.price,
                          imgUrl: userInput.imgUrl,
                          stock: userInput.stock,
                          categoryId: userInput.categoryId,
                          description: userInput.description,
                        };
                        setUserInput(newInput);
                      }}
                    />

                    <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Price
                    </label>{" "}
                    <abbr title="required">*</abbr>
                    <input
                      placeholder="--Price--"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="text"
                      name="price"
                      id="integration_shop_name"
                      value={userInput.price}
                      onChange={(event) => {
                        const newInput = {
                          name: userInput.name,
                          price: event.target.value,
                          imgUrl: userInput.imgUrl,
                          stock: userInput.stock,
                          categoryId: userInput.categoryId,
                          description: userInput.description,
                        };
                        setUserInput(newInput);
                      }}
                    />
                    <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                </div>
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className=" font-semibold text-gray-600 py-2">
                    Image URL
                  </label>
                  <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                    <div className="flex">
                      <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                      placeholder="https://"
                      name="imgUrl"
                      value={userInput.imgUrl}
                      onChange={(event) => {
                        const newInput = {
                          name: userInput.name,
                          price: userInput.price,
                          imgUrl: event.target.value,
                          stock: userInput.stock,
                          categoryId: userInput.categoryId,
                          description: userInput.description,
                        };
                        setUserInput(newInput);
                      }}
                    />
                  </div>
                  <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">
                        Stock
                      </label>
                      <input
                        placeholder="--Enter Stock--"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="text"
                        name="stock"
                        id="integration_street_address"
                        value={userInput.stock}
                        onChange={(event) => {
                          const newInput = {
                            name: userInput.name,
                            price: userInput.price,
                            imgUrl: userInput.imgUrl,
                            stock: event.target.value,
                            categoryId: userInput.categoryId,
                            description: userInput.description,
                          };
                          setUserInput(newInput);
                        }}
                      />
                    </div>
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">
                        Category<abbr title="required">*</abbr>
                      </label>
                      <select
                        className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                        required="required"
                        name="categoryId"
                        id="integration_city_id"
                        onChange={getSelectedValueCategory}
                      >
                        <option disabled selected>
                          Category
                        </option>
                        {categories.map((category) => {
                          return (
                            <>
                              <option value={category.id}>
                                {category.name}
                              </option>
                            </>
                          );
                        })}
                      </select>
                      <p
                        className="text-sm text-red-500 hidden mt-3"
                        id="error"
                      >
                        Please fill out this field.
                      </p>
                    </div>
                    {/* {productId ? (
                      <></>
                    ) : (
                      <div className="w-full flex flex-col mb-3">
                        <label className="font-semibold text-gray-600 py-2">
                          Author<abbr title="required">*</abbr>
                        </label>
                        <select
                          className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                          required="required"
                          name="authorId"
                          id="integration_city_id"
                          onChange={getSelectedValueAuthor}
                        >
                          <option disabled selected>
                            -Author
                          </option>
                          <option value="1">Owen</option>
                          <option value="2">Meong</option>
                        </select>
                        <p
                          className="text-sm text-red-500 hidden mt-3"
                          id="error"
                        >
                          Please fill out this field.
                        </p>
                      </div>
                    )} */}
                  </div>
                  <div className="flex-auto w-full mb-1 text-xs space-y-2">
                    <label className="font-semibold text-gray-600 py-2">
                      Description
                    </label>
                    <textarea
                      required=""
                      name="description"
                      id=""
                      className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                      placeholder="Enter product info"
                      spellCheck="false"
                      defaultValue={""}
                      value={userInput.description}
                      onChange={(event) => {
                        const newInput = {
                          name: userInput.name,
                          price: userInput.price,
                          imgUrl: userInput.imgUrl,
                          stock: userInput.stock,
                          categoryId: userInput.categoryId,
                          description: event.target.value,
                        };
                        setUserInput(newInput);
                      }}
                    />
                  </div>
                  <ReusableButton />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
