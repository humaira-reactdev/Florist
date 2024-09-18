import React, { useState, useEffect } from 'react';
import FooterComponent from './FooterComponent';

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
              <div className='container'>
                <p className="text-lg mb-2 uppercase text-black">{slide.subtitle}</p>
                <h1 className="text-4xl font-bold mb-6 w-[450px] text-black">{slide.heading}</h1>
                <button className="bg-pink-500 text-white px-5 py-2 rounded-[40px] hover:bg-pink-600 uppercase text-[12px] font-semibold">
                  {slide.buttonText}
                </button>
              </div>              
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
      <div className="max-w-full mx-auto py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container">
        
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
      {/* ================features part end================== */}

      {/* ================items start================== */}
      <div className="items container flex justify-between gap-8 py-8">
  <div className="relative">
    <img src="/images/categories-1.jpg" alt="Fresh Flower" className="w-full h-full object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-4 text-center">
      <h3 className="text-lg font-semibold text-gray-900">Fresh Flower</h3>
      <p className="text-gray-600">(25 items)</p>
    </div>
  </div>
  <div className="relative">
    <img src="/images/categories-2.jpg" alt="Succulent Plants" className="w-full h-full object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-4 text-center">
      <h3 className="text-lg font-semibold text-gray-900">Succulent Plants</h3>
      <p className="text-gray-600">(162 items)</p>
    </div>
  </div>
  <div className="relative">
    <img src="/images/categories-3.jpg" alt="Cactus Plants" className="w-full h-full object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-4 text-center">
      <h3 className="text-lg font-semibold text-gray-900">Cactus Plants</h3>
      <p className="text-gray-600">(58 items)</p>
    </div>
  </div>
  <div className="relative">
    <img src="/images/categories-4.jpg" alt="Furniture Tree" className="w-full h-full object-cover" />
    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-4 text-center">
      <h3 className="text-lg font-semibold text-gray-900">Furniture Tree</h3>
      <p className="text-gray-600">(25 items)</p>
    </div>
  </div>
</div>
      {/* ================items end================== */}

      {/* ================about us start================== */}
          {/* About Us Section */}
<div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Left Side - Title and Subtitle */}
  <div>
    <p className="text-pink-500 uppercase mb-4">About Us</p>
    <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
      We provide all kinds of fresh flower services
    </h2>
  </div>
  
  {/* Right Side - Description */}
  <div>
    <p className="text-gray-600 leading-relaxed">
      For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada, growing flowers that can be dried and incorporated into late fall and winter floral arrangements has been a game-changer. During her growing season, this farmer-florist relies on a vivid palette of annuals, perennials, and ornamental grasses to supply her studio.
    </p>
  </div>
</div>

{/* Floral Insights Section */}
<div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-[100px]">
  {/* Left Side - Image with Play Button */}
  <div className="relative">
    <img
      src="/images/about-video.jpg"
      alt="Floral Insights"
      className="w-full md:w-96 h-auto rounded-lg shadow-md"
    />
    {/* Play Button Overlay */}
    <button className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-8 h-8 text-pink-500"
          viewBox="0 0 16 16"
        >
          <path d="M6.79 5.093a.5.5 0 0 1 .832-.374l4.829 3.407a.5.5 0 0 1 0 .841l-4.829 3.407a.5.5 0 0 1-.832-.374V5.093z" />
        </svg>
      </div>
    </button>
  </div>

  {/* Right Side - Text Content */}
  <div className="flex-1">
    <p className="text-pink-500 uppercase mb-4 tracking-widest">Slow Flowers' Floral Insights</p>
    <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
      Dried flowers are having a renaissance
    </h2>
    <p className="text-gray-600 leading-relaxed mb-8">
      This awareness has been stimulated by sustainable sourcing practices and the desire on the part of North American flower growers to “extend the season” beyond the last frost.
    </p>
    {/* Button */}
    <button className="bg-pink-500 text-white py-3 px-6 rounded-full hover:bg-pink-600 transition duration-300">
      Contact Us
    </button>
  </div>
</div>



      {/* ================about us end================== */}

      {/* ================All products start================== */}



      {/* ================All products end================== */}


      {/* ================Order part start================== */}

      <div 
  className="relative h-96 bg-cover bg-center flex items-center" 
  style={{ backgroundImage: "url('/images/call-bg.jpg')" }}
> 

  {/* Text Content */}
  <div className="relative z-10 max-w-lg ml-[100px] text-white">
    <p className="uppercase text-sm mb-2 tracking-widest">Custom Flower</p>
    <h2 className="text-4xl md:text-5xl font-semibold italic mb-6 leading-snug">
      Let our flowers make your party more perfect.
    </h2>
    {/* Buttons */}
    <div className="flex gap-4">
      <button className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-full transition duration-300">
        Order Now
      </button>
      <button className="bg-white hover:bg-gray-100 text-pink-500 py-3 px-6 rounded-full transition duration-300">
        Contact Us
      </button>
    </div>
  </div>
</div>
      {/* ================order part end================== */}

      {/* ================testimonial start================== */}
      <div className="relative py-16 bg-[#f8f9fa]">
      {/* Left and Right Decorative Images */}
      <img
        src="/images/left-bg.png"
        alt="Left Decoration"
        className="absolute left-0 w-[500px]"
      />
      <img
        src="/images/right-bg.png"
        alt="Right Decoration"
        className="absolute right-0 -top-10 w-[500px]"
      />

      {/* Testimonial Content */}
      <div className="max-w-2xl mx-auto text-center">
        {/* Quotation Icon */}
        <div className="text-pink-500 text-5xl mb-4">“</div>
        
        {/* Testimonial Text */}
        <p className="italic text-lg mb-6">
          "I just wanted to say thank you for making such gorgeous arrangements for our birthday celebration. I couldn't get over how perfect they were for the party. You did a fantastic job, and I appreciate it very much."
        </p>
        
        {/* Author Name */}
        <h4 className="font-semibold text-lg">Alejandro Houston</h4>
        <p className="text-gray-500">Businessman</p>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center mt-6 gap-4">
          <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-500 hover:text-pink-500">
            &lt;
          </button>
          <button className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-500 hover:text-pink-500">
            &gt;
          </button>
        </div>
      </div>
    </div>
      {/* ================testimonial end================== */}
      {/* Footer */}
      <FooterComponent/>

    </>
  );
};

export default HomeComponent;
