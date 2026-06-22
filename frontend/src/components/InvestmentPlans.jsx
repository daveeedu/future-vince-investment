import React from "react";
import { Link } from "react-router-dom";
import bg from "../images/btc-img-1.jpg";
import { ImWarning } from "react-icons/im";
import { FaUsers } from "react-icons/fa";

const InvestmentPlans = ({ setIsSignedUp }) => {
  const investmentPlans = [
    {
      id: 1,
      title: "Silver Plan",
      roi: "21% ROI +",
      cap: "Capital Included",
      days: "15 Days",
      amount: "$500 - $4,999",
    },
    {
      id: 2,
      title: "Diamond Plan",
      roi: "30% ROI +",
      cap: "Capital Included",
      days: "15 Days",
      amount: "$5,000 - $9,999",
    },
    {
      id: 3,
      title: "Golden Plan",
      roi: "42% ROI +",
      cap: "Capital Included",
      days: "15 Days",
      amount: "$10,000 - $10,000,000",
    },
  ];

  return (
    <div
      className="relative text-white py-20 text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#0d0f1a] bg-opacity-90"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 px-6 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold">
          Investment <span className="text-yellow-400">Plans</span>
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          Choose the plan that fits your goals and maximize your returns.
        </p>

        {/* Investment Cards */}
        <div className="mt-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {investmentPlans.map((plan) => (
            <div
              key={plan.id}
              className="relative p-6 rounded-2xl shadow-lg transition-all transform hover:scale-105 hover:shadow-yellow-500/30"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              {/* Background Blur Layer */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(186.47deg, rgba(255, 253, 253, 0.4) -20.85%, rgba(255, 253, 253, 0.2) -20.83%, rgba(255, 255, 255, 0) 116.4%)",
                  backdropFilter: "blur(10px)",
                  zIndex: -1,
                }}
              ></div>

              {/* Content (Text & Button) */}
              <h3 className="text-2xl font-bold text-yellow-400">
                {plan.title}
              </h3>
              <p className="text-xl font-semibold mt-3">{plan.roi}</p>
              <p className="text-gray-300 text-sm mt-1">{plan.cap}</p>
              <div className="border-t border-yellow-500/30 my-4"></div>
              <p className="text-lg">{plan.days}</p>
              <div className="border-t border-yellow-500/30 my-4"></div>
              <p className="text-xl text-yellow-400">{plan.amount}</p>

              {/* Invest Button */}
              <Link to="/SignUp" onClick={() => setIsSignedUp(false)}>
                <button className="mt-6 w-full py-3 text-lg font-semibold text-black bg-yellow-500 rounded-lg shadow-md transition-all hover:bg-yellow-600 hover:shadow-yellow-500/50">
                  Invest Now
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Horizontal Line for Separation */}
        <hr className="mt-16 border-t-4 border-gray-300/90 w-full max-w-4xl mx-auto" />

        {/* Warnings & Referral Section */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-4 py-10 px-6 text-white text-center">
          {/* Warning Box */}
          <div className="flex gap-3 bg-red-100 border-l-4 text-left border-red-500 text-red-700 px-4 py-3 rounded-md w-full max-w-xl">
            <ImWarning className="text-red-500 text-3xl" />
            <div>
              <p className="font-bold">Please Note</p>
              <p>
                Your daily profit is added cumulatively to your <br />
                available balance at the end of each investment <br />
                cycle.
              </p>
            </div>
          </div>

          {/* Referral Commission Box */}
          <div className="flex gap-3 bg-green-100 border-l-4 text-left border-green-600 text-green-800 px-4 py-3 rounded-md w-full max-w-xl">
            <FaUsers className="text-green-500 text-4xl" />
            <div>
              <p className="font-bold">Referral Commission 10%</p>
              <p>
                Your daily profit is added cumulatively to your <br />
                available balance at the end of each investment <br />
                cycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPlans;
