import React from 'react'

import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
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
          <a href="/" className="text-pink-500 hover:text-black font-semibold">HOME</a>
          <a href="/about" className="text-black hover:text-pink-500 font-semibold">ABOUT</a>
          <a href="/services" className="text-black hover:text-pink-500 font-semibold">SERVICES</a>
          <a href="/shop" className="text-black hover:text-pink-500 font-semibold">SHOP</a>
          <a href="/pages" className="text-black hover:text-pink-500 font-semibold">PAGES</a>
          <a href="/blog" className="text-black hover:text-pink-500 font-semibold">BLOG</a>
          <a href="/contact" className="text-black hover:text-pink-500 font-semibold">CONTACT</a>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-[25px]">
          {/* Search Icon */}
          <CiSearch className=''/>
          {/* Heart Icon with Item Count */}
          <IoMdHeartEmpty />         
          {/* Cart Icon with Item Count */}
          <PiHandbag />       

          {/* Cart Total */}
          
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar