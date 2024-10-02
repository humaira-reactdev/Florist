import { useEffect, useState } from 'react';
import { toast, Bounce } from 'react-toastify';
import { ref, remove, onValue, set, get } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { getDatabase } from "firebase/database";
import { useDispatch } from 'react-redux';
import { productData } from '../Slice/ProductSlice';
import HeadingComponent from './HeadingComponent';

const WishlistComponent = () => {
  const db = getDatabase();
  const navigate = useNavigate(); // For navigation
  const dispatch = useDispatch(); // For adding to cart
  const [wishlistItems, setWishlistItems] = useState([]); // Local state for wishlist items

  // Fetching data from Realtime Database
  useEffect(() => {
    const wishlistRef = ref(db, 'wishlistProduct');

    const unsubscribe = onValue(wishlistRef, (snapshot) => {
      const wishlistData = snapshot.val();
      if (wishlistData) {
        // Convert wishlist object to array
        const wishlistArray = Object.values(wishlistData);
        setWishlistItems(wishlistArray);
      } else {
        setWishlistItems([]); // Set empty array if no items in the wishlist
      }
    });

    return () => unsubscribe(); // Cleanup the listener on component unmount
  }, [db]);

  // Function to remove item from wishlist
  const handleRemoveFromWishlist = (id) => {
    const wishlistRef = ref(db, `wishlistProduct/${id}`);
    remove(wishlistRef)
      .then(() => {
        toast.success('Removed from wishlist!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => {
        toast.error('Error removing from wishlist: ' + error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
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

  return (
    <>
      <HeadingComponent headingText="WishList" pageText="WishList" />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">My Wishlist</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistItems.length === 0 ? (
            <p className="text-center col-span-3">Your wishlist is empty.</p>
          ) : (
            wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Product Image */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />

                {/* Product Info */}
                <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                <p className="text-pink-500 text-lg mb-2">${item.price.toFixed(2)}</p>

                {/* Wishlist Actions */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleRemoveFromWishlist(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => handleCart(item)}
                    className="bg-pink-500 text-white py-1 px-4 rounded-lg hover:bg-pink-600 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default WishlistComponent;
