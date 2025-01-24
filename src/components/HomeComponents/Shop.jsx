import React from 'react'
import shop from '../../images/shop.png'
import { FaStar } from 'react-icons/fa'

function Shop() {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
          <div className='py-8'>
            <h1 className='text-xl lg:text-3xl font-bold'>Vegan Friendly zones Near Me</h1>
          </div>
    
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full'>
              {/* Cards */}
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
              </div>
          </div>
        </div>
  )
}

export default Shop