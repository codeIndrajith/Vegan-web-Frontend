import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../../slices/userApiSlice'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../slices/authSlice'
import toast from 'react-hot-toast'

function SignUpForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        nic: "",
        contactNumber: "",
        role: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [register , {isLoading}] = useRegisterMutation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const registerUsers = async (e) => {
        e.preventDefault();
        console.log(formData)

        if(formData.password !== formData.confirmPassword) {
            toast.error("password do not match")
        } else {
            const { confirmPassword, ...formDatatoSend } = formData;
            try {
                const res = await register(formDatatoSend).unwrap();
                if(res.success) {
                    dispatch(setCredentials(res.user))
                }
                toast.success("Register complete")
                if(formData.role === 'user') {
                    navigate('/')
                } else if(formData.role === 'productManufacture') {
                    navigate('/product-manufacture')
                } else if(formData.role === 'resturantManufacture') {
                    navigate('/resturant-manufacture')
                } else {
                    navigate('/farmer')
                }
            } catch (error) {
                console.error("Error: ", error)
            }
        }
    }

    
  return (
    <div className='w-full h-screen flex items-center justify-center'>
            <form onSubmit={registerUsers} className='w-[85%]'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-3xl mb-4 text-center text-green-600'>Joined the Vegan Revolution</h1>
                    <h1 className='text-xl font-bold mb-4'>Sign Up Today !</h1>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col'>
                        <label>First Name</label>
                        <input required name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Add Firstname" className='border border-green-500 pl-4 rounded-md h-8' type="text" />
                    </div>
                    <div className='flex flex-col'>
                        <label>Last Name</label>
                        <input required name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Add Lastname" className='border border-green-500 pl-4 rounded-md h-8' type="text" />
                    </div>
                    <div className='flex flex-col'>
                        <label>NIC</label>
                        <input required name="nic" value={formData.nic} onChange={handleChange} placeholder="Add NIC" className='border border-green-500 pl-4 rounded-md h-8' type="text" />
                    </div>
                    <div className='flex flex-col'>
                        <label>Contact Number</label>
                        <input required name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Add Contact Number" className='border border-green-500 pl-4 rounded-md h-8' type="number" />
                    </div>
                </div>

                <div className='flex flex-col mt-4'>
                    <label>Email</label>
                    <input required name="email" value={formData.email} onChange={handleChange} placeholder="Add Email" className='border border-green-500 pl-4 rounded-md h-8' type="email" />
                </div>

                <div className='grid grid-cols-2 gap-4 mt-4'>
                    <div className='flex flex-col'>
                        <label>Password</label>
                        <input required name="password" value={formData.password} onChange={handleChange} placeholder="Add Password" className='border border-green-500 pl-4 rounded-md h-8' type="password" />
                    </div>
                    <div className='flex flex-col'>
                        <label>Confirm Password</label>
                        <input required name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Add Confirm Password" className='border border-green-500 pl-4 rounded-md h-8' type="password" />
                    </div>
                </div>

                <div className='w-full'>
                    <p className='text-sm mt-4 mb-4'>I am a</p>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className='flex gap-2 items-center'>
                            <input type="radio" name='role' value="user" checked={formData.role === "user"} onChange={handleChange} />
                            <p className="text-sm">Vegan User</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="radio" name='role' value="farmer" checked={formData.role === "farmer"} onChange={handleChange} />
                            <p className="text-sm">Farmer</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="radio" name='role' value="productManufacture" checked={formData.role === "productManufacture"} onChange={handleChange} />
                            <p className="text-sm">Product Manufacturer</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="radio" name='role' value="resturantManufacture" checked={formData.role === "resturantManufacture"} onChange={handleChange} />
                            <p className="text-sm">Restaurant Owner</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center mt-12'>
                    <button type='submit' className='px-4 py-2 bg-[#000259] rounded-md text-white'>Create Account</button>
                    <p>Already have an account? <Link to="/signin">Sign In</Link></p>
                </div>

                {isLoading && <p>Loading....</p>}
            </form>
    </div>
  )
}

export default SignUpForm