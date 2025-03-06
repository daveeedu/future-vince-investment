import React from "react";
import person from "../images/person.svg";
import invest from "../images/pip-fill.svg";
import wallet from "../images/wallet2.svg";

const HowItWorks = () => {
  const howItWorks = [
    { id: 1, img: person, title: "Create Account" },
    { id: 2, img: invest, title: "Invest To Plan" },
    { id: 3, img: wallet, title: "Get Profit" },
  ];

  return (
    <div className="relative py-16 pb-[8%] items-center flex flex-col px-6 text-center bg-white">
      {/* Background Overlay */}
      {/* <div className="absolute inset-0 bg-black/60"></div> */}

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0d0f1a]">
          How FredKinectics <span className="text-yellow-400">Investment Works</span>
        </h1>
        <p className="text-[#0d0f1a] text-lg mt-4">
          Get involved in our platform and invest. We will utilize your money
          and send profits directly to your wallet.
        </p>

        {/* Steps Section */}
        <div className="mt-12  flex flex-col items-center">
          <div className="grid  grid-cols-3 gap-11 relative w-full max-w-4xl">
            {howItWorks.map((item) => (
              <div
                key={item.id}
                className="relative bg-[#0d0f1a] flex flex-col items-center p-6 rounded-2xl shadow-lg transition-all transform hover:scale-105"
                // style={{
                //   background:
                //     "linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))",
                //   backdropFilter: "blur(12px)",
                //   border: "1px solid rgba(255, 255, 255, 0.3)",
                // }}
              >
                {/* Icon */}
                <img src={item.img} alt={item.title} className="w-16 h-16" />
                {/* Title */}
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            ))}

            {/* Stepper Dotted Line */}
            <div className="absolute top-[120%] left-0 right-0 flex items-center w-full transform -translate-y-1/2">
              {howItWorks.map((_, index) => (
                index < howItWorks.length - 1 && (
                  <div key={index} className="flex-1 border-dotted border-t-4 border-[#0d0f1a] opacity-50"></div>
                )
              ))}
            </div>

            {/* Stepper Glowing Circles */}
            <div className="absolute top-[120%] left-0 right-0 flex justify-between w-full transform -translate-y-1/2">
              {howItWorks.map((item) => (
                <div
                  key={item.id}
                  className="w-8 h-8 flex items-center justify-center bg-[#0d0f1a] text-yellow-500 font-bold rounded-full shadow-lg border border-[#0d0f1a"
                >
                  {item.id}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
