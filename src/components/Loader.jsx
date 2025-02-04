import React from 'react'
import loader from '../images/loader.svg'

const Loader = () => {
  return (
    <div className='flex w-full h-screen items-center justify-center'>
        <img className='w-24 h-24' src={loader} alt="loader" />
    </div>
  )
}

export default Loader