import React from 'react'
import { Link } from 'react-router-dom'

function SignInForm() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
            <div className='w-[85%]'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-3xl mb-4 text-center text-green-600'>Joined the Vegan Revolution</h1>
                    <h1 className='text-xl font-bold mb-4'>Sign In Today !</h1>
                </div>


                <div className='flex flex-col mt-4'>
                    <label>Email</label>
                    <input className='border border-green-500 rounded-md h-8' type="email" />
                </div>

                    <div className='flex flex-col'>
                        <label>Password</label>
                        <input className='border border-green-500 rounded-md h-8' type="password" />
                    </div>


                <div className='w-full'>
                    <p className='text-sm mt-4 mb-4'>I am a</p>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className='flex gap-2 items-center'>
                            <input type="radio" name='users'/>
                            <p className="text-sm">Vegan user</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="radio" name='users'/>
                            <p className="text-sm">Farmer</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="radio" name='users'/>
                            <p className="text-sm">Product Manufacture</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="radio" name='users'/>
                            <p className="text-sm">Resturant Manufacture</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center mt-12'>
                    <button className='px-4 py-2 bg-[#000259] rounded-md text-white'>Sign In</button>
                    <p>You have no account? <Link to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>
  )
}

export default SignInForm