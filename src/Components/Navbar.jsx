import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { PiHandbag } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="border-b border-gray-200">
        <div className="container flex justify-between items-center py-4 px-4 lg:px-0">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <img src="/images/logo.png" alt="Logo" className="w-24 h-auto lg:w-36" />
          </div>

          {/* Menu Links */}
          <div className="hidden lg:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-pink-500 font-semibold' : 'text-black'}>HOME</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-pink-500 font-semibold' : 'text-black'}>ABOUT</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'text-pink-500 font-semibold' : 'text-black'}>SERVICES</NavLink>
            <NavLink to="/shop" className={({ isActive }) => isActive ? 'text-pink-500 font-semibold' : 'text-black'}>SHOP</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-pink-500 font-semibold' : 'text-black'}>CONTACT</NavLink>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 lg:space-x-6 text-[25px]">
            <CiSearch className='' />
            <CiHeart className='' />
            <Link to='/cart'><PiHandbag /></Link>
            <IoPersonOutline />
            <Link to='/login' className='hidden lg:block text-[15px] font-semibold hover:text-pink-500 hover:underline'>Sign in</Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <IoMdClose size={30} /> : <FiMenu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <NavLink to="/" className={({ isActive }) => isActive ? 'text-pink-500 font-semibold' : 'text-black'} onClick={() => setMenuOpen(false)}>HOME</NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'text-pink-500 font-semibold' : 'text-black'} onClick={() => setMenuOpen(false)}>ABOUT</NavLink>
              <NavLink to="/services" className={({ isActive }) => isActive ? 'text-pink-500 font-semibold' : 'text-black'} onClick={() => setMenuOpen(false)}>SERVICES</NavLink>
              <NavLink to="/shop" className={({ isActive }) => isActive ? 'text-pink-500 font-semibold' : 'text-black'} onClick={() => setMenuOpen(false)}>SHOP</NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-pink-500 font-semibold' : 'text-black'} onClick={() => setMenuOpen(false)}>CONTACT</NavLink>
              <Link to='/login' className='text-black text-[15px] font-semibold hover:text-pink-500 hover:underline' onClick={() => setMenuOpen(false)}>Sign in</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
