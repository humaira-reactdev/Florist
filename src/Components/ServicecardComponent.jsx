import React from 'react';

const ServiceCardComponent = ({ icon, title, description }) => {
  return (
    <div className="border border-pink-100 p-8 text-center hover:shadow-lg transition-shadow duration-300">
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
