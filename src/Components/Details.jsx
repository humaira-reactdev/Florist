import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';
import { FiMinus, FiPlus } from 'react-icons/fi'; 
import HeadingComponent from './HeadingComponent';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Details = () => {
  // Getting data from Redux 
  const productSlice = useSelector((state) => state.counter.value);
  
  // State for active tab
  const [activeTab, setActiveTab] = useState('description'); // Default to 'description'

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <HeadingComponent headingText="Product detail" pageText="Product detail" />
      <div className="container mx-auto p-8">
        <div className="flex gap-8 md:flex-row space-x-6 mt-10">
          {/* Left section (Product Image and Thumbnails) */}
          <div className="flex gap-5 items-start ">
            {/* Main Image */}
            <div className="w-[500px] h-[700px] mx-auto">
              <img
                src={productSlice?.img}
                alt={productSlice?.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex flex-col space-y-5">
              <img
                src={productSlice?.img2}
                alt={productSlice?.name}
                className="w-16 h-16 object-cover"
              />
              <img
                src={productSlice?.img3}
                alt={productSlice?.name}
                className="w-16 h-16 object-cover"
              />
              <img
                src={productSlice?.img4}
                alt={productSlice?.name}
                className="w-16 h-16 object-cover"
              />
            </div>
          </div>

          {/* Right section (Product Details) */}
          <div className="flex flex-col space-y-4">
            {/* Product Title and Price */}
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold">{productSlice?.name}</h1>
              <p className="text-pink-500 text-3xl font-semibold">{productSlice?.price}</p>
            </div>

            {/* Reviews */}
            <div className="flex items-center space-x-4">
              <div className="flex space-x-1">
                {/* Placeholder for stars */}
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-lg text-gray-600">(reviews)</p>
                <a href="#" className="text-lg text-pink-500">Write a review</a>
              </div>
            </div>

            <hr />

            {/* Product Details */}
            <div className="text-black pt-8 pb-8">
              <p className="text-lg font-thin">Categories: <span className="text-gray-900 font-normal text-md">{productSlice?.category}</span></p>
              <p className="text-lg font-thin">Product code: <span className="text-gray-900 font-normal text-md">{productSlice?.productCode}</span></p>
              <p className="text-lg font-thin">Reward points: <span className="text-gray-900 font-normal text-md">{productSlice?.rewardPoints}</span></p>
              <p className="text-lg font-thin">Availability: <span className="text-green-500 font-normal text-md">{productSlice?.stock}</span></p>
            </div>

            <hr />

            {/* Quantity Selector and Add to Cart Button */}
            <div className="flex items-center space-x-6 pt-8 pb-8">
              <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                <button className="px-4 py-3 bg-gray-100">
                  <FiMinus className="text-gray-700 text-xl" />
                </button>
                <input
                  type="number"
                  className="w-16 text-center border-l border-r border-gray-300 text-lg"
                  value="1"
                  readOnly
                />
                <button className="px-4 py-3 bg-gray-100">
                  <FiPlus className="text-gray-700 text-xl" />
                </button>
              </div>

              <button className="flex items-center px-8 py-3 bg-black text-white text-lg font-bold rounded-full">
                <AiOutlineShoppingCart className="w-6 h-6 mr-2" />
                Add to Cart
              </button>

              <button className="p-3 bg-gray-200 rounded-full">
                <AiOutlineHeart className="w-6 h-6 text-gray-500" />
              </button>
            </div>
             
            <hr />
               
        {/* Tabs: Description, Shipping & Returns, Reviews */}
            <div className="pt-[50px]">
              <div className="flex items-center flex-wrap space-x-6 text-[20px] font-normal">
                <NavLink 
                  to="/description" 
                  className={`hover:text-pink-500 ${activeTab === 'description' ? 'text-pink-500 font-bold' : 'text-gray-800'}`} 
                  onClick={() => handleTabClick('description')}
                >
                  Description
                </NavLink>
                <div className="w-[2px] h-8 bg-gray-300 rotate-[25deg]"></div>
                <NavLink 
                  to="/shipping" 
                  className={`hover:text-pink-500 ${activeTab === 'shipping-returns' ? 'text-pink-500 font-bold' : 'text-gray-800'}`} 
                  onClick={() => handleTabClick('shipping-returns')}
                >
                  Shipping & Returns
                </NavLink>
                <div className="w-[2px] h-8 bg-gray-300 rotate-[25deg]"></div>
                <NavLink 
                  to='/review'
                  className={`hover:text-pink-500 ${activeTab === 'reviews' ? 'text-pink-500 font-bold' : 'text-gray-800'}`} 
                  onClick={() => handleTabClick('reviews')}
                >
                  Reviews (03)
                </NavLink>
              </div>
            </div>


            {/* Placeholder content based on active tab */}
            <div className="mt-6 text-gray-600 w-[400px]">
              {activeTab === 'description' && <p>{productSlice?.description}</p>}
              {activeTab === 'shipping-returns' && <p>Shipping and returns information goes here.</p>}
              {activeTab === 'reviews' && <p>Reviews content goes here.</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
