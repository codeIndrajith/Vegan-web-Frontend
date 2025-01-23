import React from 'react'
import potato from '../../images/potato.png'
import { FaStar } from 'react-icons/fa'

function Product() {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='py-8'>
        <h1 className='text-xl lg:text-3xl font-bold'>Vegan Delights Near Me</h1>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full'>
          {/* Cards */}
          <div className='bg-gradient-to-t from-[#BEF6A5] to-[#A8E367] rounded-md w-full p-4'>
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
          </div>

          <div className='bg-gradient-to-t from-[#BEF6A5] to-[#A8E367] rounded-md w-full p-4'>
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
          </div>

          <div className='bg-gradient-to-t from-[#BEF6A5] to-[#A8E367] rounded-md w-full p-4'>
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
          </div>

          <div className='bg-gradient-to-t from-[#BEF6A5] to-[#A8E367] rounded-md w-full p-4'>
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
          </div>
      </div>
    </div>
  )
}

export default Product