import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { PiHandbag } from "react-icons/pi";

const Navbar = () => {
  return (
    <>
         <nav className="border-b border-gray-200">
      <div className="container flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <img src="/images/logo.png" alt="" />
        </div>

        {/* Menu Links */}
        <div className="flex space-x-8">
          <NavLink to="/" className={({ isActive }) => isActive? 'text-pink-500 font-semibold':'text-black'}>HOME</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive? 'text-pink-500 font-semibold':'text-black'}>ABOUT</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive? 'text-pink-500 font-semibold':'text-black'}>SERVICES</NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive? 'text-pink-500 font-semibold':'text-black'}>SHOP</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive? 'text-pink-500 font-semibold':'text-black'}>CONTACT</NavLink>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-[25px]">
          {/* Search Icon */}
          <CiSearch className=''/>    
          {/* Cart Icon with Item Count */}
          {/* Cart Total */}
          <Link to='/cart'><PiHandbag /></Link>
          <IoPersonOutline />  
          <Link to='/login' className='text-[15px] font-semibold hover:text-pink-500 hover:underline'>Sign in</Link>  
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar