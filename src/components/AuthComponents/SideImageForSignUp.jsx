import React from 'react'
import SignIn from "../../images/Signin.png"

function SideImageForSignUp() {
  return (
   <div className='w-auto h-screen'>
               <img src={SignIn} alt="sign up image" className='h-screen w-[1000px] lg:w-[1400px] object-cover' />
       </div>
  )
}

export default SideImageForSignUp