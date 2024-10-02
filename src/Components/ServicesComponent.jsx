import { useState } from 'react';
import HeadingComponent from './HeadingComponent';
import ServiceCardComponent from './ServicecardComponent';
import { FaLeaf, FaPalette, FaSeedling } from 'react-icons/fa';
import { getDatabase, ref, push } from 'firebase/database'; // Firebase imports
import { ToastContainer, toast } from 'react-toastify'; // Toastify for notifications
import 'react-toastify/dist/ReactToastify.css'; // Toastify CSS

const ServicesComponent = () => {
  const [selectedService, setSelectedService] = useState('Custom orders');
  const serviceDetails = {
    'Custom orders': {
      title: 'Custom orders',
      price: 'From $60 - $300',
      img: "https://i.pinimg.com/474x/6b/fb/8a/6bfb8a57030d7b37cfb817fa5873a5a9.jpg",
      description: 'For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada...',
    },
    'Event decoration': {
      title: 'Event decoration',
      price: 'From $100 - $500',
      img: "https://i.pinimg.com/474x/04/dc/de/04dcde14d511b220638d4ea0799d0072.jpg",
      description: 'Our event decoration services are tailored to perfectly match the theme...',
    },
    'Green landscape': {
      title: 'Green landscape',
      price: 'From $200 - $800',
      img: "https://i.pinimg.com/474x/3f/76/74/3f7674d69f3c92d25e8e045b4217fb20.jpg",
      description: 'Our green landscape services include planting, maintenance...',
    },
  };

  const handleServiceClick = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  // Validate form fields
  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.phone) formErrors.phone = 'Phone is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.service) formErrors.service = 'Please select a service';
    if (!formData.message) formErrors.message = 'Message is required';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Firebase database reference
      const db = getDatabase();
      const formRef = ref(db, 'formSubmissions');

      // Push form data to Firebase
      push(formRef, formData)
        .then(() => {
          // Show success toast
          toast.success('Message sent successfully!');

          // Clear form
          setFormData({
            name: '',
            phone: '',
            email: '',
            service: '',
            message: '',
          });
        })
        .catch((error) => {
          // Show error toast
          toast.error('Failed to send message. Try again later.');
        });
    } else {
      toast.error('Please fill all the required fields.');
    }
  };

  return (
    <>
      <HeadingComponent headingText={'Our services'} pageText={'SERVICES'} />
      <ToastContainer />
      <div className="mainContent flex flex-col lg:flex-row justify-center gap-8 mt-10">
        {/* Service Cards Section */}
        <div className="serviceCards flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="py-8 lg:py-16">
            <div className="container flex flex-col gap-4">
              <ServiceCardComponent
                icon={<FaPalette size={40} />}
                title="Custom orders"
                description="Flower helps you perfectly express how important your significant."
                onClick={() => handleServiceClick('Custom orders')}
                isActive={selectedService === 'Custom orders'}
              />
              <ServiceCardComponent
                icon={<FaLeaf size={40} />}
                title="Event decoration"
                description="Flower helps you perfectly express how important your significant."
                onClick={() => handleServiceClick('Event decoration')}
                isActive={selectedService === 'Event decoration'}
              />
              <ServiceCardComponent
                icon={<FaSeedling size={40} />}
                title="Green landscape"
                description="Flower helps you perfectly express how important your significant."
                onClick={() => handleServiceClick('Green landscape')}
                isActive={selectedService === 'Green landscape'}
              />
            </div>
          </div>
        </div>

        {/* Service Details Section */}
        <div className="serviceDetails flex flex-col items-start p-6 lg:p-8 border rounded-lg shadow-md bg-white max-w-full lg:max-w-md">
          <img
            src={serviceDetails[selectedService].img}
            alt="Service"
            className="w-full h-56 object-cover rounded-lg mb-4"
          />
          <h2 className="text-3xl lg:text-4xl font-bold mb-2">
            {serviceDetails[selectedService].title}
          </h2>
          <p className="text-pink-500 text-lg mb-4">
            {serviceDetails[selectedService].price}
          </p>
          <p className="text-gray-600 mb-6">
            {serviceDetails[selectedService].description}
          </p>

          <ul className="space-y-2 mb-8">
            <li className="flex items-center">
              <span className="mr-2 text-pink-500">•</span>
              Free initial consulting for floral design.
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-pink-500">•</span>
              Priority delivery program for weekly customers.
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-pink-500">•</span>
              Birthday blooms with a free arrangement.
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-pink-500">•</span>
              Referral program with a 25% discount.
            </li>
          </ul>
        </div>
      </div>

      {/* Quote Form Section */}
      <div className="container flex flex-col lg:flex-row justify-end mt-10 mr-[400px]">
        <form
          className="max-w-full lg:max-w-md w-full bg-gray-200 p-6 lg:p-8 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">GET A QUOTE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className={`p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md w-full outline-none`}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md w-full outline-none`}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className={`p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md w-full outline-none`}
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className={`p-2 border ${errors.service ? 'border-red-500' : 'border-gray-300'} rounded-md w-full outline-none`}
            >
              <option value="">Type services</option>
              <option value="Custom orders">Custom orders</option>
              <option value="Event decoration">Event decoration</option>
              <option value="Green landscape">Green landscape</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            className={`p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md w-full mb-4 outline-none`}
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
          >
            SEND
          </button>
        </form>
      </div>
    </>
  );
};

export default ServicesComponent;
