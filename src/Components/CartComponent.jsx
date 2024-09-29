import { useState } from 'react'
import HeadingComponent from './HeadingComponent'

const CartComponent = () => {
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Cactus Gym', price: 21, quantity: 1, image: '/images/product-1.jpg' },
    { id: 2, name: 'Fly Me To The Moon', price: 21, quantity: 1, image: '/images/product-8.jpg' },
    { id: 3, name: 'Fly Me To The Moon', price: 21, quantity: 1, image: '/images/product-6.jpg' },
    { id: 4, name: 'Fly Me To The Moon', price: 21, quantity: 1, image: '/images/product-4.jpg' },
  ]);

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle quantity change
  const handleQuantityChange = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  // Handle item removal
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  return (
    <>
      <HeadingComponent headingText='Cart' pageText='CART'/>
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
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-4 flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <p>{item.name}</p>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleQuantityChange(item.id, -1)} className="text-xl">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)} className="text-xl">+</button>
                  </div>
                </td>
                <td className="py-4">${(item.price * item.quantity).toFixed(2)}</td>
                <td className="py-4">
                  <button onClick={() => handleRemoveItem(item.id)} className="text-pink-500 text-xl">×</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Cart Actions */}
        <div className="flex justify-between items-center mt-4">
          <button className="text-pink-500">← CONTINUE SHOPPING</button>
          <div className="flex gap-4">
            <button className="text-pink-500">🗑 CLEAR SHOPPING CART</button>
            <button className="text-pink-500">⟳ UPDATE CART</button>
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
          <button className="w-full bg-black text-white p-2 rounded mt-2">APPLY</button>
        </div>

        {/* Cart Total */}
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Cart Total</h2>
          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>Total</p>
            <p className="text-pink-500">${subtotal.toFixed(2)}</p>
          </div>
          <button className="w-full bg-black text-white p-2 rounded">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>

    </>
  )
}

export default CartComponent