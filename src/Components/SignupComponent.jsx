import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaHome, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom';

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

  // State to store errors
  const [errors, setErrors] = useState({});

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    // Clear errors when user starts typing
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  // Handle the next step
  const handleNext = () => {
    if (validateStep()) {
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
    if (validateStep()) {
      console.log('Form Submitted:', formData);
    }
  };

  // Form validation
  const validateStep = () => {
    let tempErrors = {};
    if (step === 1) {
      if (!formData.name) tempErrors.name = 'Name is required';
      if (!formData.email) tempErrors.email = 'Email is required';
      if (!formData.password) tempErrors.password = 'Password is required';
      if (!formData.confirmPassword) tempErrors.confirmPassword = 'Confirm password is required';
    } else if (step === 2) {
      if (!formData.address) tempErrors.address = 'Address is required';
      if (!formData.phone) tempErrors.phone = 'Phone number is required';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  return (
    <>
      <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-gray-50'>
        <div className='max-w-md mx-auto p-8 bg-white rounded-lg shadow-xl'>
          {/* Logo and Login Link */}
          <div className='mb-6'>
            <div className='text-2xl font-bold text-pink-500'>
                <Link to='/'><img src="/images/logo.png" alt="logo" className='w-[150px] mb-[15px] mx-auto'/></Link>
            </div>
            <p className='font-semibold text-center mb-[5px]'>Sign up to continue</p>
            <p className='text-center text-[13px]'>Already have an account? <Link to='/login' className='text-[12px] text-blue-500 hover:underline'>Login</Link></p>
          </div>

          {/* Progress Bar */}
          <div className='relative pt-1 mb-6'>
            <div className='flex mb-2 items-center justify-between'>
              <span className='text-sm font-semibold text-pink-500'>Step {step} of {totalSteps}</span>
              <span className='text-sm font-semibold text-gray-500'>{Math.round(progressPercentage)}%</span>
            </div>
            <div className='w-full bg-gray-200 rounded-full h-2'>
              <div style={{ width: `${progressPercentage}%` }} className='h-2 bg-pink-500 rounded-full' />
            </div>
          </div>

          {/* Form Content */}
          {step === 1 && (
            <div>
              <h2 className='text-xl font-bold mb-4 text-gray-700'>Step 1: Account Details</h2>

              {/* Name */}
              <div className='flex flex-col mb-4'>
                <div className='flex items-center p-2 bg-blue-50 rounded-lg'>
                  <FaUser className='text-pink-500 mr-2' />
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder='Full Name'
                    className='w-full p-2 bg-transparent border-none outline-none'
                  />
                </div>
                {errors.name && <span className='text-red-500 text-sm'>{errors.name}</span>}
              </div>

              {/* Email */}
              <div className='flex flex-col mb-4'>
                <div className='flex items-center p-2 bg-blue-50 rounded-lg'>
                  <FaEnvelope className='text-pink-500 mr-2' />
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder='Email Address'
                    className='w-full p-2 bg-transparent border-none outline-none'
                  />
                </div>
                {errors.email && <span className='text-red-500 text-sm'>{errors.email}</span>}
              </div>

              {/* Password */}
              <div className='flex flex-col mb-4'>
                <div className='flex items-center p-2 bg-blue-50 rounded-lg'>
                  <FaLock className='text-pink-500 mr-2' />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder='Password'
                    className='w-full p-2 bg-transparent border-none outline-none'
                  />
                  <div onClick={() => setShowPassword(!showPassword)} className='cursor-pointer ml-2'>
                    {showPassword ? <FaEye className='text-black' /> : <FaEyeSlash className='text-black' />}
                  </div>
                </div>
                {errors.password && <span className='text-red-500 text-sm'>{errors.password}</span>}
              </div>

              {/* Confirm Password */}
              <div className='flex flex-col mb-4'>
                <div className='flex items-center p-2 bg-blue-50 rounded-lg'>
                  <FaLock className='text-pink-500 mr-2' />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder='Confirm Password'
                    className='w-full p-2 bg-transparent border-none outline-none'
                  />
                  <div onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='cursor-pointer ml-2'>
                    {showConfirmPassword ? <FaEye className='text-black' /> : <FaEyeSlash className='text-black' />}
                  </div>
                </div>
                {errors.confirmPassword && <span className='text-red-500 text-sm'>{errors.confirmPassword}</span>}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className='text-xl font-bold mb-4 text-gray-700'>Step 2: Contact Details</h2>

              {/* Address */}
              <div className='flex flex-col mb-4'>
                <div className='flex items-center p-2 bg-blue-50 rounded-lg'>
                  <FaHome className='text-pink-500 mr-2' />
                  <input
                    type='text'
                    name='address'
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder='Full Address'
                    className='w-full p-2 bg-transparent border-none outline-none'
                  />
                </div>
                {errors.address && <span className='text-red-500 text-sm'>{errors.address}</span>}
              </div>

              {/* Phone Number */}
              <div className='flex flex-col mb-4'>
                <div className='flex items-center p-2 bg-blue-50 rounded-lg'>
                  <FaPhone className='text-pink-500 mr-2' />
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder='Phone Number'
                    className='w-full p-2 bg-transparent border-none outline-none'
                  />
                </div>
                {errors.phone && <span className='text-red-500 text-sm'>{errors.phone}</span>}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className='flex justify-between'>
            <button
              onClick={handlePrevious}
              disabled={step === 1}
              className={`px-4 py-2 rounded-lg text-white ${step === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-500'}`}
            >
              Previous
            </button>

            {step < totalSteps ? (
              <button onClick={handleNext} className='px-4 py-2 bg-pink-500 text-white rounded-lg'>
                Next
              </button>
            ) : (
              <button onClick={handleSubmit} className='px-4 py-2 bg-green-500 text-white rounded-lg'>
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupComponent;
