import { useEffect, useRef, useState } from 'react';
import { FaSearch, FaShoppingBag, FaHeart } from 'react-icons/fa';
import products from '../ProductData.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { productData } from '../Slice/ProductSlice.js';
import {get, getDatabase, ref, set} from "firebase/database";
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// ============================ testimonial ============================
const testimonials = [
  {
    quote:
      "I just wanted to say thank you for making such gorgeous arrangements for our birthday celebration. I couldn't get over how perfect they were for the party. You did a fantastic job, and I appreciate it very much.",
    author: "Alejandro Houston",
    profession: "Businessman",
  },
  {
    quote:
      "The service was outstanding, and the floral arrangement exceeded my expectations. Thank you for adding beauty to our special day!",
    author: "Sophia Carter",
    profession: "Event Organizer",
  },
  {
    quote:
      "Absolutely stunning flowers, and your delivery was right on time. I will definitely be recommending your service to everyone I know.",
    author: "James Wright",
    profession: "Marketing Specialist",
  },
  {
    quote:
      "I'm very happy with your work! The flowers were fresh and arranged with so much care and attention. You’ve earned a loyal customer.",
    author: "Olivia Johnson",
    profession: "Wedding Planner",
  },
  {
    quote:
      "A huge thank you for the breathtaking floral arrangements. They added such a wonderful touch to our corporate event.",
    author: "Daniel Green",
    profession: "CEO",
  },
  {
    quote:
      "You truly exceeded our expectations. The flowers were vibrant and fresh, just perfect for our grand opening ceremony.",
    author: "Emily White",
    profession: "Restaurant Owner",
  },
];

