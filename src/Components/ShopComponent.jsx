import { useState } from 'react';
import { FaSearch, FaShoppingBag, FaHeart } from 'react-icons/fa'; // Importing icons
import HeadingComponent from './HeadingComponent';
import products from '../ProductData.js';
import { AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { productData } from '../Slice/ProductSlice.js';






const ShopComponent = () => {
  // state the variables
  const [visibleCount, setVisibleCount]     = useState(9);
  const [sortedProducts, setSortedProducts] = useState(products.slice(0, 9));
  const navigate                            = useNavigate()


  // getting data from redux 
  const dispatch = useDispatch()

  // setting data to the localhost
  localStorage.setItem('productData', JSON.stringify(sortedProducts))
 
  const loadMoreProducts = () => {
    const newVisibleCount = visibleCount + 9;
    setVisibleCount(newVisibleCount);
    setSortedProducts(products.slice(0, newVisibleCount));
  };

  const handleSort = (sortType) => {
    let sorted = [];
    switch (sortType) {
      case 'az':
        sorted = [...products].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'priceLowHigh':
        sorted = [...products].sort((a, b) => a.price - b.price);
        break;
      case 'priceHighLow':
        sorted = [...products].sort((a, b) => b.price - a.price);
        break;
      default:
        sorted = products;
    }
    setSortedProducts(sorted.slice(0, visibleCount));
  };

// ============= add to cart funtion
  const handleCart = (data) =>{
    navigate('/cart')
    dispatch(productData(data));
  }


  // =============== details functions
  const handleDetails = (data) => {
    navigate('/details')
    dispatch(productData(data));
  }

  return (
    <div>
      <HeadingComponent headingText={'Shop'} pageText={'SHOP'} />

      <div className='container flex justify-between items-center'>
          <div className="flex items-center space-x-2 mt-20">
              {/* Icon from React Icons */}
              <div className="p-2 bg-gray-100 rounded">
                <AiOutlineMenu className="w-5 h-5 text-black" />
              </div>
              
              {/* Text container */}
              <div className="text-gray-600 w-[500px]">
                Showing <span className="font-semibold">1-9</span> of <span className="font-semibold">20</span> results
              </div>
          </div>
          {/* Sorting Options */}
          <div className="flex justify-end mt-8">
            <select className="py-2 px-5 outline-none border rounded" onChange={(e) => handleSort(e.target.value)}>
              <option value="default">Sort by popularity</option>
              <option value="az">A-Z</option>
              <option value="priceLowHigh">Price Low to High</option>
              <option value="priceHighLow">Price High to Low</option>
            </select>
          </div>
      </div>


      {/* Product Grid */}
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 mb-20">
        {sortedProducts.map((product) => (
          <div key={product.id} className="relative group">
            {/* Product Image */}
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />

            {/* Product Status (New or Sale) */}
            {product.status && (
              <div className={`absolute top-2 left-2 ${product.status === 'New' ? 'bg-green-500' : 'bg-red-500'} text-white text-xs px-2 py-1 rounded`}>
                {product.status}
              </div>
            )}

            {/* Icons */}
            <div className="absolute top-[20%] inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 space-x-4">
              {/* Icon with effect: Search */}
              <div className="p-3 rounded-full transition-all duration-500 bg-white text-black hover:bg-pink-500 hover:text-white hover:rotate-180">
                <FaSearch className="w-4 h-4" />
              </div>

              {/* Icon with effect: Shopping Bag */}
              <div className="p-3 rounded-full transition-all duration-500 bg-white text-black hover:bg-pink-500 hover:text-white hover:rotate-180">
                <FaShoppingBag className="w-4 h-4" />
              </div>

              {/* Icon with effect: Heart */}
              <div className="p-3 rounded-full transition-all duration-500 bg-white text-black hover:bg-pink-500 hover:text-white hover:rotate-180">
                <FaHeart className="w-4 h-4" />
              </div>
            </div>

            {/* Product Name and Price */}
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-gray-500 transition-transform duration-300">
                {product.name}
              </h2>
              <div className="flex flex-col items-center transition-transform duration-500 group-hover:-translate-x-4">
                {/* Price and Discount Section */}
                <div className="flex gap-4 items-center transition-opacity duration-500 group-hover:opacity-0">
                  <span className="text-lg text-gray-800">${product.price}</span>
                  {product.discount && (
                    <span className="text-red-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
                {/* Buttons to be shown on hover */}
                <div className="flex gap-2 mt-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {/* ========== add buttons ========= */}
                  <button 
                   onClick={()=>handleCart(product)}
                   className="bg-pink-600 text-white py-1 px-3 rounded transition duration-300 transform hover:scale-105 hover:bg-white hover:text-pink-600  hover:shadow-lg hover:border hover:border-pink-600">
                    Add to Cart
                  </button>

                  {/* ======== details buttons */}
                  <button
                   onClick={()=>handleDetails(product)}
                   className="bg-white border border-pink-600 text-pink-600 py-1 px-3 rounded hover:bg-pink-600 hover:text-white transition duration-300 transform hover:scale-105">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < products.length && (
        <div className="text-center">
          <button
            onClick={loadMoreProducts}
            className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-white hover:text-pink-600 transition duration-300"
          >
            Load More Products
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopComponent;