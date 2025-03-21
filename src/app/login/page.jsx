"use client";

import React, { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    // Handle login logic here
    console.log("Login submitted:", { email, password });
  };

  // Dynamic form fields
  const formFields = [
    {
      id: "email",
      label: "Email",
      type: "email",
      value: email,
      setValue: setEmail,
      placeholder: "Enter your email",
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      value: password,
      setValue: setPassword,
      placeholder: "Enter your password",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-50 animate-gradient"></div>

      {/* Main Content */}
      <div className="relative bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {formFields?.map((field) => (
            <div key={field.id} className="relative">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={field.id}
              >
                {field.label}
              </label>
              <input
                type={field.type}
                value={field.value}
                onChange={(e) => field.setValue(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-gray-800 placeholder-gray-400"
                placeholder={field.placeholder}
                required
              />
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Login
          </button>
        </form>

        {/* Navigation Links */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
