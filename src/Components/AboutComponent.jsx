import React from 'react'
import HeadingComponent from './HeadingComponent'
import { FaLeaf, FaPalette, FaSeedling } from 'react-icons/fa'; // Example icons from react-icons
import ServiceCardComponent from './ServicecardComponent';
import MemberComponent from './MemberComponent';

const AboutComponent = () => {
  return (
    <>
      <HeadingComponent headingText={'About Us'} pageText={'ABOUT'}/>
      {/* =================ABOUT SECTION START================ */}
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

      {/* ==================ABOUT SECTION END================= */}
      {/* =================SERVICES SECTION START============== */}
      <div className="py-16">
      <div className="text-center mb-12">
        <p className="text-pink-500 uppercase tracking-wide">Our Services</p>
        <h2 className="text-3xl font-bold mt-2">Florist's services</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCardComponent
          icon={<FaPalette size={40} />}
          title="Custom orders"
          description="Flower helps you perfectly express how important your significant."
        />
        <ServiceCardComponent
          icon={<FaLeaf size={40} />}
          title="Event decoration"
          description="Flower helps you perfectly express how important your significant."
        />
        <ServiceCardComponent
          icon={<FaSeedling size={40} />}
          title="Green landscape"
          description="Flower helps you perfectly express how important your significant."
        />
      </div>
    </div>
      {/* =================SERVICES SECTION STARt END============== */}
      {/* ==================TESTIMONIAL START====================== */}
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
      {/* ===================TESTIMONIAL END======================= */}
      {/* ====================MEMBERS PART START=================== */}
      <div className="py-16">
      <div className="text-center mb-12">
        <p className="text-pink-500 uppercase tracking-wide">Our Team Member</p>
        <h2 className="text-3xl font-bold mt-2">Flower Experts</h2>
        <button className="mt-4 py-2 px-6 border border-pink-500 text-pink-500 rounded-full hover:bg-pink-500 hover:text-white transition-colors duration-300">
          Meet Our Team
        </button>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MemberComponent
            image='/images/team-1.jpg'
            name='Emma Johnson'
            role='Manager'
          />
          <MemberComponent
            image='/images/team-2.jpg'
            name='Rachel Green'
            role='Manager'
          />
          <MemberComponent
            image='/images/team-3.jpg'
            name='Richard Osborne'
            role='Manager'
          />
          <MemberComponent
            image='/images/team-4.jpg'
            name='Monica Geller'
            role='Manager'
          />          
      </div>
    </div>

      {/* ====================MEMBERS END========================== */}
    </>
  )
}

export default AboutComponent