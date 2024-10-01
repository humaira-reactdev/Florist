import { useEffect, useState } from "react";
import HeadingComponent from "./HeadingComponent";
import { getDatabase, ref, onValue } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import jsPDF from "jspdf";

const CheckoutComponent = () => {
  const navigate = useNavigate();
  // State variables
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    contact: "",
    street: "",
    apartment: "",
    city: "",
    state: "",
    postcode: "",
    orderNote: "",
  });
  const [errors, setErrors] = useState({});
  const db = getDatabase();

  // Fetching product data from Firebase
  useEffect(() => {
    const starCountRef = ref(db, "checkoutProduct/products/");
    onValue(starCountRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        // Check if the product already exists in the cart
        if (!arr.some((product) => product.key === item.key)) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setProducts(arr);
    });
  }, [db]);

  // Handle proceed to checkout
  const handleproceed=(e)=>{
    e.preventDefault();
    const newErrors = {};

    // Validate each field
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.contact) {
      newErrors.contact = "Contact is required";
    }
    if (!formData.street) {
      newErrors.street = "Street address is required";
    }
    if (!formData.city) {
      newErrors.city = "City is required";
    }
    if (!formData.state) {
      newErrors.state = "State is required";
    }
    if (!formData.postcode) {
      newErrors.postcode = "Postcode is required";
    }

    // Set errors if there are any
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    }else{
      navigate('/proceed')
    }
   
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate each field
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.contact) {
      newErrors.contact = "Contact is required";
    }
    if (!formData.street) {
      newErrors.street = "Street address is required";
    }
    if (!formData.city) {
      newErrors.city = "City is required";
    }
    if (!formData.state) {
      newErrors.state = "State is required";
    }
    if (!formData.postcode) {
      newErrors.postcode = "Postcode is required";
    }

    // Set errors if there are any
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle successful submission (e.g., proceed to checkout)
       // Generate PDF invoice
       generatePDF();
       setErrors({});
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
  
    // Load the logo 
    const logo = new Image();
    logo.src = "/images/logo.jpg"; 
  
    // When the logo is loaded, add it to the PDF
    logo.onload = () => {
      // Add the logo to the PDF (x, y, width, height)
      doc.addImage(logo, "PNG", 14, 10, 40, 10); 
  
      // Title
      doc.setFontSize(20);
      doc.text("Invoice", 14, 40); 
  
      // User Information
      doc.setFontSize(12);
      doc.text(`Name: ${formData.firstName} ${formData.lastName}`, 14, 50);
      doc.text(`Email: ${formData.email}`, 14, 60);
      doc.text(`Contact: ${formData.contact}`, 14, 70);
      doc.text(
        `Address: ${formData.street}, ${
          formData.apartment ? formData.apartment + ", " : ""
        }${formData.city}, ${formData.state}, ${formData.postcode}`,
        14, 80
      );
  
      // Products
      doc.text("Products:", 14, 100);
      products.forEach((product, index) => {
        doc.text(
          `x${product.quantity} ${product.name} - $${product.price}`,
          14,
          110 + index * 10
        );
      });
  
      // Total
      const total = products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
      doc.text(`Total: $${total}`, 14, 110 + products.length * 10 + 10);
  
      // Save the PDF
      doc.save("invoice.pdf");
    };
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for the current field
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  return (
    <>
      <HeadingComponent headingText="Checkout" pageText="CHECKOUT" />
      <div className="flex flex-col md:flex-row justify-center p-10">
        <form className="w-full md:w-2/3 mb-8" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Contact information</h2>
          <input
            type="email"
            name="email"
            placeholder="Email or mobile phone number"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
          <div className="flex items-center mb-6">
            <input type="checkbox" id="newsletter" className="mr-2" />
            <label htmlFor="newsletter" className="text-gray-600">
              Keep me up to date on news and exclusive offers
            </label>
          </div>

          <h2 className="text-2xl font-bold mb-4">Shipping address</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className={`border border-gray-300 rounded-lg p-3 w-full focus:outline-none ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className={`border border-gray-300 rounded-lg p-3 w-full focus:outline-none ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
            {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
          </div>

          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={formData.contact}
            onChange={handleChange}
            className={`w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none ${
              errors.contact ? "border-red-500" : ""
            }`}
          />
          {errors.contact && <span className="text-red-500">{errors.contact}</span>}
          <input
            type="text"
            name="street"
            placeholder="Street address"
            value={formData.street}
            onChange={handleChange}
            className={`w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none ${
              errors.street ? "border-red-500" : ""
            }`}
          />
          {errors.street && <span className="text-red-500">{errors.street}</span>}
          <input
            type="text"
            name="apartment"
            placeholder="Apartment, suite, unit etc. (optional)"
            value={formData.apartment}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none"
          />
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="city"
              placeholder="Town/City"
              value={formData.city}
              onChange={handleChange}
              className={`border border-gray-300 rounded-lg p-3 w-full focus:outline-none ${
                errors.city ? "border-red-500" : ""
              }`}
            />
            {errors.city && <span className="text-red-500">{errors.city}</span>}
            <input
              type="text"
              name="state"
              placeholder="Country/State"
              value={formData.state}
              onChange={handleChange}
              className={`border border-gray-300 rounded-lg p-3 w-full focus:outline-none ${
                errors.state ? "border-red-500" : ""
              }`}
            />
            {errors.state && <span className="text-red-500">{errors.state}</span>}
          </div>
          <input
            type="text"
            name="postcode"
            placeholder="Postcode/Zip"
            value={formData.postcode}
            onChange={handleChange}
            className={`w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none ${
              errors.postcode ? "border-red-500" : ""
            }`}
          />
          {errors.postcode && <span className="text-red-500">{errors.postcode}</span>}
          <input
            type="text"
            name="orderNote"
            placeholder="Order note"
            value={formData.orderNote}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none"
          />
          <div className="flex items-center mb-6">
            <input type="checkbox" id="saveInfo" className="mr-2" />
            <label htmlFor="saveInfo" className="text-gray-600">
              Save this information for next time
            </label>
          </div>

          <button type="submit" className="bg-black text-white px-4 py-2 w-full">Submit</button>
        </form>

        <div className="w-full md:w-1/3 ml-10 p-6 bg-gray-50 border border-gray-200 rounded-lg">
          
          {products.map((product) => (
            <div key={product.key} className="mb-4">
              <ul className="text-gray-600">
                <li className="flex justify-between mb-2">
                  <span>
                    x{product.quantity} {product.name}
                  </span>
                  <span>${product.price}</span>
                </li>
              </ul>
            </div>
          ))}
          <div className="flex justify-between flex-col font-bold">
          <div className="border-t border-gray-300 my-4"></div>

            {/* Subtotal */}
            <div className="flex justify-between mb-2">
              <p className="font-semibold">Subtotal</p>
              <span className="font-semibold text-xl text-black">
                $
               {products.reduce((total, product) => total + product.price * product.quantity, 0)}
               </span>
            </div>

            {/* Total */}
            <div className="flex justify-between mb-4">
               <span className="font-bold text-xl">Total</span>
               <span className="font-bold text-xl text-pink-400">
                $
               {products.reduce((total, product) => total + product.price * product.quantity, 0)}
               </span>
            </div>

            {/* Payment Methods
            <div className="mb-4">
              <label className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" /> Cheque Payment
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> PayPal
              </label>
            </div> */}

            <button onClick={handleproceed} className="w-full bg-black text-white py-3 rounded-lg mt-4">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutComponent;