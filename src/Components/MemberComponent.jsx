import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const MemberComponent = ({ image, name, role }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-4 hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-64 object-cover mb-4 rounded-md" />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-pink-500 mb-4">{role}</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-gray-500 hover:text-pink-500">
          <FaFacebookF />
        </a>
        <a href="#" className="text-gray-500 hover:text-pink-500">
          <FaTwitter />
        </a>
        <a href="#" className="text-gray-500 hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="#" className="text-gray-500 hover:text-pink-500">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default MemberComponent;
