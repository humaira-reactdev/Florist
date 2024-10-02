import React from 'react';

const ServiceCardComponent = ({ icon, title, description, onClick, isActive }) => {
  return (
    <div 
      onClick={onClick}
      className={`p-4 md:p-6 lg:p-8 border rounded-lg cursor-pointer transition-all duration-300 ${
        isActive ? 'border-pink-500' : 'border-gray-300'
      } hover:shadow-md text-center bg-white`}>
      
      {/* Icon */}
      <div className="flex justify-center mb-4 text-pink-500 text-3xl md:text-4xl lg:text-5xl">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm md:text-base lg:text-lg">
        {description}
      </p>
    </div>
  );
};

export default ServiceCardComponent;

