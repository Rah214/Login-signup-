import React from "react";

const AboutPage = () => {
  // Data for the cards
  const cardData = [
    {
      id: 1,
      title: "Our Mission",
      description:
        "To provide innovative and reliable solutions that help our users achieve their goals. We strive to make technology accessible and impactful for everyone.",
    },
    {
      id: 2,
      title: "Our Vision",
      description:
        "We envision a world where technology bridges gaps and creates opportunities for growth, collaboration, and success.",
    },
    {
      id: 3,
      title: "Our Values",
      description:
        "Integrity, innovation, and inclusivity are at the core of everything we do. We believe in building trust and delivering excellence.",
    },
    {
      id: 4,
      title: "Our Team",
      description:
        "Our team consists of talented and dedicated professionals who are passionate about solving problems and creating value for our users.",
    },
    {
      id: 5,
      title: "Our Journey",
      description:
        "From humble beginnings to a growing platform, our journey has been fueled by a commitment to innovation and customer satisfaction.",
    },
    {
      id: 6,
      title: "Our Impact",
      description:
        "We are proud to have made a positive impact on the lives of thousands of users and businesses worldwide.",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Page Heading */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-4 tracking-wide animate__animated animate__fadeInUp">
          About Us
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6 opacity-90">
          We are a passionate team dedicated to building innovative solutions
          that make a difference. Our mission is to empower individuals and
          businesses through cutting-edge technology and exceptional service.
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card) => (
          <div
            key={card?.id}
            className="bg-white p-6 rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105 hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-br from-blue-200 to-purple-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-300 to-purple-300 opacity-20 transform -translate-x-12 translate-y-12 -rotate-12"></div>
            <h2 className="text-3xl font-semibold text-blue-800 mb-4 z-10">
              {card?.title}
            </h2>
            <p className="text-gray-600 text-base z-10">{card?.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="mt-16 text-center relative">
        <h2 className="text-4xl font-bold text-blue-800 mb-4 tracking-wide">
          Join Us on Our Journey
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto opacity-80">
          Whether you're a user, partner, or team member, we invite you to be
          part of our mission to create a better future.
        </p>
        <button className="px-10 cursor-pointer py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full transform transition-all duration-500 hover:scale-110  hover:shadow-2xl hover:bg-gradient-to-l hover:from-purple-600 hover:to-blue-600">
          Get Started
        </button>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 to-purple-50 opacity-10 -z-10"></div>
      </div>
    </div>
  );
};

export default AboutPage;







// About Us
// We are a passionate team dedicated to building innovative solutions that make a difference. Our mission is to empower individuals and businesses through cutting-edge technology and exceptional service.

// Our Mission
// To provide innovative and reliable solutions that help our users achieve their goals. We strive to make technology accessible and impactful for everyone.

// Our Vision
// We envision a world where technology bridges gaps and creates opportunities for growth, collaboration, and success.

// Our Values
// Integrity, innovation, and inclusivity are at the core of everything we do. We believe in building trust and delivering excellence.

// Our Team
// Our team consists of talented and dedicated professionals who are passionate about solving problems and creating value for our users.

// Our Journey
// From humble beginnings to a growing platform, our journey has been fueled by a commitment to innovation and customer satisfaction.

// Our Impact
// We are proud to have made a positive impact on the lives of thousands of users and businesses worldwide.

// Join Us on Our Journey
// Whether you're a user, partner, or team member, we invite you to be part of our mission to create a better future.

// Get Started