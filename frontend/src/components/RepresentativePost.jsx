import React from "react";
import { Link } from "react-router-dom";

const RepresentativePost = ({ setIsSignedUp }) => {
  return (
    <div className="bg-[#0d0f1a] py-16 text-center text-white">
      {/* Regional Representative Section */}
      <div className="max-w-4xl mx-auto bg-white/10 p-10 rounded-lg shadow-lg backdrop-blur-lg">
        <h1 className="text-3xl font-bold mb-4 text-white">
          Regional <span className="text-yellow-500">Representative Post</span>
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          When you have **100 active referrals** in your downline (both direct
          and indirect), you will become a **Bitgrow Investment Regional
          Representative**.  
          Representatives earn a **$2000 monthly salary**.
        </p>
        <Link to="/SignUp" onClick={() => setIsSignedUp(false)}>
          <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-yellow-600 transition-all">
            Join Us
          </button>
        </Link>
      </div>

      {/* Payment Methods Section */}
      <div className="mt-16 px-8 md:px-0">
        <h1 className="text-3xl font-bold">
          Payment We <span className="text-yellow-500">Accept</span>
        </h1>
        <p className="text-gray-300 text-lg mt-3">
          We accept all major cryptocurrencies and fiat payment methods  
          to make your **investment process seamless**.
        </p>

        {/* Payment Method Logos */}
        <div className="flex flex-wrap flex-2 justify-center gap-6 mt-8">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white/10 p-4 rounded-lg shadow-lg backdrop-blur-md w-24 h-24 flex items-center justify-center"
            >
              <img src={method.img} alt={method.name} className="w-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Payment Methods Data
const paymentMethods = [
  { name: "Bitcoin", img: "./images/bitcoinlogo.jpg" },
  { name: "Ethereum", img: "./images/Ethereumlogo.jpg" },
  { name: "Binance", img: "./images/binancelogo.jpg" },
  { name: "Blockchain", img: "./images/blockchainlogo.jpg" },
];

export default RepresentativePost;
