import React from 'react'
import UpcomingEventImage from "../../images/UpcomingEvent.png"
import { Link } from 'react-router-dom'

function Events({ eventId }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <Link to={`/all-events/${eventId}`}>
            <div className='rounded-md w-full'>
                <img src={UpcomingEventImage} className='w-full h-auto object-cover' alt="" />
                <div className='flex flex-col items-center justify-center px-2 py-4'>
                    <h1 className='text-md font-bold'>Fermented Bean Paste</h1>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius veniam vero tenetur nemo qui quaerat ea assumenda vitae, voluptates consequatur quisquam officiis facere dolorum. Eveniet at aspernatur provident quaerat.</p>
                </div>
            </div>
        </Link>
        <div className='rounded-md w-full'>
            <img src={UpcomingEventImage} className='w-full h-auto object-cover' alt="" />
            <div className='flex flex-col items-center justify-center px-2 py-4'>
                <h1 className='text-md font-bold'>Fermented Bean Paste</h1>
                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius veniam vero tenetur nemo qui quaerat ea assumenda vitae, voluptates consequatur quisquam officiis facere dolorum. Eveniet at aspernatur provident quaerat.</p>
            </div>
        </div>

        <div className='rounded-md w-full'>
            <img src={UpcomingEventImage} className='w-full h-auto object-cover' alt="" />
            <div className='flex flex-col items-center justify-center px-2 py-4'>
                <h1 className='text-md font-bold'>Fermented Bean Paste</h1>
                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius veniam vero tenetur nemo qui quaerat ea assumenda vitae, voluptates consequatur quisquam officiis facere dolorum. Eveniet at aspernatur provident quaerat.</p>
            </div>
        </div>

        <div className='rounded-md w-full'>
            <img src={UpcomingEventImage} className='w-full h-auto object-cover' alt="" />
            <div className='flex flex-col items-center justify-center px-2 py-4'>
                <h1 className='text-md font-bold'>Fermented Bean Paste</h1>
                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius veniam vero tenetur nemo qui quaerat ea assumenda vitae, voluptates consequatur quisquam officiis facere dolorum. Eveniet at aspernatur provident quaerat.</p>
            </div>
        </div>

        <div className='rounded-md w-full'>
            <img src={UpcomingEventImage} className='w-full h-auto object-cover' alt="" />
            <div className='flex flex-col items-center justify-center px-2 py-4'>
                <h1 className='text-md font-bold'>Fermented Bean Paste</h1>
                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius veniam vero tenetur nemo qui quaerat ea assumenda vitae, voluptates consequatur quisquam officiis facere dolorum. Eveniet at aspernatur provident quaerat.</p>
            </div>
        </div>

        <div className='rounded-md w-full'>
            <img src={UpcomingEventImage} className='w-full h-auto object-cover' alt="" />
            <div className='flex flex-col items-center justify-center px-2 py-4'>
                <h1 className='text-md font-bold'>Fermented Bean Paste</h1>
                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius veniam vero tenetur nemo qui quaerat ea assumenda vitae, voluptates consequatur quisquam officiis facere dolorum. Eveniet at aspernatur provident quaerat.</p>
            </div>
        </div>

        <div className='rounded-md w-full'>
            <img src={UpcomingEventImage} className='w-full h-auto object-cover' alt="" />
            <div className='flex flex-col items-center justify-center px-2 py-4'>
                <h1 className='text-md font-bold'>Fermented Bean Paste</h1>
                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius veniam vero tenetur nemo qui quaerat ea assumenda vitae, voluptates consequatur quisquam officiis facere dolorum. Eveniet at aspernatur provident quaerat.</p>
            </div>
        </div>

        <div className='rounded-md w-full'>
            <img src={UpcomingEventImage} className='w-full h-auto object-cover' alt="" />
            <div className='flex flex-col items-center justify-center px-2 py-4'>
                <h1 className='text-md font-bold'>Fermented Bean Paste</h1>
                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius veniam vero tenetur nemo qui quaerat ea assumenda vitae, voluptates consequatur quisquam officiis facere dolorum. Eveniet at aspernatur provident quaerat.</p>
            </div>
        </div>
    </div>
  )
}

export default Events