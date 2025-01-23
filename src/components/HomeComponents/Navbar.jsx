import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex items-center justify-between w-full h-[60px] px-4 bg-white'>
      {/* Logo */}
      <div className='w-auto h-auto'>
        <img src={logo} className='w-24 h-auto object-cover' alt="image logo" />
      </div>

      {/* Menu for larger screens */}
      <div className='hidden md:flex items-center gap-8'>
        <p className='text-sm md:text-md cursor-pointer'>Home</p>
        <p className='text-sm md:text-md cursor-pointer'>About</p>
        <p className='text-sm md:text-md cursor-pointer'>Explore</p>
        <p className='text-sm md:text-md cursor-pointer'>Shop</p>
        <p className='text-sm md:text-md cursor-pointer'>Community</p>
        <p className='text-sm md:text-md cursor-pointer'>My Delivery Details</p>
      </div>

      {/* Toggle Button for small/medium screens */}
      <div className='md:hidden flex items-center'>
        <button
          className='text-xl focus:outline-none'
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu for small/medium screens */}
      {menuOpen && (
        <div className='absolute top-[60px] left-0 w-full bg-white shadow-lg z-10 flex flex-col h-screen gap-14 items-center px-4 py-2 md:hidden'>
          <p className='text-sm md:text-md cursor-pointer py-2'>Home</p>
          <p className='text-sm md:text-md cursor-pointer py-2'>About</p>
          <p className='text-sm md:text-md cursor-pointer py-2'>Explore</p>
          <p className='text-sm md:text-md cursor-pointer py-2'>Shop</p>
          <p className='text-sm md:text-md cursor-pointer py-2'>Community</p>
          <p className='text-sm md:text-md cursor-pointer py-2'>My Delivery Details</p>
        </div>
      )}
    </div>
  );
}

export default Navbar;
