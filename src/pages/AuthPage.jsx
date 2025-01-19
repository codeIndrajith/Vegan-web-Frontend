import React from 'react'
import SignInForm from '../components/AuthComponents/SignInForm'
import { useLocation } from 'react-router-dom'
import SignUpForm from '../components/AuthComponents/SignUpForm';
import SideImageForSignUp from '../components/AuthComponents/SideImageForSignUp';
import SideImageForSignIn from '../components/AuthComponents/SideImageForSignIn';


function AuthPage() {
  const location = useLocation();
  const path = location.pathname.split("/").join("");
  return (
    <div className='w-full h-screen flex flex-col xl:flex-row gap-2'>
      {path === "signin" ? (
         <>
             <SideImageForSignIn />
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