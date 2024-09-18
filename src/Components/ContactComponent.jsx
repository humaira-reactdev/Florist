import HeadingComponent from './HeadingComponent';
import FooterComponent from './FooterComponent';
import FollowUscomponent from './FollowUscomponent';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useState } from 'react';

const ContactComponent = () => {
  const [email, setEmail]           = useState('');
  const [emailError, setEmailError] = useState('');

  // Function to handle email validation
  const validateEmail = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Show error if the email field is empty
    if (inputEmail === '') {
      setEmailError('Email is required');
    } else {
      setEmailError(''); // Clear the error if email is entered
    }
  };

  return (
    <div>
      {/* Heading Component */}
      <HeadingComponent headingText={'Contact us'} pageText={'CONTACT'} />

      {/* Main container */}
      <div className="container">
        <div className="content">
          <div className="container mx-auto px-6 py-12 font-sans">
            {/* Main wrapper - 3-column layout using Tailwind CSS grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Left section: Get in touch */}
              <div className="col-span-1">
                <h2 className="text-4xl font-bold mb-6">Get in touch</h2>
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed et dolore.
                </p>
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-center space-x-3">
                    <FaMapMarkerAlt className="text-pink-500" />
                    <p>69 North Cleveland Street, Memphis, USA.</p>
                  </div>
                  {/* Phone Numbers */}
                  <div className="flex items-center space-x-3">
                    <FaPhoneAlt className="text-pink-500" />
                    <p>(123) 8111 9210 - (012) 1111 6868</p>
                  </div>
                  {/* Email */}
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="text-pink-500" />
                    <p>Florisr@supportthem.com</p>
                  </div>
                </div>
              </div>

              {/* Middle section: Contact Form */}
              <div className="col-span-1">
                <h2 className="text-4xl font-bold mb-6">Contact us</h2>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={validateEmail} // Call the validation function on change
                    className={`w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 ${emailError && 'border-red-500'}`}
                  />
                  {/* Displaying error message */}
                  {emailError && <p className="text-red-500">{emailError}</p>}

                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-black text-white font-bold py-3 px-6 rounded hover:bg-gray-800"
                    disabled={!email || emailError} // Disable the button if no email or there's an error
                  >
                    SEND
                  </button>
                </form>
              </div>

              {/* Right section: Google Map */}
              <div className="col-span-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.2721722806255!2d-86.40789948462663!3d39.699937979453336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b4be0a7fe0099%3A0x4b32b5487b1e2e2f!2sPlainfield%2C%20IN%2046175%2C%20USA!5e0!3m2!1sen!2sin!4v1600358394182!5m2!1sen!2sin"
                  width="100%"
                  height="360"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0"
                  title="Google Maps" // Adding title for accessibility
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Follow Us Component */}
      <FollowUscomponent />

      {/* Footer Component */}
      <FooterComponent />
    </div>
  );
};

export default ContactComponent;
