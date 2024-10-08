import { Link, NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { PiHandbag } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { useEffect,  useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { getDatabase, ref, onValue } from "firebase/database";

const Navbar = () => {
  // state variables
  const [menuOpen, setMenuOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false); // Manage search input visibility
  const [searchQuery, setSearchQuery] = useState(''); // Manage search input value
  
  // Initialize Firebase database
  const db = getDatabase();

  // Fetching data from database
  useEffect(() => {
    const wishlistRef = ref(db, 'wishlistProduct/'); 
    const cartRef = ref(db, 'cartProduct/');

    // Listen for changes to wishlist data
    onValue(wishlistRef, (snapshot) => {
      const data = snapshot.val();
      setWishlistCount(data ? Object.keys(data).length : 0);
    });

    // Listen for changes to cart data
    onValue(cartRef, (snapshot) => {
      const data = snapshot.val();
      setCartCount(data ? Object.keys(data).length : 0);
    });
  }, [db]);

  // Handle search form submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log(`Searching for: ${searchQuery}`);
      // Implement search functionality here, such as calling an API or filtering products
    }
  };

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
            {/* Search Icon with Expanding Input */}
            <div className="relative">
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <CiSearch
                  className="cursor-pointer"
                  onMouseEnter={() => setSearchOpen(true)}
                  onMouseLeave={() => !searchQuery && setSearchOpen(false)} // Close if no query
                />
                <input
                  type="text"
                  className={`transition-all duration-300 ease-in-out ml-2 ${
                    searchOpen ? 'w-[200px] opacity-100' : 'w-0 opacity-0'
                  } bg-gray-200 p-2 rounded-full text-sm outline-none focus:ring-2 focus:ring-pink-500`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onMouseEnter={() => setSearchOpen(true)} // Keep input open when hovered
                  onMouseLeave={() => !searchQuery && setSearchOpen(false)} // Close when not hovering if input is empty
                  placeholder="Search products..."
                />
              </form>
            </div>

            {/* Wishlist Icon with Quantity */}
            <div className="relative">
              <Link to='/wishlist'>
                <CiHeart />
                {wishlistCount > 0 && (
                  <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
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
                  <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
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
};

export default Navbar;
