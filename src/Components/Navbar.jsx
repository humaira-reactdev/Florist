import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { PiHandbag } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { getDatabase, ref, onValue } from "firebase/database";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  // Initialize Firebase database
  const db = getDatabase();

  // Fetching data from database
  useEffect(() => {
    const wishlistRef = ref(db, 'wishlist/'); // Adjust path according to your database structure
    const cartRef = ref(db, 'cart/'); // Adjust path according to your database structure

    // Listen for changes to wishlist data
    onValue(wishlistRef, (snapshot) => {
      const data = snapshot.val();
      // Assuming the wishlist data is an array of items, update the count
      setWishlistCount(data ? Object.keys(data).length : 0);
    });

    // Listen for changes to cart data
    onValue(cartRef, (snapshot) => {
      const data = snapshot.val();
      // Assuming the cart data is an array of items, update the count
      setCartCount(data ? Object.keys(data).length : 0);
    });
  }, [db]);

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
          <div className="relative flex items-center space-x-4 lg:space-x-6 text-[25px]">
            <CiSearch />

            {/* Wishlist Icon with Quantity */}
            <div className="relative">
            <Link to='/wishlist'>
              <CiHeart />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
              </Link>
            </div>

            {/* Cart Icon with Quantity */}
            <div className="relative">
              <Link to='/cart'>
                <PiHandbag />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

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
