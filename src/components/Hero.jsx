import React from 'react'
import Navbar from './HomeComponents/Navbar'
import LandinImage from './HomeComponents/LandinImage'
import Product from './HomeComponents/Product'
import Shop from './HomeComponents/Shop'
import Food from './HomeComponents/Food'
import Product2 from './HomeComponents/Product2'
import Footer from './HomeComponents/Footer'

function Hero() {
  return (
    <div className='px-10 py-4'>
      <Navbar />
      <LandinImage />
      <Product />
      <Shop />
      <Food />
      <Product2 />
      <Footer />
    </div>
  )
}

export default Hero