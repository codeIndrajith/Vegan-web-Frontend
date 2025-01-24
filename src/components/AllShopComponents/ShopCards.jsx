import React from 'react'
import { Link } from 'react-router-dom'
import shop from '../../images/shop.png'
import { FaStar } from 'react-icons/fa'


function ShopCards({shopId}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

        <div className='rounded-lg w-full p-2'>
            <Link to={`/all-shops/${shopId}`}>
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
                </Link>
        </div>

        <div className='rounded-lg w-full p-2'>
            <Link to={`/all-shops/${shopId}`}>
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
                </Link>
        </div>

        <div className='rounded-lg w-full p-2'>
            <Link to={`/all-shops/${shopId}`}>
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
                </Link>
        </div>

        <div className='rounded-lg w-full p-2'>
            <Link to={`/all-shops/${shopId}`}>
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
                </Link>
        </div>

        <div className='rounded-lg w-full p-2'>
            <Link to={`/all-shops/${shopId}`}>
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
                </Link>
        </div>

        <div className='rounded-lg w-full p-2'>
            <Link to={`/all-shops/${shopId}`}>
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
                </Link>
        </div>

        <div className='rounded-lg w-full p-2'>
            <Link to={`/all-shops/${shopId}`}>
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
                </Link>
        </div>

        <div className='rounded-lg w-full p-2'>
            <Link to={`/all-shops/${shopId}`}>
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
                </Link>
        </div>

    </div>
  )
}

export default ShopCards