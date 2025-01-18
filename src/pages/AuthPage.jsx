import React from 'react'
import SideImage from '../components/AuthComponents/SideImage'
import RightSideSection from '../components/AuthComponents/RightSideSection'


function AuthPage() {
  return (
    <div className='w-full h-screen flex flex-col xl:flex-row gap-2'>
        {/* Side Image  */}
        <SideImage />
        {/* Right side section */}
        <RightSideSection />
    </div>
  )
}

export default AuthPage