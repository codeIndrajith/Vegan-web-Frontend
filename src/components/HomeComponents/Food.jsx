import React from 'react'
import food from '../../images/food.png'

function Food() {
  return (
    <div className='w-full h-auto flex flex-col mt-32 lg:flex-row items-center justify-between'>
      <div className='py-8 flex flex-col items-center lg:items-start justify-center'>
        <h1 className='text-3xl lg:text-6xl font-bold mb-4'>Step in to Vegan Shoping</h1>
        <button className='px-8 py-2 bg-[#6BB62D] rounded text-nd'>View All</button>
      </div>

      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* cards */}
          <div className='flex flex-col items-center justify-center border py-4 rounded-2xl'>
            <img src={food} className='w-46 h-auto object-cover' alt="" />
            <div className='flex flex-col items-center justify-center px-8'>
              <h1>Asparagus - Bunch</h1>
              <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <h2 className='text-md font-bold'>$ 10.00</h2>

              <button className='px-8 py-2 bg-[#5FAA46] rounded-2xl text-white'>Buy</button>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center border py-4 rounded-2xl'>
            <img src={food} className='w-46 h-auto object-cover' alt="" />
            <div className='flex flex-col items-center justify-center px-8'>
              <h1>Asparagus - Bunch</h1>
              <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet amet amet consectetur adipisicing elit.</p>
              <h2 className='text-md font-bold'>$ 10.00</h2>

              <button className='px-8 py-2 bg-[#5FAA46] rounded-2xl text-white'>Buy</button>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center border py-4 rounded-2xl'>
            <img src={food} className='w-46 h-auto object-cover' alt="" />
            <div className='flex flex-col items-center justify-center px-8'>
              <h1>Asparagus - Bunch</h1>
              <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <h2 className='text-md font-bold'>$ 10.00</h2>

              <button className='px-8 py-2 bg-[#5FAA46] rounded-2xl text-white'>Buy</button>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center border py-4 rounded-2xl'>
            <img src={food} className='w-46 h-auto object-cover' alt="" />
            <div className='flex flex-col items-center justify-center px-8'>
              <h1>Asparagus - Bunch</h1>
              <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <h2 className='text-md font-bold'>$ 10.00</h2>

              <button className='px-8 py-2 bg-[#5FAA46] rounded-2xl text-white'>Buy</button>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center border py-4 rounded-2xl'>
            <img src={food} className='w-46 h-auto object-cover' alt="" />
            <div className='flex flex-col items-center justify-center px-8'>
              <h1>Asparagus - Bunch</h1>
              <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <h2 className='text-md font-bold'>$ 10.00</h2>

              <button className='px-8 py-2 bg-[#5FAA46] rounded-2xl text-white'>Buy</button>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center border py-4 rounded-2xl'>
            <img src={food} className='w-46 h-auto object-cover' alt="" />
            <div className='flex flex-col items-center justify-center px-8'>
              <h1>Asparagus - Bunch</h1>
              <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <h2 className='text-md font-bold'>$ 10.00</h2>

              <button className='px-8 py-2 bg-[#5FAA46] rounded-2xl text-white'>Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Food