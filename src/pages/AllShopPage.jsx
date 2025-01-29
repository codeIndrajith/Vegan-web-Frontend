import React from 'react'
import logo from '../images/logo.png'
import ShopCards from '../components/AllShopComponents/ShopCards'

function AllShopPage() {
  return (
    <div className='px-10 py-4 w-full h-screen'>
    <div className='flex items-center justify-start gap-8'>
        <img className='w-24 h-auto object-cover' src={logo} alt="logo" />
        <h1 className='text-2xl md:text-3xl mb-8 font-bold'>Vegan Delight Near Me</h1>
    </div>

    <ShopCards />

    <div className='flex items-center gap-2 justify-center mt-4'>
        <button className='bg-gray-200 px-8 py-2 rounded-lg'>Previous</button>
        <p>1 Page</p>
        <button className='bg-gray-200 px-8 py-2 rounded-lg'>Next</button>
    </div>
    
</div>
  )
}

export default AllShopPage