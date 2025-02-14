import React, { useState } from "react";
import potato from "../../images/potato.png";
import ShopCards from "../../components/AllShopComponents/ShopCards";
import FoodCards from "../../components/AllFoodComponents/FoodCards";

const ResturantManufactureDashboard = () => {
  const [word, setWord] = useState("shops");

  const submitHandler = (e) => {
    e.preventDefault();
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
        <h1 className="text-white text-sm lg:text-lg cursor-pointer">
          Log Out
        </h1>
      </div>
      <div className="w-full lg:w-3/4 py-1 lg:py-2">
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
            <form className="grid gap-4 py-8 px-2" onSubmit={submitHandler}>
              <h1 className="text-3xl font-bold">Add Shop</h1>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center">
                <label className="text-sm lg:text-lg col-span-1">
                  Add Shop Image
                </label>
                <input
                  className="border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center">
                <label className="text-sm lg:text-lg col-span-1">
                  Product Name
                </label>
                <input
                  className="border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center">
                <label className="text-sm lg:text-lg col-span-1">
                  Product Price
                </label>
                <input
                  className="border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center">
                <label className="text-sm lg:text-lg col-span-1">
                  Description
                </label>
                <input
                  className="border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center">
                <label className="text-sm lg:text-lg col-span-1">
                  Product Includes
                </label>
                <input
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
          <div className="p-4 h-auto overflow-y-auto">
            <ShopCards />
          </div>
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
            <form className="grid gap-4 py-8 px-2" onSubmit={submitHandler}>
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
                  className="border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center">
                <label className="text-sm lg:text-lg col-span-1">
                  Product Name
                </label>
                <input
                  className="border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center">
                <label className="text-sm lg:text-lg col-span-1">
                  Product Price
                </label>
                <input
                  className="border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center">
                <label className="text-sm lg:text-lg col-span-1">
                  Description
                </label>
                <input
                  className="border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center">
                <label className="text-sm lg:text-lg col-span-1">
                  Product Includes
                </label>
                <input
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
