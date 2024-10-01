import { useEffect, useState } from 'react';
import HeadingComponent from './HeadingComponent';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, onValue, remove, set } from "firebase/database";

const CartComponent = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  // Setting up Firebase
  const db = getDatabase();

  // Fetching product data from Firebase
  useEffect(() => {
    const starCountRef = ref(db, 'cartProduct/');
    onValue(starCountRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        // Check if the product already exists in the cart
        if (!arr.some(product => product.key === item.key)) {
          arr.push({ ...item.val(), key: item.key });
          setQuantities((prev) => ({ ...prev, [item.key]: prev[item.key] || 1 })); 
        }
      });
      setProducts(arr);
    });
  }, [db]);

  // Increment product quantity
  const handleIncrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  // Decrement product quantity
  const handleDecrement = (id) => {
    setQuantities((prev) => {
      const currentQuantity = prev[id] || 1;
      if (currentQuantity > 1) {
        return { ...prev, [id]: currentQuantity - 1 };
      }
      return prev;
    });
  };

  // Add more products
  const handleAddMoreProduct = () => {
    navigate('/shop');
  };

  // Calculate total price based on product quantity
  const totalPrice = products.reduce((total, item) => {
    return total + (item.price * (quantities[item.key] || 1));
  }, 0);

  // Handle item removal
  const handleRemoveItem = (id) => {
    setProducts((prevItems) => prevItems.filter((item) => item.key !== id));
    setQuantities((prev) => {
      const updatedQuantities = { ...prev };
      delete updatedQuantities[id];
      return updatedQuantities;
    });

    // Remove data from Firebase
    remove(ref(db, 'cartProduct/' + id));
  };

  // Handle updating the cart
  const handleUpdateCart = () => {
    setProducts([...products]);
  };

  // Handle checkout
  const handleCheckout = () => {
    // Prepare the cart details
    const cartDetails = {
      products: products.map(item => ({
        id: item.key,
        name: item.name,
        price: item.price,
        quantity: quantities[item.key] || 1,
        subtotal: totalPrice.toFixed(2),
        total: totalPrice.toFixed(2), 
      })),
    };

    // Sending data to Firebase before navigating
    set(ref(db, 'checkoutProduct/'), cartDetails)
      .then(() => {
        // Redirect to checkout page
        navigate('/checkout');
      })
      .catch((error) => {
        console.error('Error writing to Firebase:', error);
      });
  };

  return (
    <>
      <HeadingComponent headingText="Cart" pageText="CART" />
      <div className="container mx-auto p-8 flex flex-col lg:flex-row gap-8">
        {/* Product List */}
        <div className="w-full lg:w-2/3">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-4">Product</th>
                <th className="py-4">Quantity</th>
                <th className="py-4">Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr className="border-b" key={item.key}>
                  <td className="py-4 flex items-center gap-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <p>{item.name}</p>
                      <p className="text-gray-600">${item.price?.toFixed(2)}</p>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <button
                        className="text-xl"
                        onClick={() => handleDecrement(item.key)}
                      >
                        -
                      </button>
                      <span>{quantities[item.key]}</span>
                      <button
                        className="text-xl"
                        onClick={() => handleIncrement(item.key)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-4">${(item.price * quantities[item.key])?.toFixed(2)}</td>
                  <td className="py-4">
                    <button
                      className="text-pink-500 text-xl"
                      onClick={() => handleRemoveItem(item.key)}
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Cart Actions */}
          <div className="flex justify-between items-center mt-4">
            <button onClick={handleAddMoreProduct} className="text-pink-500">
              ← CONTINUE SHOPPING
            </button>
            <div className="flex gap-4">
              <button className="text-pink-500"  onClick={() => handleRemoveItem(item.key)}>
                🗑 CLEAR SHOPPING CART
              </button>
              <button className="text-pink-500" onClick={handleUpdateCart}>⟳ UPDATE CART</button>
            </div>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="w-full lg:w-1/3 bg-gray-100 p-4 rounded-lg">
          {/* Coupon Code */}
          <div className="mb-4">
            <p>Enter coupon code. It will be applied at checkout.</p>
            <input
              type="text"
              placeholder="Your code here"
              className="w-full p-2 border rounded mt-2"
            />
            <button className="w-full bg-black text-white p-2 rounded mt-2">
              APPLY
            </button>
          </div>

          {/* Cart Total */}
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Cart Total</h2>
            <div className="flex justify-between mb-2">
              <p>Subtotal</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>Total</p>
              <p className="text-pink-500">${totalPrice.toFixed(2)}</p>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-black text-white p-2 rounded">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartComponent;