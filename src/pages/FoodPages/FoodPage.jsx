import React from "react";
import food from "../../images/food.png";
import logo from "../../images/logo.png";
import { useParams } from "react-router-dom";
import { useGetFoodQuery } from "../../slices/resturantManufactureApiSlice";
import toast from "react-hot-toast";
import { useBuyProductMutation } from "../../slices/userApiSlice";

function FoodPage() {
  const params = useParams();

  const { data: food, isLoading, error } = useGetFoodQuery(params.foodId);

  const [buyProduct] = useBuyProductMutation();

  const buyFood = async () => {
    const payload = {
      foodId: params.foodId,
    };
    try {
      const response = await buyProduct(payload);
      if (response?.data?.success) {
        toast.success(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="px-10 py-4 w-full h-screen">
      <div className="flex items-center h-[10%] justify-start gap-8">
        <img className="w-24 h-auto object-cover" src={logo} alt="logo" />
        <h1 className="text-2xl md:text-3xl mb-8 font-bold">Vegan Shopping</h1>
      </div>
      {food && (
        <div className="flex flex-col lg:flex-row w-full h-auto md:h-[90%] items-center gap-12 px-2 md:px-12 lg:px-24 py-2 rounded-2xl">
          <img
            src={food.data?.image}
            className="w-[700px] h-[400px] object-cover"
            alt=""
          />
          <div className="flex flex-col items-start justify-center px-8 gap-2">
            <h1>{food.data?.productName}</h1>
            <p className="text-sm text-gray-400">{food.data?.description}</p>
            <h2 className="text-md font-bold">$ {food.data?.productPrice}</h2>

            <button
              onClick={buyFood}
              className="px-8 py-2 bg-[#5FAA46] rounded-2xl text-white"
            >
              Buy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FoodPage;
