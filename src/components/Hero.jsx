import React from 'react'
import Navbar from './HomeComponents/Navbar'
import LandinImage from './HomeComponents/LandinImage'
import Product from './HomeComponents/Product'
import Shop from './HomeComponents/Shop'
import Food from './HomeComponents/Food'
import UpcomingEvent from './HomeComponents/UpcomingEvent'
import Footer from './HomeComponents/Footer'

function Hero() {
  return (
    <div className='px-10 py-4'>
      <Navbar />
      <LandinImage />
      <Product />
      <Shop />
      <Food />
      <UpcomingEvent />
      <Footer />
    </div>
  )
}

export default Hero