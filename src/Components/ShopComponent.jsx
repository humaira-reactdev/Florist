import { useState } from 'react';
import {  FaShoppingBag, FaHeart } from 'react-icons/fa';
import HeadingComponent from './HeadingComponent';
import products from '../ProductData.js';
import { AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { productData } from '../Slice/ProductSlice.js';
import { get, getDatabase, ref, set } from "firebase/database";
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShopComponent = () => {
  // state variables
  const [visibleCount, setVisibleCount] = useState(9);
  const [sortedProducts, setSortedProducts] = useState(products.slice(0, 9));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const db = getDatabase();
 
  // set data to the local storage
  localStorage.setItem('productData', JSON.stringify(sortedProducts));

  // function for more products
  const loadMoreProducts = () => {
    const newVisibleCount = visibleCount + 9;
    setVisibleCount(newVisibleCount);
    setSortedProducts(products.slice(0, newVisibleCount));
  };

  // function for sorting products
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
    // Check if the product is in stock
    if (data.stock <= 0) {
      toast.info('This product is currently out of stock.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      return; // Exit the function if the product is out of stock
    }
    
  // Check if the product already exists in the cart using 'get' instead of 'onValue'
  const cartRef = ref(db, `cartProduct/${data.id}`);

  get(cartRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const currentQuantity = snapshot.val().quantity || 1;
        set(cartRef, {
          ...snapshot.val(),
          quantity: currentQuantity + 1,
        });
      } else {
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
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

        navigate('/cart');
        dispatch(productData(data));
      };



     // Add to wishlist function with check for existing product
     const handleWishList = (data) => {
      // Check if the product already exists in the wishlist using 'get'
      const wishlistRef = ref(db, `wishlistProduct/${data.id}`);
  
      get(wishlistRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            // Product already exists in the wishlist, show toast message
            toast.warning('This product is already in your wishlist!', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
          } else {
            // Add product to the wishlist if it doesn't exist already
            set(wishlistRef, {
              id: data.id,
              name: data.name,
              price: data.price,
              originalPrice: data.originalPrice,
              discount: data.discount,
              img: data.img,
              stock: data.stock,
            })
              .then(() => {
                // Show success toast
                toast.success('Product added to your wishlist!', {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  transition: Bounce,
                });
  
                // Optionally navigate to the wishlist page after successful addition
                navigate('/wishlist');
  
                // Optionally dispatch product data to Redux or other state management if needed
                dispatch(productData(data));
              })
              .catch((error) => {
                // Handle any errors that occur during the wishlist addition process
                console.error("Error adding to wishlist:", error);
                toast.error('Error adding product to wishlist.', {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  transition: Bounce,
                });
              });
          }
        })
        .catch((error) => {
          // Handle errors during the wishlist check process
          console.error("Error fetching wishlist data:", error);
        });
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
     
        <div className='container flex justify-between items-center sm:flex-wrap'>
          <div className="flex items-center space-x-2 mt-20 mb-8">
            <div className="p-2 bg-gray-100 rounded">
              <AiOutlineMenu className="w-5 h-5 text-black" />
            </div>

            <div className="text-gray-600 w-[500px]">
              Showing <span className="font-semibold">1-9</span> of <span className="font-semibold">20</span> results
            </div>
          </div>
       
          <div className="flex justify-end mt-9">
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
                {/* <div className="p-3 cursor-pointer rounded-full transition-all duration-500 bg-white text-black hover:bg-pink-500 hover:text-white hover:rotate-180">
                  <FaSearch className="w-4 h-4" />
                </div> */}
                <div className="p-3 cursor-pointer rounded-full transition-all duration-500 bg-white text-black hover:bg-pink-500 hover:text-white hover:rotate-180">
                  <FaShoppingBag className="w-4 h-4" onClick={() => handleCart(product)} />
                </div>
                <div className="p-3 cursor-pointer rounded-full transition-all duration-500 bg-white text-black hover:bg-pink-500 hover:text-white hover:rotate-180">
                  <FaHeart onClick={() => handleWishList(product)} className="w-4 h-4" />
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
