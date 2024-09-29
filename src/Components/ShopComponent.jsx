import { CiSearch, CiBag1, CiHeart } from "react-icons/ci";
import HeadingComponent from './HeadingComponent';
import { useEffect, useState } from 'react';

const ShopComponent = () => {
  const [products, setProducts] = useState([]);

  // Fetch data from API
  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/66f52a55acd3cb34a88c4cb2')
      .then(response => response.json())
      .then(data => setProducts(data.record))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="p-6">
      <HeadingComponent headingText={'Shop'} pageText={'SHOP'} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-20">
        {products.length > 9 ? (
          products.map((product) => (
            <div key={product.id} className="relative group">
              {/* Product Image */}
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg"
              />

              {/* Icons and Add to Cart (hidden by default) */}
              <div className="absolute top-[15%] inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex justify-center space-x-4 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500">
                  {/* Search Icon */}
                  <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center shadow-md cursor-pointer transform transition-all duration-500 hover:bg-[#F45D96] hover:text-white hover:rotate-[360deg]">
                    <CiSearch className="text-black text-xl font-normal transition-all duration-500 hover:text-white" />
                  </div>

                  {/* Shopping Bag Icon */}
                  <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center shadow-md cursor-pointer transform transition-all duration-500 hover:bg-[#F45D96] hover:text-white hover:rotate-[360deg]">
                    <CiBag1 className="text-black text-xl font-normal transition-all duration-500 hover:text-white" />
                  </div>

                  {/* Heart Icon */}
                  <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center shadow-md cursor-pointer transform transition-all duration-500 hover:bg-[#F45D96] hover:text-white hover:rotate-[360deg]">
                    <CiHeart className="text-black text-xl font-normal transition-all duration-500 hover:text-white" />
                  </div>
                </div>
              </div>

              {/* Product Name and Price */}
              <div className="text-center mt-4">
                <h2 className="text-xl font-bold text-gray-800 group-hover:text-gray-500 transition-transform duration-300">
                  {product.name}
                </h2>
                <div className="relative flex flex-col items-center">
                  {/* Price */}
                  <p className="text-lg mt-2 font-bold text-gray-700 transform transition-transform duration-500 group-hover:translate-x-[-100%] group-hover:opacity-0">
                    {product.price}
                  </p>

                  {/* Add to Cart and Details Buttons */}
                  <div className="flex space-x-4 mt-2">
                    <button
                      className="px-4 py-2 border-2 border-[#F45D96] bg-[#F45D96] text-white rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all duration-300 hover:bg-white hover:border-[#F45D96] hover:text-[#F45D96] hover:scale-105"
                    >
                      Add to Cart
                    </button>

                    {/* Details Button with White Background and Pink Border */}
                    <button
                      className="px-4 py-2 bg-white border-2 border-[#F45D96] text-[#F45D96] rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all duration-300 hover:bg-[#F45D96] hover:text-white hover:scale-105"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">Loading products....</p>
        )}
      </div>
    </div>
  );
};

export default ShopComponent;


