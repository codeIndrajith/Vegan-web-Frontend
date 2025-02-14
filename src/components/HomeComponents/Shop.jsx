import React from "react";
import shop from "../../images/shop.png";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetAllShopsQuery } from "../../slices/resturantManufactureApiSlice";

function Shop() {
  const {
    data: shops,
    isLoading: shopLoading,
    error,
    refetch,
  } = useGetAllShopsQuery({ page: 1, limit: 4 });

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="py-8">
        <h1 className="text-xl lg:text-3xl font-bold">
          Vegan Friendly zones Near Me
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
        {/* Cards */}
        {shops &&
          shops.data.map((shop) => (
            <div key={shop._id} className="rounded-lg w-full p-2">
              <div className="flex w-full items-center justify-center">
                <img
                  src={shop.image}
                  className="w-full h-[300px] object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col mt-2">
                <div className="grid grid-cols-3 gap-4 py-4">
                  <button className="p-2 rounded-md bg-green-700 text-white text-sm">
                    take away
                  </button>
                  <button className="p-2 rounded-md bg-green-700 text-white text-sm">
                    Dine in
                  </button>
                  <button className="p-2 rounded-md bg-green-700 text-white text-sm">
                    Delivery
                  </button>
                </div>
                <hr />
                <div className="flex items-end justify-end">
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

        {/* <div className='rounded-lg w-full p-2'>
                <div className='flex w-full items-center justify-center'>
                  <img src={shop} className='w-full h-auto object-cover' alt="" />
                </div>
                <div className='flex flex-col mt-2'>
                  <div className='grid grid-cols-3 gap-4 py-4'>
                    <button className='p-2 bg-[#B0EA7D] rounded-xl text-sm'>take away</button>
                    <button className='p-2 bg-[#B0EA7D] rounded-xl text-sm'>Dine in</button>
                    <button className='p-2 bg-[#B0EA7D] rounded-xl text-sm'>Delivery</button>
                  </div>
                  <hr />
                  <div className='flex items-end justify-end'>
                    
                    <div className='flex gap-4'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>

              <div className='rounded-lg w-full p-2'>
                <div className='flex w-full items-center justify-center'>
                  <img src={shop} className='w-full h-auto object-cover' alt="" />
                </div>
                <div className='flex flex-col mt-2'>
                  <div className='grid grid-cols-3 gap-4 py-4'>
                    <button className='p-2 bg-[#B0EA7D] rounded-xl text-sm'>take away</button>
                    <button className='p-2 bg-[#B0EA7D] rounded-xl text-sm'>Dine in</button>
                    <button className='p-2 bg-[#B0EA7D] rounded-xl text-sm'>Delivery</button>
                  </div>
                  <hr />
                  <div className='flex items-end justify-end'>
                    
                    <div className='flex gap-4'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
  
              <div className='rounded-lg w-full p-2'>
                <div className='flex w-full items-center justify-center'>
                  <img src={shop} className='w-full h-auto object-cover' alt="" />
                </div>
                <div className='flex flex-col mt-2'>
                  <div className='grid grid-cols-3 gap-4 py-4'>
                    <button className='p-2 bg-[#B0EA7D] rounded-xl text-sm'>take away</button>
                    <button className='p-2 bg-[#B0EA7D] rounded-xl text-sm'>Dine in</button>
                    <button className='p-2 bg-[#B0EA7D] rounded-xl text-sm'>Delivery</button>
                  </div>
                  <hr />
                  <div className='flex items-end justify-end'>
                    
                    <div className='flex gap-4'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div> */}
      </div>

      <div className="px-8 py-2 mt-8 w-full sm:w-auto rounded-md bg-[#6BB62D] text-center">
        <Link to="/all-shops">View All</Link>
      </div>
    </div>
  );
}

export default Shop;
