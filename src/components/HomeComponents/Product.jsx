import React from "react";
import potato from "../../images/potato.png";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetAllProductQuery } from "../../slices/productManufactureApiSlice";
import Loader from "../Loader";

function Product() {
  const {
    data: products,
    isLoading: productLoading,
    error,
    refetch,
  } = useGetAllProductQuery(4);

  return (
    <>
      {productLoading ? (
        <Loader />
      ) : error ? (
        <p>Error</p>
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <div className="py-8">
            <h1 className="text-xl lg:text-3xl font-bold">
              Vegan Delights Near Me
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {/* Cards */}
            {(products?.data || []).map((product) => (
              <div key={product._id} className="bg-white rounded-sm w-full p-4">
                <div className="flex items-center justify-center">
                  <img
                    src={product.image}
                    className="w-full h-[300px] object-cover"
                    alt=""
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <h1 className="text-md font-bold">{product.productName}</h1>
                  <p className="text-sm">{product.productIncludes}</p>
                  <hr />
                  <div className="flex items-center justify-between">
                    <h2>{product.productPrice}</h2>
                    <div className="flex gap-4">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="px-8 py-2 mt-8 w-full sm:w-auto rounded-md bg-[#6BB62D] text-center">
            <Link to="/all-products">View All</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
