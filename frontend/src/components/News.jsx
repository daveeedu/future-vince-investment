import React from "react";

const News = () => {
  return (
    <div className="px-10 py-16 bg-white">
      {/* Title Section */}
      <h1 className="text-4xl md:text-5xl font-bold text-black text-center">
        Our Latest <span className="text-yellow-500">News</span>
      </h1>
      <p className="text-gray-600 text-lg text-center mt-3">
        Stay updated with the latest news about our system and the global market.
      </p>

      {/* News Container */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* News Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            className="w-full h-60 object-cover"
            src="./images/news1.jpg"
            alt="Bitcoin News"
          />
          <div className="p-6">
            <h5 className="text-2xl font-bold text-gray-900">
              Why Bitcoin will eventually change the world
            </h5>
            <p className="text-gray-700 mt-2">
              If you take even a passing interest in technology or finance,
              you’ll already know about Bitcoin. The digital currency was
              released in 2009 and was heralded as a decentralized network...
            </p>
            <a href="#" className="mt-4 inline-block text-yellow-500 font-semibold text-lg hover:underline">
              Read More →
            </a>
          </div>
        </div>

        {/* News Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            className="w-full h-60 object-cover"
            src="./images/news2.jpg"
            alt="How Bitcoin Works"
          />
          <div className="p-6">
            <h5 className="text-2xl font-bold text-gray-900">How Bitcoin Works</h5>
            <p className="text-gray-700 mt-2">
              How exactly to categorize Bitcoin is a matter of controversy. Is
              it a type of currency, a store of value, a payment network, or an
              asset class? Fortunately, it's easier to define what Bitcoin
              actually is...
            </p>
            <a href="#" className="mt-4 inline-block text-yellow-500 font-semibold text-lg hover:underline">
              Read More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