// ============================ product cart ============================
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

  // navigate to shop
  const handleShop = () => {
    navigate('/shop');
  };
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

  // ============================== All products Functions ==============================
  const [visibleCount, setVisibleCount] = useState(9); // Controls number of visible products
  const [sortedProducts, setSortedProducts] = useState(products.slice(0, 9)); // Controls sorting
  const [selectedCategory, setSelectedCategory] = useState('All'); // Category Filter

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const db = getDatabase();

  localStorage.setItem('productData', JSON.stringify(sortedProducts));

  // Load more products
  const loadMoreProducts = () => {
    const newVisibleCount = visibleCount + 20;
    setVisibleCount(newVisibleCount);
    setSortedProducts(products.slice(0, newVisibleCount));
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

  // Handle product details
  const handleDetails = (data) => {
    navigate('/details');
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


  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setSortedProducts(products.slice(0, visibleCount));
    } else {
      const filteredProducts = products.filter((product) => product.category === category);
      setSortedProducts(filteredProducts);
    }
  };


  // ============================== All products Functions end==============================

  // navigate to cart
  const handleGoToCart = () => {
    navigate('/cart');
  };

  // nagigate to contact
  const handleContact = () => {
    navigate('/contact');
  };

  // -------------testimonial part
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
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
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-auto" // Ensures the image is responsive
          />

          {/* Text Overlay (moved to the left side) */}
          <div className="absolute inset-y-0 left-[3%] flex flex-col justify-center items-start text-left text-white p-6 sm:p-4 md:p-6 lg:p-8">
            <div className="container">
              <p className="text-[9px] md:text-md lg:text-xl mb-2 lg:mb-9 uppercase text-black">
                {slide.subtitle}
              </p>
              <h1 className="text-sm md:text-3xl lg:text-4xl font-bold mb-1 md:mb-4 lg:mb-10 w-[200px]  md:w-[400px] lg:w-[500px] text-black">
                {slide.heading}
              </h1>
              <button
                onClick={handleShop}
                className="bg-pink-500 text-white px-3 md:px-4 lg:px-5 py-2 rounded-[40px] hover:bg-pink-600 uppercase text-[8px] md:text-[10px] lg:text-[12px] font-semibold transform transition duration-300 hover:scale-105"
              >
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
      {/* ==============BANNER PART END================== */}



      {/* ================about us start================== */}
          {/* About Us Section */}
          <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Title and Subtitle */}
          <div>
            <p className="text-pink-500 uppercase mb-4">About Us</p>
            <h2 className="text-4xl sm:text-xl lg:3xl font-bold text-gray-900 mb-6 leading-tight w-[300px] lg:w-[400px]">
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
     {/* ================about us end================== */}
      {/* ================All products start================== */}
       <div>
        {/* Heading */}
        <div className="text-center mt-10 mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-pink-600">Our Flower</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold mt-2">New Arrivals</h3>
        </div>

        {/* Category Menu */}
        <div className="flex justify-center flex-wrap space-x-2 sm:space-x-4 text-base sm:text-xl font-semibold mb-6">
          <button
            className={`px-3 sm:px-4 py-2 ${
              selectedCategory === 'All' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'
            } rounded`}
            onClick={() => handleCategoryChange('All')}
          >
            All
          </button>
          <button
            className={`px-3 sm:px-4 py-2 ${
              selectedCategory === 'Bouquet' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'
            } rounded`}
            onClick={() => handleCategoryChange('Bouquet')}
          >
            Bouquet
          </button>
          <button
            className={`px-3 sm:px-4 py-2 ${
              selectedCategory === 'Flower box' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'
            } rounded`}
            onClick={() => handleCategoryChange('Flower Box')}
          >
            Flower Box
          </button>
          <button
            className={`px-3 sm:px-4 py-2 ${
              selectedCategory === 'Flower shelf' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'
            } rounded`}
            onClick={() => handleCategoryChange('Flower Shelf')}
          >
            Flower Shelf
          </button>
          <button
            className={`px-3 sm:px-4 py-2 ${
              selectedCategory === 'Basket of flower' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'
            } rounded`}
            onClick={() => handleCategoryChange('Basket of Flowers')}
          >
            Basket of Flower
          </button>
          <button
            className={`px-3 sm:px-4 py-2 ${
              selectedCategory === 'Gift combo' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'
            } rounded`}
            onClick={() => handleCategoryChange('Gift Combos')}
          >
            Gift Combo
          </button>
        </div>

        {/* Product Grid */}
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4 mb-8">
          {sortedProducts.map((product) => (
            <div key={product.id} className="relative group">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg"
              />

              {product.status && (
                <div
                  className={`absolute top-2 left-2 ${
                    product.status === 'New' ? 'bg-green-500' : 'bg-red-500'
                  } text-white text-xs px-2 py-1 rounded`}
                >
                  {product.status}
                </div>
              )}

        {/*============ icons ==============  */}
        <div className="absolute top-[20%] inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 space-x-4">
          {/* <div className="p-3 rounded-full transition-all duration-500 bg-white text-black hover:bg-pink-500 hover:text-white hover:rotate-180">
            <FaSearch className="w-4 h-4" onClick={handleSearchClick} />
          </div> */}
          <div className="p-3 rounded-full transition-all duration-500 bg-white text-black hover:bg-pink-500 hover:text-white hover:rotate-180">
            <FaShoppingBag className="w-4 h-4" onClick={() => handleCart(product)} />
          </div>
           <div className="p-3 rounded-full transition-all duration-500 bg-white text-black hover:bg-pink-500 hover:text-white hover:rotate-180">
            <FaHeart
              onClick={() => handleWishList(product)}
              className="w-4 h-4 cursor-pointer"
            />
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

            {/* ============ buttons ============= */}
            <div className="flex gap-2 mt-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <button
                onClick={() => handleCart(product)}
                className="bg-pink-600 text-white py-1 px-3 rounded transition duration-300 transform hover:scale-105 hover:bg-white hover:text-pink-600 hover:shadow-lg hover:border hover:border-pink-600"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleDetails(product)}
                className="bg-white border border-pink-600 text-pink-600 py-1 px-3 rounded hover:bg-pink-600 hover:text-white transition duration-300 transform hover:scale-105"
              >
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
    <div className="text-center mb-10">
      <button
        onClick={loadMoreProducts}
        className="bg-pink-600 text-white py-2 px-4 rounded-full transition-all duration-300 hover:bg-white hover:text-pink-600 border border-pink-600 hover:shadow-lg"
      >
        View All Products
      </button>
    </div>
  )}
       </div>      
      {/* ================All products end================== */}
      {/* ================features part start================== */}

     {/* ================Order part start================== */}
        <div 
          className="relative h-96 bg-cover bg-center flex items-center justify-center md:justify-start px-4 md:px-0" 
          style={{ backgroundImage: "url('/images/call-bg.jpg')" }}
        > 
          {/* Text Content */}
          <div className="relative z-10 max-w-lg text-center md:text-left text-white  pl-20">
            <p className="uppercase text-sm mb-2 tracking-widest">Custom Flower</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold italic mb-6 leading-snug">
              Let our flowers make your party more perfect.
            </h2>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              {/* Cart Page */}
              <button 
                onClick={handleGoToCart}
                className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
                Order Now
              </button>
              
              {/* Contact Page */}
              <button 
                onClick={handleContact}
                className="bg-white hover:bg-gray-100 text-pink-500 py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        {/* ================Order part end================== */}

        {/* ================Testimonial start================== */}
        <div className="relative py-16 bg-[#f8f9fa]">
          {/* Left and Right Decorative Images */}
          <img
            src="/images/left-bg.png"
            alt="Left Decoration"
            className="absolute left-0 w-[150px] md:w-[300px] lg:w-[500px] hidden sm:block"
          />
          <img
            src="/images/right-bg.png"
            alt="Right Decoration"
            className="absolute right-0 -top-10 w-[150px] md:w-[300px] lg:w-[500px] hidden sm:block"
          />

          {/* Testimonial Content */}
          <div className="relative max-w-2xl mx-auto text-center px-4">
            {/* Quotation Icon */}
            <div className="text-pink-500 text-5xl mb-4">“</div>

            {/* Testimonial Text */}
            <p className="italic text-base md:text-lg mb-6">
              "{testimonials[currentIndex].quote}"
            </p>

            {/* Author Name */}
            <h4 className="font-semibold text-lg">
              {testimonials[currentIndex].author}
            </h4>
            <p className="text-gray-500">{testimonials[currentIndex].profession}</p>

            {/* Navigation Arrows */}
            <div className="flex justify-center items-center mt-6 gap-4">
              <button
                onClick={handlePrev}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-500 hover:text-pink-500"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-500 hover:text-pink-500"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
        {/* ================Testimonial end================== */}
      {/* Footer */}
    </>
  );
};

export default HomeComponent;