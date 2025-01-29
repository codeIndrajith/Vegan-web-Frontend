import React from 'react'
import food from "../../images/food.png"
import logo from "../../images/logo.png"

function FoodPage() {
  return (
    <div className='px-10 py-4 w-full h-screen'>
      <div className='flex items-center h-[10%] justify-start gap-8'>
          <img className='w-24 h-auto object-cover' src={logo} alt="logo" />
          <h1 className='text-2xl md:text-3xl mb-8 font-bold'>Vegan Shopping</h1>
      </div>
        <div className='flex flex-col md:flex-row w-full h-auto md:h-[90%] items-center justify-between px-2 md:px-12 lg:px-24 py-2 rounded-2xl'>
              <img src={food} className='w-[400px] h-auto object-cover' alt="" />
              <div className='flex flex-col items-start justify-center px-8 gap-2'>
                <h1>Asparagus - Bunch</h1>
                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <h2 className='text-md font-bold'>$ 10.00</h2>
                    
                <button className='px-8 py-2 bg-[#5FAA46] rounded-2xl text-white'>Buy</button>
              </div>
        </div>
    </div>
  )
}

export default FoodPage