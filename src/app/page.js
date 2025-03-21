import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-teal-50 to-indigo-50">
      {/* Background Image or Gradient Animation */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20 animate-pulse"></div>

      {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center text-white">
          <h1 className="text-5xl font-bold text-blue-800 mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to Our Platform
          </h1>
        <p className="text-lg text-black mb-8 animate__animated animate__fadeIn animate__delay-1.5s">
          Discover a world of possibilities with our cutting-edge solutions. Whether you're here to learn, connect, or grow, we've got you covered.
        </p>

        {/* Call to Action Buttons */}   
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate__animated animate__fadeIn animate__delay-2s">
          <Link href="/login">
            <button className="px-8 cursor-pointer  py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-2xl transform hover:scale-105 hover:bg-blue-700 transition duration-300 ease-in-out">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-8 cursor-pointer py-3 bg-green-600 text-white font-semibold rounded-lg shadow-2xl transform hover:scale-105 hover:bg-green-700 transition duration-300 ease-in-out">
              Sign Up
            </button>
          </Link>
          <Link href="/about">
            <button className="px-8 cursor-pointer py-3 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-lg transform hover:scale-105 hover:bg-blue-50 transition duration-300 ease-in-out">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {/* Feature 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <h2 className="text-xl font-bold text-blue-800 mb-3">Easy to Use</h2>
          <p className="text-gray-600">
            Our platform is designed with simplicity in mind, ensuring a seamless experience for all users.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <h2 className="text-xl font-bold text-blue-800 mb-3">Secure & Reliable</h2>
          <p className="text-gray-600"> 
            Your data is safe with us. We use the latest security measures to protect your information.
            </p>
          </div>

        {/* Feature 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <h2 className="text-xl font-bold text-blue-800 mb-3">24/7 Support</h2>
          <p className="text-gray-600">
            Our dedicated support team is available around the clock to assist you with any issues.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center py-6 bg-blue-800 text-white">
        <p>© 2023 Our Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}
