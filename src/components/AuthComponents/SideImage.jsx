import React from 'react'
import singUpImage from "../../images/SignUp.png";

function SideImage() {
  return (
    <div className='w-auto h-screen'>
            <img src={singUpImage} alt="sign up image" className='h-screen w-[1000px] lg:w-[1400px] object-cover' />
    </div>
  )
}

export default SideImage