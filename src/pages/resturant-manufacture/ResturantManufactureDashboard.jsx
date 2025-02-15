import React, { useState } from "react";
import potato from "../../images/potato.png";
import ShopCards from "../../components/AllShopComponents/ShopCards";
import FoodCards from "../../components/AllFoodComponents/FoodCards";
import { useLogoutMutation } from "../../slices/userApiSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { clearCredentials } from "../../slices/authSlice";
import {
  useAddFoodMutation,
  useAddShopMutation,
  useGetAllShopsQuery,
} from "../../slices/resturantManufactureApiSlice";
import Loader from "../../components/Loader";

const ResturantManufactureDashboard = () => {
  const [word, setWord] = useState("shops");

  const [shopFormData, setShopFormData] = useState({
    image: "",
    shopName: "",
    description: "",
    openHours: "",
    locations: "",
    services: "",
  });

  const { userInfo } = useSelector((state) => state.auth);

  const {
    data: shops,
    isLoading: shopsLoading,
    error,
    refetch,
  } = useGetAllShopsQuery({ page: 1, limit: 100, owner: userInfo._id });
  const [logout, isLoading] = useLogoutMutation();

  const [addShop] = useAddShopMutation();
  const [addFood] = useAddFoodMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addShopHandler = async () => {
    try {
      const response = await addShop(shopFormData);
      if (response) {
        toast.success("Product Add Success");

        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addFoodHandler = (e) => {
    e.preventDefault();
  };

  const shopChangeHandler = (e) => {
    const { name, value } = e.target;
    setShopFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const logoutHandler = async () => {
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
    <div className="flex items-start flex-col lg:flex-row">
      <div className="bg-[#1B57C7] h-auto lg:h-screen w-full lg:w-1/4 flex flex-col gap-8 items-start py-32 px-4">
        <h1
          className="text-white text-sm lg:text-lg cursor-pointer"
          onClick={() => setWord("shops")}
        >
          Shop Detail
        </h1>
        <h1
          className="text-white text-sm lg:text-lg cursor-pointer"
          onClick={() => setWord("shop-foods")}
        >
          Shop Foods
        </h1>
        <button
          onClick={logoutHandler}
          className="text-white text-sm lg:text-lg cursor-pointer"
        >
          Log Out
        </button>
      </div>
      <div className="w-full lg:w-3/4 py-1 overflow-y-auto lg:h-screen lg:py-2">
        <div className="flex items-center justify-between px-4">
          <div>
            <h1 className="text-3xl text-bold">Dashboard</h1>
            <h1 className="text-md">Shiran Kumarasinghe</h1>
          </div>

          <div>
            {word === "add-shop" ? (
              <button
                className="border bg-blue-500 text-white rounded-sm px-4 py-1 lg:py-2"
                onClick={() => setWord("shops")}
              >
                Back
              </button>
            ) : word === "shops" ? (
              <button
                className={`border bg-blue-500 text-white rounded-sm px-4 py-1 lg:py-2`}
                onClick={() => setWord("add-shop")}
              >
                Add / Update Shop
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>

        {word === "add-shop" ? (
          <div className="p-4 h-auto overflow-y-auto">
            <form className="grid gap-4 py-8 px-2" onSubmit={addShopHandler}>
              <h1 className="text-3xl font-bold">Add Shop</h1>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center">
                <label className="text-sm lg:text-lg col-span-1">
                  Add Shop Image
                </label>
                <input
                  required
                  name="image"
                  value={shopFormData.image}
                  onChange={shopChangeHandler}
                  className="border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center">
                <label className="text-sm lg:text-lg col-span-1">
                  Shop Name
                </label>
                <input
                  required
                  name="shopName"
                  value={shopFormData.shopName}
                  onChange={shopChangeHandler}
                  className="border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center">
                <label className="text-sm lg:text-lg col-span-1">
                  Description
                </label>
                <input
                  required
                  name="description"
                  value={shopFormData.description}
                  onChange={shopChangeHandler}
                  className="border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center">
                <label className="text-sm lg:text-lg col-span-1">
                  Open Hours
                </label>
                <input
                  required
                  name="openHours"
                  value={shopFormData.openHours}
                  onChange={shopChangeHandler}
                  className="border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center">
                <label className="text-sm lg:text-lg col-span-1">
                  Locations
                </label>
                <input
                  required
                  name="locations"
                  value={shopFormData.locations}
                  onChange={shopChangeHandler}
                  className="border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center">
                <label className="text-sm lg:text-lg col-span-1">
                  Services
                </label>
                <input
                  required
                  name="services"
                  value={shopFormData.services}
                  onChange={shopChangeHandler}
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
        ) : word === "shops" ? (
          <>
            {shopsLoading ? (
              <Loader />
            ) : error ? (
              <p>Data not found</p>
            ) : (
              <div className="p-4 h-auto overflow-y-auto">
                <ShopCards shops={shops?.data} />
              </div>
            )}
          </>
        ) : word === "shop-foods" ? (
          <div className="p-4 h-auto overflow-y-auto w-full">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <h1 className="text-3xl font-bold mb-4">Add Foods</h1>
              <button
                className={`border bg-blue-500 w-full sm:w-auto text-white rounded-sm px-4 py-1 lg:py-2`}
                onClick={() => setWord("add-food")}
              >
                Add Foods
              </button>
            </div>
            <div className="h-auto">
              <FoodCards />
            </div>
          </div>
        ) : word === "add-food" ? (
          <div className="p-4 h-auto overflow-y-auto">
            <form className="grid gap-4 py-8 px-2" onSubmit={addFoodHandler}>
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <h1 className="text-3xl font-bold">Add Food</h1>
                <button
                  className={`border bg-blue-500 w-full sm:w-auto text-white rounded-sm px-4 py-1 lg:py-2`}
                  onClick={() => setWord("shop-foods")}
                >
                  Back
                </button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center">
                <label className="text-sm lg:text-lg col-span-1">
                  Add Food Image
                </label>
                <input
                  required
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
                  className="border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center">
                <label className="text-sm lg:text-lg col-span-1">
                  Description
                </label>
                <input
                  required
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
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ResturantManufactureDashboard;
