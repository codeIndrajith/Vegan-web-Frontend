import React, { useState } from "react";
import logo from "../../images/logo.png";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../slices/productManufactureApiSlice";
import { useBuyProductMutation } from "../../slices/userApiSlice";
import toast from "react-hot-toast";

function ProductPage() {
  const params = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductQuery(params.productId);

  const [buyProduct] = useBuyProductMutation();

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleBuyNow = async () => {
    if (product?.data) {
      const payload = {
        productId: params.productId,
        qty: quantity,
      };

      try {
        const response = await buyProduct(payload);
        if (response) {
          toast.success(response?.data?.message);
          setQuantity(1);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="px-10 py-4 w-full h-screen">
      <div className="flex h-[10%] items-center justify-start gap-8">
        <img className="w-24 h-auto object-cover" src={logo} alt="logo" />
        <h1 className="text-2xl md:text-3xl mb-8 font-bold">
          Vegan Delight Near Me
        </h1>
      </div>

      {product && (
        <div className="flex flex-col lg:flex-row w-full h-auto md:h-[90%] mt-auto items-center justify-center gap-4">
          <div className="flex w-full flex-col items-start gap-4">
            <h1 className="text-5xl font-bold text-center md:text-start">
              {product.data?.productName}
            </h1>
            <p className="text-sm text-justify">{product.data?.description}</p>
            <div className="flex items-center gap-8">
              <h2 className="font-bold">Rs: {product.data?.productPrice}</h2>
              <div className="flex items-center gap-4">
                <button
                  className="bg-[#6BB62D] px-4 py-1 text-white text-lg rounded-lg"
                  onClick={() => handleQuantityChange("decrease")}
                >
                  -
                </button>
                <p>{quantity}</p>
                <button
                  className="bg-[#6BB62D] px-4 py-1 text-white text-lg rounded-lg"
                  onClick={() => handleQuantityChange("increase")}
                >
                  +
                </button>
              </div>
            </div>

            <button
              className="bg-[#6BB62D] px-4 py-2 text-white text-md rounded-lg"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
          {/* Image section */}
          <div className="w-full flex items-center justify-center">
            <img
              className="w-[700px] h-[400px] object-cover"
              src={product.data?.image}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
