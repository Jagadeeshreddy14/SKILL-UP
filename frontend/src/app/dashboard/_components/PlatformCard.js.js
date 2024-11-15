import React from "react";

const PlatformCard = ({ platform, stats }) => {
  if (!stats) return null; // Handle cases with no stats data

  const platformDetails = {
    LeetCode: {
      logo: "/images/leetcode.png",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
    },
    Codeforces: {
      logo: "/images/codeforces.jpg",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    Codechef: {
      logo: "/images/codechef.jpg",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
  };

  const details = platformDetails[platform] || {};
  const { logo, bgColor, textColor } = details;

  return (
    <div
      className={`p-6 rounded-lg shadow-lg ${bgColor} flex flex-col items-center space-y-4 transform transition duration-500 hover:scale-105`}
    >
      {/* Platform Logo */}
      <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md">
        <img src={logo} alt={`${platform} Logo`} className="h-12 w-12" />
      </div>

      {/* Platform Name */}
      <h2
        className={`text-2xl font-bold ${textColor} uppercase tracking-wider`}
      >
        {platform}
      </h2>

      {/* Statistics */}
      <div className="bg-white p-4 rounded-md shadow-md w-full space-y-2">
        <ul className="text-gray-700 text-sm space-y-1">
          <li>
            <span className="font-medium">Solved:</span> {stats.solvedCount || "N/A"}
          </li>
          <li>
            <span className="font-medium">Rating:</span> {stats.rating || "N/A"}
          </li>
          <li>
            <span className="font-medium">Highest Rating:</span> {stats.highestRating || "N/A"}
          </li>
          <li>
            <span className="font-medium">Global Rank:</span> {stats.globalRank || "N/A"}
          </li>
          <li>
            <span className="font-medium">Country Rank:</span> {stats.countryRank || "N/A"}
          </li>
          <li>
            <span className="font-medium">Easy:</span> {stats.easyCount || 0}
          </li>
          <li>
            <span className="font-medium">Medium:</span> {stats.mediumCount || 0}
          </li>
          <li>
            <span className="font-medium">Hard:</span> {stats.hardCount || 0}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlatformCard;
