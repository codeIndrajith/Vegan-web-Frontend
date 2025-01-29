import React from 'react'
import logo from '../../images/logo.png'
import shop from '../../images/shop.png'
import { FaStar } from 'react-icons/fa'
import potato from '../../images/potato.png'
import { Link } from 'react-router-dom'

function ShopPage({productId}) {
  return (
    <div className='px-10 py-4 w-full h-screen'>
      <div className='flex items-center justify-start gap-8'>
              <img className='w-24 h-auto object-cover' src={logo} alt="logo" />
              <h1 className='text-2xl md:text-3xl mb-8 font-bold'>Vegan Friendle Zones Near Me</h1>
      </div>

      <div className='flex flex-col md:flex-row items-center gap-8'>
        <div>
          <img src={shop} className='w-full md:w-64 h-auto object-cover' alt="shop image" />
        </div>
        <div className='w-full md:w-1/2 xl:w-1/4 h-auto'>
          <p className='text-sm'>Shop Name</p>
          <p className='text-sm'>Shop Description</p>
          <p className='text-sm'>Shop Service Data</p>
          <p className='text-sm'>Shop Open Hours</p>
          <p className='text-sm'>Shop Contact Number</p>

          <div className='grid grid-cols-3 gap-4 py-4'>
            <button className='p-2 bg-[#B0EA7D] rounded-xl text-sm'>take away</button>
            <button className='p-2 bg-[#B0EA7D] rounded-xl text-sm'>Dine in</button>
            <button className='p-2 bg-[#B0EA7D] rounded-xl text-sm'>Delivery</button>
          </div>
        </div>
      </div>

      <div className='mt-8'>
        <h1 className='text-xl font-bold py-4'>Shop Available Products</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[450px] overflow-y-auto'>
          <div className='bg-gradient-to-t from-[#BEF6A5] to-[#A8E367] rounded-md w-full p-4'>
                  <Link to={`/all-products/${productId}`}>
                          <div className='flex items-center justify-center'>
                          <img src={potato} className='w-auto h-auto object-cover' alt="" />
                          </div>
                          <div className='flex flex-col mt-2'>
                          <h1 className='text-md font-bold'>Fermented Bean Paste</h1>
                          <p className='text-sm'>hello world</p>
                          <hr />
                          <div className='flex items-center justify-between'>
                              <h2>200</h2>
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

          <div className='bg-gradient-to-t from-[#BEF6A5] to-[#A8E367] rounded-md w-full p-4'>
                  <Link to={`/all-products/${productId}`}>
                          <div className='flex items-center justify-center'>
                          <img src={potato} className='w-auto h-auto object-cover' alt="" />
                          </div>
                          <div className='flex flex-col mt-2'>
                          <h1 className='text-md font-bold'>Fermented Bean Paste</h1>
                          <p className='text-sm'>hello world</p>
                          <hr />
                          <div className='flex items-center justify-between'>
                              <h2>200</h2>
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

          <div className='bg-gradient-to-t from-[#BEF6A5] to-[#A8E367] rounded-md w-full p-4'>
                  <Link to={`/all-products/${productId}`}>
                          <div className='flex items-center justify-center'>
                          <img src={potato} className='w-auto h-auto object-cover' alt="" />
                          </div>
                          <div className='flex flex-col mt-2'>
                          <h1 className='text-md font-bold'>Fermented Bean Paste</h1>
                          <p className='text-sm'>hello world</p>
                          <hr />
                          <div className='flex items-center justify-between'>
                              <h2>200</h2>
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

          <div className='bg-gradient-to-t from-[#BEF6A5] to-[#A8E367] rounded-md w-full p-4'>
                  <Link to={`/all-products/${productId}`}>
                          <div className='flex items-center justify-center'>
                          <img src={potato} className='w-auto h-auto object-cover' alt="" />
                          </div>
                          <div className='flex flex-col mt-2'>
                          <h1 className='text-md font-bold'>Fermented Bean Paste</h1>
                          <p className='text-sm'>hello world</p>
                          <hr />
                          <div className='flex items-center justify-between'>
                              <h2>200</h2>
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

          <div className='bg-gradient-to-t from-[#BEF6A5] to-[#A8E367] rounded-md w-full p-4'>
                  <Link to={`/all-products/${productId}`}>
                          <div className='flex items-center justify-center'>
                          <img src={potato} className='w-auto h-auto object-cover' alt="" />
                          </div>
                          <div className='flex flex-col mt-2'>
                          <h1 className='text-md font-bold'>Fermented Bean Paste</h1>
                          <p className='text-sm'>hello world</p>
                          <hr />
                          <div className='flex items-center justify-between'>
                              <h2>200</h2>
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

          <div className='bg-gradient-to-t from-[#BEF6A5] to-[#A8E367] rounded-md w-full p-4'>
                  <Link to={`/all-products/${productId}`}>
                          <div className='flex items-center justify-center'>
                          <img src={potato} className='w-auto h-auto object-cover' alt="" />
                          </div>
                          <div className='flex flex-col mt-2'>
                          <h1 className='text-md font-bold'>Fermented Bean Paste</h1>
                          <p className='text-sm'>hello world</p>
                          <hr />
                          <div className='flex items-center justify-between'>
                              <h2>200</h2>
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

          <div className='bg-gradient-to-t from-[#BEF6A5] to-[#A8E367] rounded-md w-full p-4'>
                  <Link to={`/all-products/${productId}`}>
                          <div className='flex items-center justify-center'>
                          <img src={potato} className='w-auto h-auto object-cover' alt="" />
                          </div>
                          <div className='flex flex-col mt-2'>
                          <h1 className='text-md font-bold'>Fermented Bean Paste</h1>
                          <p className='text-sm'>hello world</p>
                          <hr />
                          <div className='flex items-center justify-between'>
                              <h2>200</h2>
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

          <div className='bg-gradient-to-t from-[#BEF6A5] to-[#A8E367] rounded-md w-full p-4'>
                  <Link to={`/all-products/${productId}`}>
                          <div className='flex items-center justify-center'>
                          <img src={potato} className='w-auto h-auto object-cover' alt="" />
                          </div>
                          <div className='flex flex-col mt-2'>
                          <h1 className='text-md font-bold'>Fermented Bean Paste</h1>
                          <p className='text-sm'>hello world</p>
                          <hr />
                          <div className='flex items-center justify-between'>
                              <h2>200</h2>
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
      </div>
    </div>
  )
}

export default ShopPage