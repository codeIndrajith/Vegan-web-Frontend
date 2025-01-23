import React from 'react'
import landingImage from "../../images/landingImage.png"

function LandinImage() {
  return (
    <div className='w-full h-auto'>
        <img src={landingImage} className='w-full h-auto object-cover' alt="landingImage" />
    </div>
  )
}

export default LandinImage