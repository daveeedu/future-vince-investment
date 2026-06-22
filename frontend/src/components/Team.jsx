import React from "react";
import elonImg from "../images/elon.jpg"

const Team = () => {
  const teams = [
    {
      id: 4,
      name: "Raj Kunal",
      img: "./images/team3.jpeg",
      position: "CEO",
    },
    {
      id: 2,
      name: "Lew Son",
      img: "./images/team2.jpeg",
      position: "Marketing Head",
    },
    {
      id: 3,
      name: "Tsung Kim",
      img: "./images/team1.jpeg",
      position: "Technical Analyst",
    },
    {
  
    id: 1,
    name: "Elon Musk",
    img: elonImg,
    position: "Stakeholder"
  },
  ];

  return (
    <div className="bg-[#0d0f1a] py-16 px-8 md text-center">
      {/* Heading Section */}
      <h1 className="text-4xl md:text-5xl font-bold text-white">
        Our Expert <span className="text-yellow-500">Team Members</span>
      </h1>
      <p className="text-gray-400 text-lg mt-4">
        Our dedicated team of developers, designers, and traders works tirelessly to
        maximize your profits.
      </p>

      {/* Team Members Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 max-w-6xl mx-auto">
        {teams.map((team) => (
          <div
            key={team.id}
            className="relative group overflow-hidden rounded-2xl bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700"
          >
            {/* Image with Overlay */}
            <div className="relative w-full h-64">
              <img
                src={team.img}
                alt={team.name}
                className="w-full h-full object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Info Section */}
            <div className="p-5 text-white">
              <h3 className="text-xl font-semibold">{team.name}</h3>
              <p className="text-blue-400">{team.position}</p>
            </div>
          </div>
        ))}
      </div>

      {/* WhitePaper Download Button */}
      <button className="mt-10 px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-300">
        Download WhitePaper
      </button>
    </div>
  );
};

export default Team;
