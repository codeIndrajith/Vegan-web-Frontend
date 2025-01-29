import React from 'react'
import logo from "../../images/logo.png"
import UpcomingEventImage from "../../images/UpcomingEvent.png"

function EventPage() {
  return (
    <div className='px-10 py-4 w-full h-screen'>
        <div className='flex items-center h-[10%] justify-start gap-8'>
          <img className='w-24 h-auto object-cover' src={logo} alt="logo" />
          <h1 className='text-2xl md:text-3xl mb-8 font-bold'>Upcoming Vegan Events</h1>
      </div>
        <div className='flex flex-col gap-8 md:flex-row w-full h-auto md:h-[90%] items-center justify-between px-2 md:px-12 lg:px-24 py-2 rounded-2xl'>
            <img src={UpcomingEventImage} className='w-full h-auto object-cover' alt="" />
            <div className='flex flex-col items-center justify-center px-2 py-4'>
                <h1 className='text-md font-bold'>Fermented Bean Paste</h1>
                <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius veniam vero tenetur nemo qui quaerat ea assumenda vitae, voluptates consequatur quisquam officiis facere dolorum. Eveniet at aspernatur provident quaerat.</p>
            </div>
        </div>
    </div>
  )
}

export default EventPage