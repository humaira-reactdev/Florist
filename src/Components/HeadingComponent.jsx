import React from 'react';

const HeadingComponent = ({ headingText, pageText }) => {
  return (
    <div className="relative w-full h-48 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/images/breadcrumb-bg.jpg')` }}>
      {/* Add the image background if needed */}
      <div className="flex items-center space-x-4 ">
        <div className="flex flex-col items-center">
          {/* Heading text */}
          <h1 className="text-3xl font-bold text-gray-800">{headingText}</h1>
          {/* Navigation */}
          <div className="flex items-center text-sm space-x-2  mt-2">
            <span className='text-pink-500'>HOME</span>
            <span>|</span>
            <span>{pageText}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingComponent;
