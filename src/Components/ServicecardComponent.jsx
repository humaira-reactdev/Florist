import React from 'react';

const ServiceCardComponent = ({ icon, title, description, onClick, isActive }) => {
  return (
    <div 
    onClick={onClick}
    className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
      isActive ? 'border-pink-500' : 'border-gray-300'
    } hover:shadow-md text-center`}>
      <div className="flex justify-center mb-4 text-pink-500">
        {/* Icon placeholder */}
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default ServiceCardComponent;
