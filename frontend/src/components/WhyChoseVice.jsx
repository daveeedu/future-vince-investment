import React from "react";
import { MdOutlineVerifiedUser, MdSecurity, MdSpeed } from "react-icons/md";
import { TbShieldCheck, TbCoinBitcoin } from "react-icons/tb";
import { HiOutlineServerStack } from "react-icons/hi2";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaUsersCog } from "react-icons/fa";
import { BiLockOpenAlt } from "react-icons/bi";

const WhyChoseVice = () => {
  const whyChoseVice = [
    {
      id: 1,
      icon: <MdOutlineVerifiedUser className="text-blue-400 text-5xl" />,
      title: "Legal & Certified",
      details:
        "We operate within the legal framework and are certified for investment business. Your investments are safe with us.",
    },
    {
      id: 2,
      icon: <TbShieldCheck className="text-green-400 text-5xl" />,
      title: "Top Security",
      details:
        "We employ advanced security measures to protect your assets, reducing risks to the lowest level possible.",
    },
    {
      id: 3,
      icon: <BiLockOpenAlt className="text-yellow-400 text-5xl" />,
      title: "Anonymous & Secure",
      details:
        "We respect your privacy with crypto-based transactions, ensuring full anonymity and security for all investments.",
    },
    {
      id: 4,
      icon: <MdSpeed className="text-red-400 text-5xl" />,
      title: "Instant Withdrawals",
      details:
        "Your withdrawals are processed instantly with no delays. The minimum withdrawal amount is just $10.",
    },
    {
      id: 5,
      icon: <FaUsersCog className="text-purple-400 text-5xl" />,
      title: "Referral Earnings",
      details:
        "Earn extra income through our referral program. The more you refer, the more you earn.",
    },
    {
      id: 6,
      icon: <RiCustomerService2Fill className="text-cyan-400 text-5xl" />,
      title: "24/7 Support",
      details:
        "We provide round-the-clock customer support via email and Telegram for quick issue resolution.",
    },
    {
      id: 7,
      icon: <HiOutlineServerStack className="text-indigo-400 text-5xl" />,
      title: "Powerful Servers",
      details:
        "Our dedicated servers ensure lightning-fast transactions with minimal downtime, maximizing efficiency.",
    },
    {
      id: 8,
      icon: <MdSecurity className="text-orange-400 text-5xl" />,
      title: "SSL Encryption",
      details:
        "We use high-level SSL encryption to secure transactions and verify legitimate investment activity.",
    },
    {
      id: 9,
      icon: <TbCoinBitcoin className="text-teal-400 text-5xl" />,
      title: "DDoS Protection",
      details:
        "We leverage top-tier DDoS protection to ensure smooth and uninterrupted trading operations.",
    },
  ];

  return (
    <div className="py-20 px-6 md:px-16 bg-[#0d0f1a] text-white text-center">
      {/* Section Header */}
      <h1 className="text-4xl md:text-5xl font-bold">
        Why Choose <span className="text-yellow-400">FredKinectics Investment?</span>
      </h1>
      <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
        We provide a reliable investment platform with top security, instant withdrawals,
        and a transparent referral program.
      </p>

      {/* Features Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {whyChoseVice.map((item) => (
          <div
            key={item.id}
            className="relative p-6 rounded-2xl shadow-lg transition-all transform hover:scale-105 hover:shadow-yellow-500/30"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.2)",
              background:
                "linear-gradient(186.47deg, rgba(255, 255, 255, 0.15) -20.85%, rgba(255, 255, 255, 0.1) -20.83%, rgba(255, 255, 255, 0.05) 116.4%)",
              backdropFilter: "blur(15px)",
            }}
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-yellow-400">{item.title}</h3>
            <p className="text-gray-300 mt-3">{item.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoseVice;
