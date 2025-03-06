import React from "react";
import { ImWarning } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const Note = ({ setIsSignedUp }) => {
  return (
    <div className="relative flex items-center justify-center gap-4 py-16 px-6 bg-white text-white text-center">
      {/* Please Note Section */}
      {/* <div
        className="relative w-full max-w-xl p-6 bg-[#ffe7da] rounded-2xl shadow-lg text-[#e60024] transition-all  hover:shadow-red-500/50"
        // style={{
        //   background:
        //     "linear-gradient(186.47deg, rgba(255, 0, 0, 0.6) -20.85%, rgba(255, 0, 0, 0.4) -20.83%, rgba(255, 0, 0, 0.2) 116.4%)",
        //   backdropFilter: "blur(15px)",
        //   border: "1px solid rgba(255, 0, 0, 0.5)",
        //   boxShadow: "inset 0 0 10px rgba(255, 0, 0, 0.3), 0 0 20px rgba(255, 0, 0, 0.5)",
        // }}
      >
        <h3 className="flex items-center justify-center gap-2 text-2xl font-bold text-[#e60024]">
          <ImWarning className="text-3xl" /> Please Note
        </h3>
        <p className="mt-4 text-lg text-[#e60024] leading-relaxed">
          Your daily profit is added cumulatively to your <br />
          available balance at the end of each investment <br />
          cycle.
        </p>
        <Link to="/SignUp" onClick={() => setIsSignedUp(false)}>
          <button className="mt-6 w-[50%] mx-auto  py-3 text-lg font-semibold text-[#ffe7da] bg-[#e60024] rounded-lg shadow-md transition-all hover:bg-yellow-600 hover:shadow-yellow-500/50">
            View Profits
          </button>
        </Link>
      </div> */}
      <div className="flex  gap-3 bg-red-100 border-l-4 text-left border-red-500 text-red-700 px-4 py-3 rounded-md w-full max-w-xl">
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

      {/* Referral Commission Section */}

      <div className="flex  gap-3 bg-green-100 border-l-4 text-left border-green-600 text-green-800 px-4 py-3 rounded-md w-full max-w-xl">
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
  );
};

export default Note;
