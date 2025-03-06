import React from "react";
import { Link } from "react-router-dom";

const AboutUs = ({ isSignedUp, setIsSignedUp }) => {
  return (
    <div className="relative bg-gradient-to-b bg-white text-w text-blackhite py-20 flex items-center justify-center">
      {/* Content Wrapper */}
      <div className="relative w-[90%] lg:w-[70%] max-w-4xl text-center space-y-8">
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          About <span className="text-yellow-500">FredKinectics Investment</span>
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-700">
        FredKinectics Investment is a leading platform in cryptocurrency trading and mining.
          Since 2015, we have been empowering investors with secure and high-yield investment opportunities,
          ensuring sustainable growth in the digital market.
        </p>
        <p className="text-lg text-gray-700">
          Our cutting-edge tools, AI-driven analytics, and secure trading environment make investing seamless.
          Whether you're a beginner or a seasoned trader, we provide the best strategies to maximize your success.
        </p>

        {/* Animated Divider */}
        <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full animate-pulse"></div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <Link to="/SignUp" onClick={() => setIsSignedUp(false)}>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-all  text-lg  duration-300">
              Get Started
            </button>
          </Link>
          <Link to="/LearnMore">
            <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold py-3 px-6 rounded-lg transition-all text-lg  duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
