import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const LoginComponent = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    let validationErrors = {};
    if (!email) {
      validationErrors.email = 'Email is required.';
    } else if (!emailRegex.test(email)) {
      validationErrors.email = 'Invalid email format.';
    }

    if (!password) {
      validationErrors.password = 'Password is required.';
    }

    setErrors(validationErrors);

    // If no errors, proceed with login (e.g., send data to server)
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', { email, password });
    }
  };

  // Handle input change for email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    // Clear email error if the user starts typing
    if (errors.email) {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }
  };

  // Handle input change for password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    // Clear password error if the user starts typing
    if (errors.password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link to='/'><img src="/images/logo.png" alt="Logo" className="w-35" /></Link>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.email ? 'border-red-500' : 'focus:ring-pink-500'
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.password ? 'border-red-500' : 'focus:ring-pink-500'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-9 text-gray-600"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Forget Password Link */}
          <div className="mb-6 text-right">
            <Link to="/forgotpass" className="text-sm text-pink-500 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            Login
          </button>
        </form>
        {/* Sign up Link */}
        <div className="mt-6 text-center">
            <p className="text-gray-700 text-sm">
              Don't have an account?{' '}
              <Link to='/signup' className="text-pink-500 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
      </div>
    </div>
  </>
  )   
}

export default LoginComponent