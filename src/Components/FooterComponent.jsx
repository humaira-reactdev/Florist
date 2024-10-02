import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FooterComponent = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError('Email is required.');
      toast.error('Email is required.');
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      toast.error('Please enter a valid email address.');
      return;
    }

    // Success toast
    toast.success('Subscription successful!');
    // Reset the email input after successful submission
    setEmail('');
  };

  const handleLinkClick = (linkName) => {
    toast.info(`${linkName} page`);
  };

  return (
    <footer className="bg-white py-10 border-t shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo Section */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4 md:mb-0">
            Florist<span className="text-pink-500 text-6xl">🌸</span>
          </h2>
          <p className="text-gray-700 text-center md:text-left w-full md:w-[600px] text-lg md:text-xl">
            The floristry business has a significant market in the corporate and social event world, as flowers
          </p>
          <div className="flex space-x-6 text-[28px] mt-4 md:mt-0">
            <Link to="https://www.facebook.com/profile.php?id=61553648335607" target='_blank' className="text-pink-600 hover:text-pink-800 transition duration-300">
              <FaFacebookF />
            </Link>
            <Link to="https://x.com/?lang=en" target='_blank' className="text-pink-600 hover:text-pink-800 transition duration-300">
              <FaTwitter />
            </Link>
            <Link to="https://www.instagram.com/____.flowershop.____/?hl=en" target='_blank' className="text-pink-600 hover:text-pink-800 transition duration-300">
              <FaInstagram />
            </Link>
            <Link to="https://www.linkedin.com/in/sonia-akter-483a42323/" target='_blank' className="text-pink-600 hover:text-pink-800 transition duration-300">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Grid Layout for Links and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company and Account */}
          <div className="grid grid-cols-2 gap-10">
            {/* Company Links */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-4 border-b border-pink-300 pb-2">Company</h3>
              <ul>
                <li className="mb-2">
                  <Link
                    to="/about"
                    className="text-gray-700 hover:text-pink-600 transition duration-300 text-lg"
                    onClick={() => handleLinkClick('About Us')}
                  >
                    About us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/services"
                    className="text-gray-700 hover:text-pink-600 transition duration-300 text-lg"
                    onClick={() => handleLinkClick('Services')}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-700 hover:text-pink-600 transition duration-300 text-lg"
                    onClick={() => handleLinkClick('Contact Us')}
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Account Links */}
            <div>
              <h3 className="text-2xl font-bold text-black mb-4 border-b border-pink-300 pb-2">Account</h3>
              <ul>
                <li className="mb-2">
                  <Link
                    to="/cart"
                    className="text-gray-700 hover:text-pink-600 transition duration-300 text-lg"
                    onClick={() => handleLinkClick('My Cart')}
                  >
                    My cart
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/wishlist"
                    className="text-gray-700 hover:text-pink-600 transition duration-300 text-lg"
                    onClick={() => handleLinkClick('Wishlist')}
                  >
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="text-gray-700 hover:text-pink-600 transition duration-300 text-lg"
                    onClick={() => handleLinkClick('Login/Register')}
                  >
                    Login/Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-black mb-4 border-b border-pink-300 pb-2">Newsletter</h3>
            <p className="text-gray-700 mb-4 text-lg">Subscribe to our newsletter to get more free tips. No Spam, Promise.</p>
            <form className="flex" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2 border ${error ? 'border-red-500' : 'border-pink-300'} rounded-l-md focus:outline-none text-lg`}
              />
              <button className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-600 transition duration-300 text-lg">
                Subscribe
              </button>
            </form>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>

          {/* Get in Touch */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-black mb-4 border-b border-pink-300 pb-2">Get in Touch</h3>
            <div className="text-gray-700 mb-4 text-lg">
              <p>69 North Cleveland Street, Memphis, USA.</p>
              <p>(123) 8111 9210 - (012) 1111 6868</p>
              <p>Florist@supportthem.com</p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-10 border-t pt-4 text-gray-700 text-lg">
          <p>© {new Date().getFullYear()} Florist. All Rights Reserved.</p>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={true} rtl={false} pauseOnFocusLoss={false} draggable pauseOnHover={false} />
    </footer>
  );
};

export default FooterComponent;
