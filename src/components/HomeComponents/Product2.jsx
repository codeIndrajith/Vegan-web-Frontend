import React from 'react'
import product2 from '../../images/product2.png'

function Product2() {
  return (
     <div className='w-full mt-8 flex flex-col items-center justify-center'>
          <div className='py-8'>
            <h1 className='text-xl lg:text-5xl font-bold'>Upcoming Vegan Events</h1>
          </div>
    
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full'>
              {/* Cards */}
              <div className='rounded-md w-full'>
                  <img src={product2} className='w-full h-auto object-cover' alt="" />
                <div className='flex flex-col items-center justify-center px-2 py-4'>
                  <h1 className='text-md font-bold'>Fermented Bean Paste</h1>
                  <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius veniam vero tenetur nemo qui quaerat ea assumenda vitae, voluptates consequatur quisquam officiis facere dolorum. Eveniet at aspernatur provident quaerat.</p>
                </div>
              </div>

              <div className='rounded-md w-full'>
                  <img src={product2} className='w-full h-auto object-cover' alt="" />
                <div className='flex flex-col items-center justify-center px-2 py-4'>
                  <h1 className='text-md font-bold'>Fermented Bean Paste</h1>
                  <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius veniam vero tenetur nemo qui quaerat ea assumenda vitae, voluptates consequatur quisquam officiis facere dolorum. Eveniet at aspernatur provident quaerat.</p>
                </div>
              </div>

              <div className='rounded-md w-full'>
                  <img src={product2} className='w-full h-auto object-cover' alt="" />
                <div className='flex flex-col items-center justify-center px-2 py-4'>
                  <h1 className='text-md font-bold'>Fermented Bean Paste</h1>
                  <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius veniam vero tenetur nemo qui quaerat ea assumenda vitae, voluptates consequatur quisquam officiis facere dolorum. Eveniet at aspernatur provident quaerat.</p>
                </div>
              </div>

              <div className='rounded-md w-full'>
                  <img src={product2} className='w-full h-auto object-cover' alt="" />
                <div className='flex flex-col items-center justify-center px-2 py-4'>
                  <h1 className='text-md font-bold'>Fermented Bean Paste</h1>
                  <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius veniam vero tenetur nemo qui quaerat ea assumenda vitae, voluptates consequatur quisquam officiis facere dolorum. Eveniet at aspernatur provident quaerat.</p>
                </div>
              </div>
          </div>
        </div>
  )
}

export default Product2