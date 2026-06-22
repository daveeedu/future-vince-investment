import React from "react";
import { Link } from "react-router-dom";
import btcHeroImage from "../images/lion.png";
import { ArrowRight } from "lucide-react";
import bgImage from "../images/bitcoins-mining-concept_173387-677.avif";

const Hero = ({ isSignedUp, setIsSignedUp }) => {
  return (
    <div
      className="relative w-full h-screen flex flex-col items-center justify-center text-white px-4 sm:px-6 md:px-10 lg:px-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0d0f1a] bg-opacity-[95%]"></div>

      <div className="relative flex flex-col lg:flex-row items-center w-full max-w-9xl  lg:px-20 text-center lg:text-left">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-left lg:text-7xl font-bold leading-tight">
            Trade Bitcoin <span className="text-yellow-400">Smartly</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-left text-gray-300">
            Join the revolution in crypto trading! Maximize your profits with
            our AI-driven platform, real-time analytics, and secure investments.
            Start trading today and be part of the future of finance.
          </p>
          <div className="flex flex-col sm:flex-row mt-[20px] justify-center lg:justify-start gap-4">
            <Link to="/SignUp" className="no-underline" onClick={() => setIsSignedUp(false)}>
              <button className="bg-yellow-500 mx-auto hover:bg-yellow-600 text-black font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg flex items-center gap-2 transition-all shadow-lg text-sm sm:text-lg
                animate-pulse hover:animate-none hover:scale-105 hover:shadow-xl active:scale-95">
                Get Started <ArrowRight size={20} />
              </button>
            </Link>
            
            <Link className="no-underline hidden md:flex" to="/Login" onClick={() => setIsSignedUp(true)}>
              <button className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg flex items-center gap-2 transition-all shadow-lg text-sm sm:text-lg
                hover:scale-105 hover:shadow-2xl active:scale-95">
                Login
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img
            src={btcHeroImage}
            alt="Bitcoin Trading"
            className="w-[70%] sm:w-[80%] lg:w-[100%] max-w-xs sm:max-w-md md:max-w-lg lg:mx-w-3xl drop-shadow-xl duration-300 transform hover:scale-105 transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
