import React, { useState } from 'react'
import { FaUser, FaEnvelope, FaPhone, FaHome, FaLock} from 'react-icons/fa'; // Import icons

const SignupComponent = () => {
    // State to track the current step
  const [step, setStep] = useState(1);

  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phone: '',
  });

  // Total number of steps in the form
  const totalSteps = 2;

  // Calculate the progress percentage
  const progressPercentage = (step / totalSteps) * 100;

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle the next step
  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  // Handle the previous step
  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <>
        <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-gray-50'>
      <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-xl">
        {/* Progress Bar */}
        <div className="relative pt-1 mb-6">
          <div className="flex mb-2 items-center justify-between">
            <span className="text-sm font-semibold text-pink-500">
              Step {step} of {totalSteps}
            </span>
            <span className="text-sm font-semibold text-gray-500">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              style={{ width: `${progressPercentage}%` }}
              className="h-2 bg-pink-500 rounded-full"
            />
          </div>
        </div>

        {/* Form Content */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-700">Step 1: Account Details</h2>

            {/* Name */}
            <div className="flex items-center mb-4 p-2 bg-blue-50 rounded-lg">
              <FaUser className="text-pink-500 mr-2" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full p-2 bg-transparent border-none outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex items-center mb-4 p-2 bg-blue-50 rounded-lg">
              <FaEnvelope className="text-pink-500 mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full p-2 bg-transparent border-none outline-none"
              />
            </div>

            {/* Password */}
            <div className="flex items-center mb-4 p-2 bg-blue-50 rounded-lg">
              <FaLock className="text-pink-500 mr-2" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="w-full p-2 bg-transparent border-none outline-none"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex items-center mb-4 p-2 bg-blue-50 rounded-lg">
              <FaLock className="text-pink-500 mr-2" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                className="w-full p-2 bg-transparent border-none outline-none"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-700">Step 2: Contact Details</h2>

            {/* Address */}
            <div className="flex items-center mb-4 p-2 bg-blue-50 rounded-lg">
              <FaHome className="text-pink-500 mr-2" />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Full Address"
                className="w-full p-2 bg-transparent border-none outline-none"
              />
            </div>

            {/* Phone Number */}
            <div className="flex items-center mb-4 p-2 bg-blue-50 rounded-lg">
              <FaPhone className="text-pink-500 mr-2" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full p-2 bg-transparent border-none outline-none"
              />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={step === 1}
            className={`px-4 py-2 rounded-lg text-white ${
              step === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-500'
            }`}
          >
            Previous
          </button>

          {step < totalSteps ? (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-pink-500 text-white rounded-lg"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default SignupComponent