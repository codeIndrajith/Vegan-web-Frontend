import React, { useState } from "react";
import ProductCards from "../../components/AllProductComponents/ProductCards";
import potato from "../../images/potato.png";
import {
  useAddProductMutation,
  useGetAllProductQuery,
} from "../../slices/productManufactureApiSlice";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";
import { useLogoutMutation } from "../../slices/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { clearCredentials } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";

const ProductManufactureDashboard = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const {
    data: products,
    isLoading: productLoading,
    error,
    refetch,
  } = useGetAllProductQuery({ page: 1, limit: 100, owner: userInfo.userId });

  const [formData, setFormData] = useState({
    image: "",
    productName: "",
    productPrice: 0,
    description: "",
    productIncludes: "",
  });
  const [word, setWord] = useState("all-products");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [addProduct, isLoading] = useAddProductMutation();

  const [logout] = useLogoutMutation();

  const handleChnage = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await addProduct(formData).unwrap();
      if (res.success) {
        setFormData({
          image: "",
          productName: "",
          productPrice: 0,
          description: "",
          productIncludes: "",
        });
        toast.success(`${res.message}`);
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      const res = await logout();
      console.log(res);
      if (res.data.success) {
        dispatch(clearCredentials(res.data));
        toast.success("Logout complete");
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {productLoading ? (
        <Loader />
      ) : error ? (
        <p>Error</p>
      ) : (
        <div className="flex items-start flex-col lg:flex-row">
          <div className="bg-[#1B57C7] h-screen w-full lg:w-1/4 flex flex-col gap-8 items-start py-32 px-4">
            <h1
              className="text-white text-sm lg:text-lg cursor-pointer"
              onClick={() => setWord("products")}
            >
              Addedd Products
            </h1>
            <h1
              className="text-white text-sm lg:text-lg cursor-pointer"
              onClick={() => setWord("orders")}
            >
              Orders
            </h1>
            <h1
              className="text-white text-sm lg:text-lg cursor-pointer"
              onClick={handleLogout}
            >
              Log Out
            </h1>
          </div>
          <div className="w-full h-screen overflow-y-auto lg:w-3/4 py-1 lg:py-2">
            <div className="flex items-center justify-between px-4">
              <div>
                <h1 className="text-3xl text-bold">Dashboard</h1>
                <h1 className="text-md">Shiran Kumarasinghe</h1>
              </div>

              <div>
                {word === "products" ? (
                  <button
                    className="border bg-blue-500 text-white rounded-sm px-4 py-1 lg:py-2"
                    onClick={() => setWord("all-products")}
                  >
                    Back
                  </button>
                ) : word === "all-products" ? (
                  <button
                    className={`border bg-blue-500 text-white rounded-sm px-4 py-1 lg:py-2`}
                    onClick={() => setWord("products")}
                  >
                    Add Product +
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>

            {word === "products" ? (
              <div className="p-4 h-auto overflow-y-auto">
                <form className="grid gap-4 py-8 px-2" onSubmit={submitHandler}>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center">
                    <label className="text-sm lg:text-lg col-span-1">
                      Add Product Image
                    </label>
                    <input
                      required
                      name="image"
                      value={formData.image}
                      onChange={handleChnage}
                      className="border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full"
                      type="text"
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center">
                    <label className="text-sm lg:text-lg col-span-1">
                      Product Name
                    </label>
                    <input
                      required
                      name="productName"
                      value={formData.productName}
                      onChange={handleChnage}
                      className="border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full"
                      type="text"
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center">
                    <label className="text-sm lg:text-lg col-span-1">
                      Product Price
                    </label>
                    <input
                      required
                      name="productPrice"
                      value={formData.productPrice}
                      onChange={handleChnage}
                      className="border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full"
                      type="number"
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center">
                    <label className="text-sm lg:text-lg col-span-1">
                      Description
                    </label>
                    <input
                      required
                      name="description"
                      value={formData.description}
                      onChange={handleChnage}
                      className="border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full"
                      type="text"
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center">
                    <label className="text-sm lg:text-lg col-span-1">
                      Product Includes
                    </label>
                    <input
                      required
                      name="productIncludes"
                      value={formData.productIncludes}
                      onChange={handleChnage}
                      className="border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full"
                      type="text"
                    />
                  </div>

                  <div>
                    <button
                      className="border bg-blue-500 w-full lg:w-auto text-white rounded-sm px-4 py-1 lg:py-2"
                      type="submit"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            ) : word === "all-products" ? (
              <div className="p-4 h-screen">
                <ProductCards products={products.data} />
              </div>
            ) : word === "orders" ? (
              <div className="p-4 h-auto overflow-y-auto w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-2">
                  <div className="bg-green-200 p-4 rounded-2xl shadow-lg w-auto">
                    <div className="flex flex-col items-center">
                      <img
                        src={potato}
                        alt="Fermented Bean Paste"
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <h2 className="text-lg font-semibold mt-2">
                        Fermented Bean Paste
                      </h2>
                      <p className="text-sm text-gray-700">
                        Fermented Bean Paste
                      </p>
                    </div>

                    <div className="flex justify-between mt-4">
                      <button className="bg-green-500 text-white px-4 py-1 rounded-lg">
                        Update
                      </button>
                      <button className="bg-red-500 text-white px-4 py-1 rounded-lg">
                        delete
                      </button>
                    </div>
                  </div>

                  <div className="bg-green-200 p-4 rounded-2xl shadow-lg w-auto">
                    <div className="flex flex-col items-center">
                      <img
                        src={potato}
                        alt="Fermented Bean Paste"
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <h2 className="text-lg font-semibold mt-2">
                        Fermented Bean Paste
                      </h2>
                      <p className="text-sm text-gray-700">
                        Fermented Bean Paste
                      </p>
                    </div>

                    <div className="flex justify-between mt-4">
                      <button className="bg-green-500 text-white px-4 py-1 rounded-lg">
                        Update
                      </button>
                      <button className="bg-red-500 text-white px-4 py-1 rounded-lg">
                        delete
                      </button>
                    </div>
                  </div>

                  <div className="bg-green-200 p-4 rounded-2xl shadow-lg w-auto">
                    <div className="flex flex-col items-center">
                      <img
                        src={potato}
                        alt="Fermented Bean Paste"
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <h2 className="text-lg font-semibold mt-2">
                        Fermented Bean Paste
                      </h2>
                      <p className="text-sm text-gray-700">
                        Fermented Bean Paste
                      </p>
                    </div>

                    <div className="flex justify-between mt-4">
                      <button className="bg-green-500 text-white px-4 py-1 rounded-lg">
                        Update
                      </button>
                      <button className="bg-red-500 text-white px-4 py-1 rounded-lg">
                        delete
                      </button>
                    </div>
                  </div>

                  <div className="bg-green-200 p-4 rounded-2xl shadow-lg w-auto">
                    <div className="flex flex-col items-center">
                      <img
                        src={potato}
                        alt="Fermented Bean Paste"
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <h2 className="text-lg font-semibold mt-2">
                        Fermented Bean Paste
                      </h2>
                      <p className="text-sm text-gray-700">
                        Fermented Bean Paste
                      </p>
                    </div>

                    <div className="flex justify-between mt-4">
                      <button className="bg-green-500 text-white px-4 py-1 rounded-lg">
                        Update
                      </button>
                      <button className="bg-red-500 text-white px-4 py-1 rounded-lg">
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductManufactureDashboard;
