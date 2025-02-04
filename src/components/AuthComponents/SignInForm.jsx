import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../slices/userApiSlice'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../slices/authSlice';

function SignInForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role: ""
    })
    const [login, isLoading] = useLoginMutation();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            const res = await login(formData).unwrap();
            if(res.success) {
                dispatch(setCredentials(res.user))
                toast.success("Login complete")
                if(formData.role === 'user') {
                    navigate('/')
                } else if(formData.role === 'productManufacture') {
                    navigate('/product-manufacture')
                } else if(formData.role === 'resturantManufacture') {
                    navigate('/resturant-manufacture')
                } else {
                    navigate('/farmer')
                }
            }
        } catch (error) {
            toast.error(`${error.data.error}`)
        }
    }
  return (
    <div className='w-full h-screen flex items-center justify-center'>
            <form onSubmit={handleSignIn} className='w-[85%]'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-3xl mb-4 text-center text-green-600'>Joined the Vegan Revolution</h1>
                    <h1 className='text-xl font-bold mb-4'>Sign In Today !</h1>
                </div>


                <div className='flex flex-col mt-4'>
                    <label>Email</label>
                    <input required name="email" value={formData.email} onChange={handleChange} placeholder='Add Email' className='border pl-4 border-green-500 rounded-md h-8' type="email" />
                </div>

                    <div className='flex flex-col'>
                        <label>Password</label>
                        <input required name="password" value={formData.password} onChange={handleChange} placeholder='Add Password' className='border pl-4 border-green-500 rounded-md h-8' type="password" />
                    </div>


                <div className='w-full'>
                    <p className='text-sm mt-4 mb-4'>I am a</p>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className='flex gap-2 items-center'>
                            <input type="radio" name='role' value="user" checked={formData.role === "user"} onChange={handleChange}/>
                            <p className="text-sm">Vegan user</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="radio"name='role' value="farmer" checked={formData.role === "farmer"} onChange={handleChange}/>
                            <p className="text-sm">Farmer</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="radio" name='role' value="productManufacture" checked={formData.role === "productManufacture"} onChange={handleChange}/>
                            <p className="text-sm">Product Manufacture</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="radio" name='role' value="resturantManufacture" checked={formData.role === "resturantManufacture"} onChange={handleChange}/>
                            <p className="text-sm">Resturant Manufacture</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center mt-12'>
                    <button type='submit' className='px-4 py-2 bg-[#000259] rounded-md text-white'>Sign In</button>
                    <p>You have no account? <Link to="/signup">Sign Up</Link></p>
                </div>
            </form>
        </div>
  )
}

export default SignInForm