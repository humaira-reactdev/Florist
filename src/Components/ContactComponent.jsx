import HeadingComponent from './HeadingComponent';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactComponent = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState('');

  // Email validation
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  // Message change
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError('');
  };

  // Send email using EmailJS
  const sendEmail = () => {
    const templateParams = {
      user_email: email,
      message: message,
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send email. Please try again.');
      });
  };

  // Form validation and submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Validate email and message
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    if (!message) {
      setMessageError('Message is required');
      return;
    }

    // Send email using the EmailJS service
    sendEmail();

    // Clear form after submission
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      {/* Heading Component */}
      <HeadingComponent headingText={'Contact us'} pageText={'CONTACT'} />

      {/* Main container */}
      <div className="container mx-auto px-6 py-12">
        <div className="content font-sans">
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  name='email'
                  value={email}
                  onChange={handleEmailChange} // Call the validation function on change
                  className={`w-full p-3 border border-gray-300 rounded focus:outline-none  ${emailError && 'border-red-500'}`}
                />
                {/* Displaying error message */}
                <p className="text-red-500">{emailError}</p>

                <textarea
                  rows="3"
                  placeholder="Message"
                  name='message'
                  value={message}
                  onChange={handleMessageChange}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none"
                ></textarea>

                {/* Displaying error message */}
                 <p className="text-red-500">{messageError}</p>

                <button
                  type="submit"
                  className="bg-black text-white font-bold py-3 px-6 rounded hover:bg-gray-800"
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
  );
};

export default ContactComponent;
