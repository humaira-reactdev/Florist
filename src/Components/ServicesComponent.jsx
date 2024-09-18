import React, { useState } from 'react';
import HeadingComponent from './HeadingComponent';
import ServiceCardComponent from './ServicecardComponent';
import { FaLeaf, FaPalette, FaSeedling } from 'react-icons/fa';

const ServicesComponent = () => {
  // State to track the selected service
  const [selectedService, setSelectedService] = useState('Custom orders');

  // Content for each service
  const serviceDetails = {
    'Custom orders': {
      title: 'Custom orders',
      price: 'From $60 - $300',
      description: 'For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada, growing flowers that can be dried and incorporated into late fall and winter floral arrangements has been a game-changer. During her growing season, this farmer-florist relies on a vivid palette of annuals, perennials, and ornamental grasses to supply her studio.',
    },
    'Event decoration': {
      title: 'Event decoration',
      price: 'From $100 - $500',
      description: 'Our event decoration services are tailored to perfectly match the theme of your event, providing vibrant arrangements and stunning visuals to enhance every occasion.',
    },
    'Green landscape': {
      title: 'Green landscape',
      price: 'From $200 - $800',
      description: 'Our green landscape services include planting, maintenance, and aesthetic design, ensuring your outdoor spaces are always flourishing and welcoming.',
    },
  };

  // Handle click to change the selected service
  const handleServiceClick = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  
  return (
    <>
      <HeadingComponent headingText={'Our services'} pageText={'SERVICES'} />
      <div className='mainContent flex justify-center gap-8'>
        {/* Service Cards Section */}
        <div className='serviceCards'>
          <div className="py-16">
            <div className="container flex flex-col gap-4">
              <ServiceCardComponent
                icon={<FaPalette size={40} />}
                title="Custom orders"
                description="Flower helps you perfectly express how important your significant."
                onClick={() => handleServiceClick('Custom orders')}
                isActive={selectedService === 'Custom orders'}
              />
              <ServiceCardComponent
                icon={<FaLeaf size={40} />}
                title="Event decoration"
                description="Flower helps you perfectly express how important your significant."
                onClick={() => handleServiceClick('Event decoration')}
                isActive={selectedService === 'Event decoration'}
              />
              <ServiceCardComponent
                icon={<FaSeedling size={40} />}
                title="Green landscape"
                description="Flower helps you perfectly express how important your significant."
                onClick={() => handleServiceClick('Green landscape')}
                isActive={selectedService === 'Green landscape'}
              />
            </div>
          </div>
        </div>

        {/* Service Details Section */}
        <div className='serviceDetails flex flex-col items-start p-8 border rounded-lg shadow-md max-w-md bg-white'>
          <img src='/path/to/image.jpg' alt='Service' className='w-full h-56 object-cover rounded-lg mb-4' />
          <h2 className="text-4xl font-bold mb-2">{serviceDetails[selectedService].title}</h2>
          <p className="text-pink-500 text-lg mb-4">{serviceDetails[selectedService].price}</p>
          <p className="text-gray-600 mb-6">{serviceDetails[selectedService].description}</p>
          
          {/* List of services or features */}
          <ul className='space-y-2'>
            <li className='flex items-center'>
              <span className='mr-2 text-pink-500'>•</span>
              Free initial consulting for floral design.
            </li>
            <li className='flex items-center'>
              <span className='mr-2 text-pink-500'>•</span>
              Priority delivery program for weekly customers.
            </li>
            <li className='flex items-center'>
              <span className='mr-2 text-pink-500'>•</span>
              Birthday blooms with a free arrangement.
            </li>
            <li className='flex items-center'>
              <span className='mr-2 text-pink-500'>•</span>
              Referral program with a 25% discount.
            </li>
          </ul>
        </div>
      </div>
       
    </>
  );
};

export default ServicesComponent;
