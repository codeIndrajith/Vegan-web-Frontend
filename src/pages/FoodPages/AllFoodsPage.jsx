import React, { useState } from "react";
import logo from "../../images/logo.png";
import FoodCards from "../../components/AllFoodComponents/FoodCards";
import { useGetAllFoodsQuery } from "../../slices/resturantManufactureApiSlice";
import Loader from "../../components/Loader";

function AllFoodsPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const {
    data: foods,
    isLoading: foodsLoading,
    error,
    refetch,
  } = useGetAllFoodsQuery({ page, limit });

  const handleNext = () => {
    if (foods?.pagination?.next) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (foods?.pagination?.prev) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  return (
    <>
      <div className="px-10 py-4 w-full h-screen">
        <div className="flex items-center justify-start gap-8">
          <img className="w-24 h-auto object-cover" src={logo} alt="logo" />
          <h1 className="text-2xl md:text-3xl mb-8 font-bold">
            Vegan Shopping
          </h1>
        </div>
        {foodsLoading ? (
          <Loader />
        ) : error ? (
          <p>Error</p>
        ) : (
          <>
            <FoodCards foods={foods?.data} />

            <div className="flex items-center gap-2 justify-center mt-4">
              <button
                onClick={handlePrevious}
                disabled={!foods?.pagination?.prev}
                className={`bg-gray-200 px-8 py-2 rounded-sm ${
                  !foods?.pagination?.prev ? "hidden" : ""
                }`}
              >
                Previous
              </button>
              <p>{page} page</p>
              <button
                onClick={handleNext}
                disabled={!foods?.pagination?.next}
                className={`bg-gray-200 px-8 py-2 rounded-sm ${
                  !foods?.pagination?.next ? "hidden" : ""
                }`}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default AllFoodsPage;
