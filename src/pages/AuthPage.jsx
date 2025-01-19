import React from 'react'
import SideImage from '../components/AuthComponents/SideImage'
import SignInForm from '../components/AuthComponents/SignInForm'
import { useLocation } from 'react-router-dom'
import SignUpForm from '../components/AuthComponents/SignUpForm';
import SideImageForSignUp from '../components/AuthComponents/SideImageForSignUp';


function AuthPage() {
  const location = useLocation();
  const path = location.pathname.split("/").join("");
  return (
    <div className='w-full h-screen flex flex-col xl:flex-row gap-2'>
      {path === "signin" ? (
         <>
             <SideImage />
             <SignInForm />
         </>
      ) : (
        <>
            <SideImageForSignUp />
            <SignUpForm />
        </>
      )}
    </div>
  )
}

export default AuthPage