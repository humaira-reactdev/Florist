import { useState, useEffect } from 'react';
import { FaSearch, FaShoppingBag, FaHeart } from 'react-icons/fa'; // Icons
import HeadingComponent from './HeadingComponent'; 
import { AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const ShopComponent = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [sortedProducts, setSortedProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch product data from API
  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/66f52a55acd3cb34a88c4cb2')
      .then(response => response.json())
      .then(data => setSortedProducts(data.record.slice(0, 9))) // Limit initial products to 9
      .catch(error => console.error('Error:', error));
  }, []);

  const loadMoreProducts = () => {
    setVisibleCount(visibleCount + 9);
    setSortedProducts(sortedProducts.slice(0, visibleCount + 9));
  };

  const handleSort = (sortType) => {
    let sorted = [];
    switch (sortType) {
      case 'az':
        sorted = [...sortedProducts].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'priceLowHigh':
        sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
        break;
      case 'priceHighLow':
        sorted = [...sortedProducts].sort((a, b) => b.price - a.price);
        break;
      default:
        sorted = sortedProducts;
    }
    setSortedProducts(sorted.slice(0, visibleCount));
  };

  const handleCart = () => {
    navigate('/cart');
  };

  const handleDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="p-6">
      <HeadingComponent headingText={'Shop'} pageText={'SHOP'} />
      
      <div className='container flex justify-between items-center'>
        <div className="flex items-center space-x-2 mt-8">
          <div className="p-2 bg-gray-100 rounded">
            <AiOutlineMenu className="w-5 h-5 text-black" />
          </div>
          <div className="text-gray-600 w-[500px]">
            Showing <span className="font-semibold">1-{visibleCount}</span> of <span className="font-semibold">{sortedProducts.length}</span> results
          </div>
        </div>

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
        {sortedProducts.length > 0 ? sortedProducts.map((product) => (
          <div key={product.id} className="relative group">
            <img src={product.img} alt={product.name} className="w-full h-64 object-cover rounded-lg" />

            {product.status && (
              <div className={`absolute top-2 left-2 ${product.status === 'New' ? 'bg-green-500' : 'bg-red-500'} text-white text-xs px-2 py-1 rounded`}>
                {product.status}
              </div>
            )}

            <div className="absolute top-[20%] inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 space-x-4">
              <div className="p-3 rounded-full bg-white text-black hover:bg-pink-500 hover:text-white">
                <FaSearch className="w-4 h-4" />
              </div>
              <div className="p-3 rounded-full bg-white text-black hover:bg-pink-500 hover:text-white">
                <FaShoppingBag className="w-4 h-4" />
              </div>
              <div className="p-3 rounded-full bg-white text-black hover:bg-pink-500 hover:text-white">
                <FaHeart className="w-4 h-4" />
              </div>
            </div>

            <div className="text-center mt-4">
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-gray-500 transition-transform duration-300">
                {product.name}
              </h2>
              <div className="flex flex-col items-center">
                <div className="flex gap-4 items-center">
                  <span className="text-lg text-gray-800">${product.price}</span>
                  {product.discount && <span className="text-red-500 line-through">${product.originalPrice}</span>}
                </div>
                <div className="flex gap-2 mt-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <button onClick={handleCart} className="bg-pink-600 text-white py-1 px-3 rounded hover:bg-white hover:text-pink-600">
                    Add to Cart
                  </button>
                  <button onClick={() => handleDetails(product.id)} className="bg-white border border-pink-600 text-pink-600 py-1 px-3 rounded hover:bg-pink-600 hover:text-white">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        )) : <p className="text-center">Loading products...</p>}
      </div>

      {visibleCount < sortedProducts.length && (
        <div className="text-center">
          <button onClick={loadMoreProducts} className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-white hover:text-pink-600">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopComponent;
