import React from "react";
import { FaStar } from "react-icons/fa";
import potato from "../../images/potato.png";
import { Link } from "react-router-dom";

function ProductCards({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product._id} className="rounded-md w-full p-4">
          <Link to={`/all-products/${product._id}`}>
            <div className="flex items-center justify-center">
              <img
                src={product.image}
                className="w-full h-[300px] object-fit"
                alt={product.productName}
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
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;
