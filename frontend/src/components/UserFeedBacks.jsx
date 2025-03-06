import React from "react";

const UserFeedBacks = () => {
  const feedBacks = [
    {
      id: 1,
      country: "USA",
      name: "Sundax Ezma",
      img: "./images/feed1.jpg",
      msg: "I've been investing with FredKinectics for over 4 years and I'm extremely satisfied. Even during COVID, their services remained consistent and reliable!",
    },
    {
      id: 2,
      country: "India",
      name: "Monalisa Thakur",
      img: "./images/feed2.jpg",
      msg: "I've been investing with FredKinectics for over 4 years and I'm extremely satisfied. Even during COVID, their services remained consistent and reliable!",
    },
    {
      id: 3,
      country: "Singapore",
      name: "Donald I.",
      img: "./images/feed3.jpg",
      msg: "I have invested with this platform and successfully withdrawn my money. This is legit and safe. Great doing business with them!",
    },
  ];

  return (
    <div className="bg-white py-16 px-6 text-center">
      {/* Heading Section */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        What Users Say <span className="text-yellow-500">About Us</span>
      </h1>
      <p className="text-gray-600 text-lg mt-4">
        We are making a real impact in the investment market. Here’s what some
        of our users have to say.
      </p>

      {/* Testimonials Container */}
      <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        {feedBacks.map((feedBack) => (
          <div
            key={feedBack.id}
            className="bg-gradient-to-br from-gray-100 to-gray-50 p-6 rounded-2xl border border-gray-200 transition-all duration-300 flex flex-col justify-between h-[280px]"
          >
            <p className="text-gray-700 italic">"{feedBack.msg}"</p>

            {/* User Info (Bottom-Aligned) */}
            <div className="flex items-center mt-6">
              <img
                className="w-12 h-12 rounded-full border-2 border-blue-500"
                src={feedBack.img}
                alt={feedBack.name}
              />
              <div className="ml-3">
                <p className="text-gray-900 font-semibold">{feedBack.name}</p>
                <p className="text-sm text-gray-500">User from {feedBack.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserFeedBacks;
