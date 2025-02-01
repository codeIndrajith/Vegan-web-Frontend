import React, { useState } from 'react'
import ProductCards from '../../components/AllProductComponents/ProductCards'
import potato from '../../images/potato.png'

const ProductManufactureDashboard = () => {
  const [word , setWord] = useState("all-products");

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className='flex items-start flex-col lg:flex-row'>
      <div className='bg-[#1B57C7] h-auto lg:h-screen w-full lg:w-1/4 flex flex-col gap-8 items-start py-32 px-4'>
        <h1 className='text-white text-sm lg:text-lg cursor-pointer' onClick={() => setWord("products")}>Addedd Products</h1>
        <h1 className='text-white text-sm lg:text-lg cursor-pointer' onClick={() => setWord("orders")}>Orders</h1>
        <h1 className='text-white text-sm lg:text-lg cursor-pointer'>Log Out</h1>
      </div>
      <div className='w-full lg:w-3/4 py-1 lg:py-2'>
        <div className='flex items-center justify-between px-4'>
          <div>
            <h1 className='text-3xl text-bold'>Dashboard</h1>
            <h1 className='text-md'>Shiran Kumarasinghe</h1>
          </div>

          <div>
            {word === "products" ? (
              <button className='border bg-blue-500 text-white rounded-sm px-4 py-1 lg:py-2' onClick={() => setWord("all-products")}>Back</button>
            ) : word === "all-products" ? (
             <button className={`border bg-blue-500 text-white rounded-sm px-4 py-1 lg:py-2`} onClick={() => setWord("products")}>Add Product +</button>
            ): (<></>)}
          </div>
        </div>

        {word === "products" ? (
          <div className='p-4 h-auto overflow-y-auto'>
            <form className='grid gap-4 py-8 px-2' onSubmit={submitHandler}>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center'>
                <label className='text-sm lg:text-lg col-span-1'>Add Product Image</label>
                <input className='border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full' type="text" />
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center'>
                <label className='text-sm lg:text-lg col-span-1'>Product Name</label>
                <input className='border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full' type="text" />
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center'>
                <label className='text-sm lg:text-lg col-span-1'>Product Price</label>
                <input className='border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full' type="text" />
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center'>
                <label className='text-sm lg:text-lg col-span-1'>Description</label>
                <input className='border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full' type="text" />
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-1 items-center'>
                <label className='text-sm lg:text-lg col-span-1'>Product Includes</label>
                <input className='border pl-4 col-span-2 py-1 lg:py-2 rounded-sm w-full' type="text" />
              </div>

              <div>
                <button className='border bg-blue-500 w-full lg:w-auto text-white rounded-sm px-4 py-1 lg:py-2' type='submit'>Add</button>
              </div>
            </form>
          </div>
        ) : word === "all-products" ? (
          <div className='p-4 h-auto overflow-y-auto'>
            <ProductCards />
          </div>
        ): word === "orders"? (
          <div className='p-4 h-auto overflow-y-auto w-full'>
            <div className='grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-2'>
                <div className="bg-green-200 p-4 rounded-2xl shadow-lg w-auto">
                  <div className="flex flex-col items-center">
                    <img
                      src={potato} 
                      alt="Fermented Bean Paste"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <h2 className="text-lg font-semibold mt-2">Fermented Bean Paste</h2>
                    <p className="text-sm text-gray-700">Fermented Bean Paste</p>
                  </div>

                  <div className="flex justify-between mt-4">
                    <button className="bg-green-500 text-white px-4 py-1 rounded-lg">Update</button>
                    <button className="bg-red-500 text-white px-4 py-1 rounded-lg">delete</button>
                  </div>
                </div>

                <div className="bg-green-200 p-4 rounded-2xl shadow-lg w-auto">
                  <div className="flex flex-col items-center">
                    <img
                      src={potato} 
                      alt="Fermented Bean Paste"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <h2 className="text-lg font-semibold mt-2">Fermented Bean Paste</h2>
                    <p className="text-sm text-gray-700">Fermented Bean Paste</p>
                  </div>

                  <div className="flex justify-between mt-4">
                    <button className="bg-green-500 text-white px-4 py-1 rounded-lg">Update</button>
                    <button className="bg-red-500 text-white px-4 py-1 rounded-lg">delete</button>
                  </div>
                </div>

                <div className="bg-green-200 p-4 rounded-2xl shadow-lg w-auto">
                  <div className="flex flex-col items-center">
                    <img
                      src={potato} 
                      alt="Fermented Bean Paste"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <h2 className="text-lg font-semibold mt-2">Fermented Bean Paste</h2>
                    <p className="text-sm text-gray-700">Fermented Bean Paste</p>
                  </div>

                  <div className="flex justify-between mt-4">
                    <button className="bg-green-500 text-white px-4 py-1 rounded-lg">Update</button>
                    <button className="bg-red-500 text-white px-4 py-1 rounded-lg">delete</button>
                  </div>
                </div>

                <div className="bg-green-200 p-4 rounded-2xl shadow-lg w-auto">
                  <div className="flex flex-col items-center">
                    <img
                      src={potato} 
                      alt="Fermented Bean Paste"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <h2 className="text-lg font-semibold mt-2">Fermented Bean Paste</h2>
                    <p className="text-sm text-gray-700">Fermented Bean Paste</p>
                  </div>

                  <div className="flex justify-between mt-4">
                    <button className="bg-green-500 text-white px-4 py-1 rounded-lg">Update</button>
                    <button className="bg-red-500 text-white px-4 py-1 rounded-lg">delete</button>
                  </div>
                </div>
            </div>
          </div>
        ) : (
          <></>
        )}

      </div>
    </div>
  )
}

export default ProductManufactureDashboard