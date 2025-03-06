import React from "react";
import { Link } from "react-router-dom";
import btcHeroImage from "../images/lion.png";
import { ArrowRight } from "lucide-react";
import bgImage from "../images/bitcoins-mining-concept_173387-677.avif";

const Hero = ({ isSignedUp, setIsSignedUp }) => {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center text-white px-6 lg:px-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0d0f1a] bg-opacity-[95%]"></div>

      <div className="relative flex flex-col lg:flex-row items-center w-full max-w-9xl">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6  lg:text-left">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Trade Bitcoin <span className="text-yellow-400">Smartly</span>
          </h1>
          <p className="text-lg text-gray-300  lg:mx-0">
            Join the revolution in crypto trading! Maximize your profits with
            our AI-driven platform, real-time analytics, and secure investments.
            Start trading today and be part of the future of finance.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
  <Link to="/SignUp" className="no-underline" onClick={() => setIsSignedUp(false)}>
    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded-lg flex items-center gap-2 transition-all shadow-lg text-lg
      animate-pulse hover:animate-none hover:scale-45 hover:shadow-xl active:scale-95 motion-safe:hover:animate-wiggle">
      Get Started <ArrowRight size={22} />
    </button>
  </Link>
  
  <Link className="no-underline" to="/Login" onClick={() => setIsSignedUp(true)}>
    <button className="border hover:border-none border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-bold py-3 px-4 rounded-lg flex items-center gap-2 transition-all shadow-lg text-lg
      hover:scale-110 hover:shadow-2xl active:scale-45 motion-safe:hover:animate-shake">
      Login
    </button>
  </Link>
</div>

        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <img
            src={btcHeroImage}
            alt="Bitcoin Trading"
            className="w-[80%] lg:w-[100%] max-w-3xl drop-shadow-xl duration-300 transform hover:scale-110 transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
