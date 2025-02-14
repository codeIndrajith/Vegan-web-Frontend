import React, { useState } from "react";
import logo from "../../images/logo.png";
import ShopCards from "../../components/AllShopComponents/ShopCards";
import { useGetAllShopsQuery } from "../../slices/resturantManufactureApiSlice";

function AllShopPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const {
    data: shops,
    isLoading,
    error,
    refetch,
  } = useGetAllShopsQuery({ page, limit });

  console.log(shops);

  const handleNext = () => {
    if (shops?.pagination?.next) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (shops?.pagination?.prev) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  return (
    <div className="px-10 py-4 w-full h-screen">
      <div className="flex items-center justify-start gap-8">
        <img className="w-24 h-auto object-cover" src={logo} alt="logo" />
        <h1 className="text-2xl md:text-3xl mb-8 font-bold">
          Vegan Delight Near Me
        </h1>
      </div>

      <ShopCards shops={shops?.data} />

      <div className="flex items-center gap-2 justify-center mt-4">
        <button
          onClick={handlePrevious}
          disabled={!shops?.pagination?.prev}
          className={`bg-gray-200 px-8 py-2 rounded-sm ${
            !shops?.pagination?.prev ? "hidden" : ""
          }`}
        >
          Prev
        </button>
        <p>{page} page</p>
        <button
          onClick={handleNext}
          disabled={!shops?.pagination?.next}
          className={`bg-gray-200 px-8 py-2 rounded-sm ${
            !shops?.pagination?.next ? "hidden" : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AllShopPage;
