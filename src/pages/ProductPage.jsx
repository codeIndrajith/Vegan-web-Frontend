import React from 'react'
import logo from '../images/logo.png'
import potato from '../images/potato.png'

function ProductPage() {
  return (
    <div className='px-10 py-4 w-full h-screen'>
         <div className='flex h-[10%] items-center justify-start gap-8'>
                <img className='w-24 h-auto object-cover' src={logo} alt="logo" />
                <h1 className='text-2xl md:text-3xl mb-8 font-bold'>Vegan Delight Near Me</h1>
        </div>

        <div className='flex flex-col md:flex-row w-full h-auto md:h-[90%] mt-auto items-center justify-center gap-4'>
            <div className='flex w-full flex-col items-start gap-4'>
                <h1 className='text-5xl font-bold text-center md:text-start'>Fried Rice in Banana Leaf</h1>
                <p className='text-sm text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores esse, nam optio impedit sequi nemo excepturi quaerat facere delectus rem. Dolores vel iste suscipit et quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, temporibus officiis accusantium doloribus vel vero, ducimus dicta eius est illo voluptas possimus perspiciatis voluptatibus nam sapiente assumenda, sit iusto? Mollitia. Ducimus ex soluta quibusdam.</p>
                <div className='flex items-center gap-8'>
                    <h2 className='font-bold'>Rs: 3,890.00</h2>
                    <div className='flex items-center gap-4'>
                        <button className='bg-[#6BB62D] px-4 py-1 text-white text-lg rounded-lg'>-</button>
                        <p>1</p>
                        <button className='bg-[#6BB62D] px-4 py-1 text-white text-lg rounded-lg'>+</button>
                    </div>
                </div>

                <button className='bg-[#6BB62D] px-4 py-2 text-white text-md rounded-lg'>Buy Now</button>
            </div>
            {/* Image section */}
            <div className='w-full flex items-center justify-center'>
                <img className='w-52 md:w-72 h-auto object-cover animate-rotate' src={potato} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ProductPage