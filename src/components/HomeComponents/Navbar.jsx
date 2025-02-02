import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex items-center justify-between w-full h-[60px] px-4 bg-white'>
      {/* Logo */}
      <div className='w-auto h-auto flex gap-2'>
        <img src={logo} className='w-24 h-auto object-cover' alt="image logo" />
      </div>

      {/* Menu for larger screens */}
      <div className='hidden md:flex items-center gap-2 lg:gap-8'>
        <p className='text-sm md:text-md cursor-pointer'>Home</p>
        <p className='text-sm md:text-md cursor-pointer'>About</p>
        <p className='text-sm md:text-md cursor-pointer'>Explore</p>
        <p className='text-sm md:text-md cursor-pointer'>Shop</p>
        <p className='text-sm md:text-md cursor-pointer'>Community</p>
        <p className='text-sm md:text-md cursor-pointer'>My Delivery Details</p>
        {userInfo ? (
            <div>
              <button className='p-2 text-sm bg-black text-white rounded-md'><Link to="/logout">Log out</Link></button>
            </div>
          ): (
            <div className='flex gap-4'>
              <button className='p-2 text-sm bg-black text-white rounded-md'><Link to="/signin">Sign In</Link></button>
              <button className='p-2 text-sm bg-black text-white rounded-md'><Link to="/signup">Sign Up</Link></button>
            </div>
          )}
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
        <div className='absolute top-[60px] left-0 w-full bg-white shadow-lg z-10 h-auto gap-14 items-center px-4 py-8 md:hidden'>
          <p className='text-sm md:text-md cursor-pointer py-2'>Home</p>
          <p className='text-sm md:text-md cursor-pointer py-2'>About</p>
          <p className='text-sm md:text-md cursor-pointer py-2'>Explore</p>
          <p className='text-sm md:text-md cursor-pointer py-2'>Shop</p>
          <p className='text-sm md:text-md cursor-pointer py-2'>Community</p>
          <p className='text-sm md:text-md cursor-pointer py-2'>My Delivery Details</p>
          {userInfo ? (
            <div>
             <button className='p-2 text-sm bg-black text-white rounded-md'><Link to="/logout">Log out</Link></button>
            </div>
          ): (
            <div className='flex gap-4'>
              <button className='p-2 text-sm bg-black text-white rounded-md'><Link to="/signin">Sign In</Link></button>
              <button className='p-2 text-sm bg-black text-white rounded-md'><Link to="/signup">Sign Up</Link></button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
