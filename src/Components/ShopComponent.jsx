import { useState } from 'react';
import { FaSearch, FaShoppingBag, FaHeart } from 'react-icons/fa';
import HeadingComponent from './HeadingComponent';
import products from '../ProductData.js';
import { AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { productData } from '../Slice/ProductSlice.js';
import { getDatabase, ref, set, onValue } from "firebase/database";

const ShopComponent = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [sortedProducts, setSortedProducts] = useState(products.slice(0, 9));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const db = getDatabase();

  localStorage.setItem('productData', JSON.stringify(sortedProducts));

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

  // Add to cart function with check for existing product
  const handleCart = (data) => {
    const cartRef = ref(db, `cartProduct/${data.id}`);

    // Check if product is already in the cart
    onValue(cartRef, (snapshot) => {
      if (snapshot.exists()) {
        // If product exists, increment its quantity
        const currentQuantity = snapshot.val().quantity || 1;
        set(cartRef, {
          ...snapshot.val(),
          quantity: currentQuantity + 1,
        });
      } else {
        // If product doesn't exist, add it with quantity 1
        set(cartRef, {
          Id: data.id,
          name: data.name,
          price: data.price,
          originalPrice: data.originalPrice,
          discount: data.discount,
          img: data.img,
          stock: data.stock,
          quantity: 1,
        });
      }
    });

    navigate('/cart');
    dispatch(productData(data));
  };

  // Details function
  const handleDetails = (data) => {
    navigate('/details');
    dispatch(productData(data));
  };

  return (
    <>
    <HeadingComponent headingText={'Shop'} pageText={'SHOP'} />
    <div className="p-4 md:p-8">

      <div className='container flex justify-between items-center'>
        <div className="flex items-center space-x-2 mt-20">
          <div className="p-2 bg-gray-100 rounded">
            <AiOutlineMenu className="w-5 h-5 text-black" />
          </div>

          <div className="text-gray-600 w-[500px]">
            Showing <span className="font-semibold">1-9</span> of <span className="font-semibold">20</span> results
          </div>
        </div>

        <div className="flex flex-wrap justify-end mt-8">
          <select className="py-2 px-5 outline-none border rounded" onChange={(e) => handleSort(e.target.value)}>
            <option value="default">Sort by popularity</option>
            <option value="az">A-Z</option>
            <option value="priceLowHigh">Price Low to High</option>
            <option value="priceHighLow">Price High to Low</option>
          </select>
        </div>
      </div>

      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 mb-20">
        {sortedProducts.map((product) => (
          <div key={product.id} className="relative group">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg"
            />

            {product.status && (
              <div className={`absolute top-2 left-2 ${product.status === 'New' ? 'bg-green-500' : 'bg-red-500'} text-white text-xs px-2 py-1 rounded`}>
                {product.status}
              </div>
            )}

            <div className="absolute top-[20%] inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 space-x-4">
              <div className="p-3 rounded-full transition-all duration-500 bg-white text-black hover:bg-pink-500 hover:text-white hover:rotate-180">
                <FaSearch className="w-4 h-4" />
              </div>
              <div className="p-3 rounded-full transition-all duration-500 bg-white text-black hover:bg-pink-500 hover:text-white hover:rotate-180">
                <FaShoppingBag className="w-4 h-4" onClick={() => handleCart(product)} />
              </div>
              <div className="p-3 rounded-full transition-all duration-500 bg-white text-black hover:bg-pink-500 hover:text-white hover:rotate-180">
                <FaHeart className="w-4 h-4" />
              </div>
            </div>

            <div className="text-center mt-4">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-gray-500 transition-transform duration-300">
                {product.name}
              </h2>
              <div className="flex flex-col items-center transition-transform duration-500 group-hover:-translate-x-4">
                <div className="flex gap-4 items-center transition-opacity duration-500 group-hover:opacity-0">
                  <span className="text-lg text-gray-800">${product.price}</span>
                  {product.discount && (
                    <span className="text-red-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
                <div className="flex gap-2 mt-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <button 
                    onClick={() => handleCart(product)}
                    className="bg-pink-600 text-white py-1 px-3 rounded transition duration-300 transform hover:scale-105 hover:bg-white hover:text-pink-600 hover:shadow-lg hover:border hover:border-pink-600">
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleDetails(product)}
                    className="bg-white border border-pink-600 text-pink-600 py-1 px-3 rounded hover:bg-pink-600 hover:text-white transition duration-300 transform hover:scale-105">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < products.length && (
        <div className="text-center">
          <button
            onClick={loadMoreProducts}
            className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-white hover:text-pink-600 transition duration-300">
            Load More Products
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default ShopComponent;