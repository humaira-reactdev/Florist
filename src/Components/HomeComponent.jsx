import React, { useState, useEffect } from 'react';

const HomeComponent = () => {
  // Array to store image URLs and corresponding banner text
  const slides = [
    {
      image: '/images/hero-1.jpg',
      heading: 'Making beautiful flowers a part of your life.',
      subtitle: 'Fresh flower and gift shop',
      buttonText: 'Shop Now',
    },
    {
      image: '/images/hero-2.jpg',
      heading: 'Making beautiful flowers a part of your life.',
      subtitle: 'Fresh flower and gift shop',
      buttonText: 'Shop now',
    },
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  // Function to handle slide selection via indicators
  const setSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
    {/* ==============BANNER PART START================== */}
      <div className="banner relative min-w-full max-w-2xl mx-auto">
        {/* Slider images with text overlay */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? 'block' : 'hidden'
            } transition-opacity duration-1000 relative`}
          >
            <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full" />

            {/* Text Overlay (moved to the left side) */}
            <div className="absolute inset-y-0 left-[3%] flex flex-col justify-center items-start text-left text-white p-6">
              <p className="text-lg mb-2 uppercase text-black">{slide.subtitle}</p>
              <h1 className="text-4xl font-bold mb-6 w-[450px] text-black">{slide.heading}</h1>
              <button className="bg-pink-500 text-white px-5 py-2 rounded-[40px] hover:bg-pink-600 uppercase text-[12px] font-semibold">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}

        {/* Indicators (small circles) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-gray-400'
              } transition-all duration-500`}
            />
          ))}
        </div>
      </div>
      {/* ==============BANNER PART END================== */}
      {/* ================features part start================== */}
      <div className="max-w-full mx-auto py-12 px-4 sm:px-6 lg:px-8 container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Feature 1 */}
        <div className="text-left flex gap-[20px]">
          {/* Icon */}
          <div className="text-pink-500 text-6xl mb-4">
            <img src="/images/benefit-1.png" className='w-[60px]' alt="" /> {/* Replace this with your actual icon */}
          </div>
          {/* Title */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                100% Freshness
            </h3>
            {/* Description */}
            <p className="text-gray-600">
              Most people are unaware of the less common flower.
            </p>
          </div>                      
        </div>

        {/* Feature 2 */}
        <div className="text-left flex gap-[20px]">
          <div className="text-pink-500 text-6xl mb-4">
            <img src="/images/benefit-2.png" className='w-[60px]' alt="" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Made by artist
            </h3>
            {/* Description */}
            <p className="text-gray-600">
              Most people are unaware of the less common flower.
            </p>
          </div>       
        </div>

        {/* Feature 3 */}
        <div className="text-left flex gap-[20px]">
          <div className="text-pink-500 text-6xl mb-4">
            <img src="/images/benefit-3.png" className='w-[60px]' alt="" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Own courier
            </h3>
            {/* Description */}
            <p className="text-gray-600 ">
              Most people are unaware of the less common flower.
            </p>
          </div>    
        </div>

        {/* Feature 4 */}
        <div className="text-left flex gap-[20px]">
          <div className="text-pink-500 text-6xl mb-4">
            <img src="/images/benefit-4.png" className='w-[60px]' alt="" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                100% Freshness
            </h3>
            {/* Description */}
            <p className="text-gray-600">
              Most people are unaware of the less common flower.
            </p>
          </div>    
        </div>
      </div>
    </div>

      {/* ================features part start================== */}
    </>
  );
};

export default HomeComponent;
