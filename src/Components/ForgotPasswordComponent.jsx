import React, { useState } from 'react';

const ForgotPasswordComponent = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log('Password reset email sent to:', email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Enter your email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Send Reset Code
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="/login" className="text-sm text-pink-500 hover:text-pink-600">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordComponent;
