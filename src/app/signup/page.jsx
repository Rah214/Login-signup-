"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      username: '',
      email: '',
      password: '',
    });
    // Handle signup logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 opacity-50 animate-gradient"></div>

      {/* Main Content */}
      <div className="relative bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Field */}
          <div className="relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors bg-gray-800 text-white"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors bg-gray-800 text-white"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors bg-gray-800 text-white"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-green-600 cursor-pointer     text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>

        {/* Navigation Links */}
        <div className="mt-6 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
            Home
          </Link>
          <span className="mx-2 text-gray-400">|</span>
          <Link href="/login" className="text-blue-600 hover:text-blue-800 transition-colors">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;