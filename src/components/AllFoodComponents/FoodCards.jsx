import React from 'react'
import { Link } from 'react-router-dom'
import food from '../../images/food.png'

function FoodCards({foodId}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        
        <Link to={`/all-foods/${foodId}`}>
          <div className='flex flex-col items-center justify-center border py-2 rounded-2xl'>
                  <img src={food} className='w-46 h-auto object-cover' alt="" />
                  <div className='flex flex-col items-center justify-center px-8'>
                        <h1>Asparagus - Bunch</h1>
                        <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h2 className='text-md font-bold'>$ 10.00</h2>
          
                        <button className='px-8 py-2 bg-[#5FAA46] rounded-2xl text-white'>Buy</button>
                  </div>
          </div>
        </Link>

        <Link to={`/all-foods/${foodId}`}>
          <div className='flex flex-col items-center justify-center border py-2 rounded-2xl'>
                  <img src={food} className='w-46 h-auto object-cover' alt="" />
                  <div className='flex flex-col items-center justify-center px-8'>
                        <h1>Asparagus - Bunch</h1>
                        <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h2 className='text-md font-bold'>$ 10.00</h2>
          
                        <button className='px-8 py-2 bg-[#5FAA46] rounded-2xl text-white'>Buy</button>
                  </div>
          </div>
        </Link>

        <Link to={`/all-foods/${foodId}`}>
          <div className='flex flex-col items-center justify-center border py-2 rounded-2xl'>
                  <img src={food} className='w-46 h-auto object-cover' alt="" />
                  <div className='flex flex-col items-center justify-center px-8'>
                        <h1>Asparagus - Bunch</h1>
                        <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h2 className='text-md font-bold'>$ 10.00</h2>
          
                        <button className='px-8 py-2 bg-[#5FAA46] rounded-2xl text-white'>Buy</button>
                  </div>
          </div>
        </Link>

        <Link to={`/all-foods/${foodId}`}>
          <div className='flex flex-col items-center justify-center border py-2 rounded-2xl'>
                  <img src={food} className='w-46 h-auto object-cover' alt="" />
                  <div className='flex flex-col items-center justify-center px-8'>
                        <h1>Asparagus - Bunch</h1>
                        <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h2 className='text-md font-bold'>$ 10.00</h2>
          
                        <button className='px-8 py-2 bg-[#5FAA46] rounded-2xl text-white'>Buy</button>
                  </div>
          </div>
        </Link>

        <Link to={`/all-foods/${foodId}`}>
          <div className='flex flex-col items-center justify-center border py-2 rounded-2xl'>
                  <img src={food} className='w-46 h-auto object-cover' alt="" />
                  <div className='flex flex-col items-center justify-center px-8'>
                        <h1>Asparagus - Bunch</h1>
                        <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h2 className='text-md font-bold'>$ 10.00</h2>
          
                        <button className='px-8 py-2 bg-[#5FAA46] rounded-2xl text-white'>Buy</button>
                  </div>
          </div>
        </Link>

        <Link to={`/all-foods/${foodId}`}>
          <div className='flex flex-col items-center justify-center border py-2 rounded-2xl'>
                  <img src={food} className='w-46 h-auto object-cover' alt="" />
                  <div className='flex flex-col items-center justify-center px-8'>
                        <h1>Asparagus - Bunch</h1>
                        <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h2 className='text-md font-bold'>$ 10.00</h2>
          
                        <button className='px-8 py-2 bg-[#5FAA46] rounded-2xl text-white'>Buy</button>
                  </div>
          </div>
        </Link>

        <Link to={`/all-foods/${foodId}`}>
          <div className='flex flex-col items-center justify-center border py-2 rounded-2xl'>
                  <img src={food} className='w-46 h-auto object-cover' alt="" />
                  <div className='flex flex-col items-center justify-center px-8'>
                        <h1>Asparagus - Bunch</h1>
                        <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h2 className='text-md font-bold'>$ 10.00</h2>
          
                        <button className='px-8 py-2 bg-[#5FAA46] rounded-2xl text-white'>Buy</button>
                  </div>
          </div>
        </Link>

        <Link to={`/all-foods/${foodId}`}>
          <div className='flex flex-col items-center justify-center border py-2 rounded-2xl'>
                  <img src={food} className='w-46 h-auto object-cover' alt="" />
                  <div className='flex flex-col items-center justify-center px-8'>
                        <h1>Asparagus - Bunch</h1>
                        <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h2 className='text-md font-bold'>$ 10.00</h2>
          
                        <button className='px-8 py-2 bg-[#5FAA46] rounded-2xl text-white'>Buy</button>
                  </div>
          </div>
        </Link>

        
    </div>
  )
}

export default FoodCards