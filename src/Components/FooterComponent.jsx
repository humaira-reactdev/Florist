import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterComponent = () => {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo Section */}
        <div className="container">
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4 md:mb-0">
              Florist<span className="text-pink-500 text-4xl align-super">🌸</span>
            </h2>
            <p className="text-gray-700 text-center md:text-left w-full md:w-[500px]">
              The floristry business has a significant market in the corporate and social event world, as flowers
            </p>
            <div className="flex space-x-4 text-[20px] mt-4 md:mt-0">
              <Link to="#" className="text-pink-600 hover:text-pink-800 transition duration-300">
                <FaFacebookF />
              </Link>
              <Link to="#" className="text-pink-600 hover:text-pink-800 transition duration-300">
                <FaTwitter />
              </Link>
              <Link to="#" className="text-pink-600 hover:text-pink-800 transition duration-300">
                <FaInstagram />
              </Link>
              <Link to="#" className="text-pink-600 hover:text-pink-800 transition duration-300">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          {/* Grid Layout for Links and Newsletter */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company and Account */}
            <div className="grid grid-cols-2 gap-8">
              {/* Company Links */}
              <div>
                <h3 className="text-lg font-bold text-pink-900 mb-4">Company</h3>
                <ul>
                  <li className="mb-2">
                    <Link to="/about" className="text-gray-700 hover:text-pink-600 transition duration-300">About us</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/services" className="text-gray-700 hover:text-pink-600 transition duration-300">Services</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-700 hover:text-pink-600 transition duration-300">Contact us</Link>
                  </li>
                </ul>
              </div>

              {/* Account Links */}
              <div>
                <h3 className="text-lg font-bold text-pink-900 mb-4">Account</h3>
                <ul>
                  <li className="mb-2">
                    <Link to="/cart" className="text-gray-700 hover:text-pink-600 transition duration-300">My cart</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/wishlist" className="text-gray-700 hover:text-pink-600 transition duration-300">Wishlist</Link>
                  </li>
                  <li>
                    <Link to="/login" className="text-gray-700 hover:text-pink-600 transition duration-300">Login/Register</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-pink-900 mb-4">Newsletter</h3>
              <p className="text-gray-700 mb-4">Subscribe to our newsletter to get more free tips. No Spam, Promise.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-pink-300 rounded-l-md focus:outline-none"
                />
                <button className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-600 transition duration-300">
                  Subscribe
                </button>
              </form>
            </div>

            {/* Get in Touch */}
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-pink-900 mb-4">Get in Touch</h3>
              <div className="text-gray-700 mb-4">
                <p>69 North Cleveland Street, Memphis, USA.</p>
                <p>(123) 8111 9210 - (012) 1111 6868</p>
                <p>Florist@supportthem.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
