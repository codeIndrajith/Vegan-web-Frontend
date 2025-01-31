import React, { useState } from 'react'
import ProductCards from '../../components/AllProductComponents/ProductCards'

const ManufactureDashboardPage = () => {
  const [isPath , setIsPath] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className='flex items-start flex-col lg:flex-row'>
      <div className='bg-[#1B57C7] h-auto lg:h-screen w-full lg:w-1/4 flex flex-col gap-8 items-start py-32 px-4'>
        <h1 className='text-white text-sm lg:text-lg'>Addedd Products</h1>
        <h1 className='text-white text-sm lg:text-lg'>Orders</h1>
        <h1 className='text-white text-sm lg:text-lg'>Log Out</h1>
      </div>
      <div className='w-full lg:w-3/4 py-1 lg:py-2'>
        <div className='flex items-center justify-between px-4'>
          <div>
            <h1 className='text-3xl text-bold'>Dashboard</h1>
            <h1 className='text-md'>Shiran Kumarasinghe</h1>
          </div>

          <div>
            {isPath ? (
              <button className='border bg-blue-500 text-white rounded-sm px-4 py-1 lg:py-2' onClick={() => setIsPath(!isPath)}>Back</button>
            ) : (
             <button className='border bg-blue-500 text-white rounded-sm px-4 py-1 lg:py-2' onClick={() => setIsPath(!isPath)}>Add Product +</button>
            )}
          </div>
        </div>

        {isPath ? (
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
        ) : (
          <div className='p-4 h-auto overflow-y-auto'>
            <ProductCards />
          </div>
        )}
      </div>
    </div>
  )
}

export default ManufactureDashboardPage