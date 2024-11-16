import React from "react";

const StatItem = ({ label, value }) => (
  <div className="flex justify-between text-sm font-medium">
    <span className="text-gray-600">{label}</span>
    <span className="text-gray-800">{value || "N/A"}</span>
  </div>
);

const PlatformCard = ({ platform, stats }) => {
  if (!stats) return null;

  const platformDetails = {
    LeetCode: {
      logo: "/images/leetcode.png",
      bgGradient: "from-yellow-400 to-orange-500",
      textColor: "text-yellow-700",
    },
    Codeforces: {
      logo: "/images/codeforces.jpg",
      bgGradient: "from-blue-400 to-indigo-600",
      textColor: "text-blue-700",
    },
    Codechef: {
      logo: "/images/codechef.jpg",
      bgGradient: "from-purple-500 to-pink-500",
      textColor: "text-purple-700",
    },
  };

  const details = platformDetails[platform] || {};
  const { logo, bgGradient, textColor } = details;

  const totalProblems =
    (stats.easyCount || 0) + (stats.mediumCount || 0) + (stats.hardCount || 0);

  const getPercentage = (count) =>
    totalProblems > 0 ? ((count || 0) / totalProblems) * 100 : 0;

  return (
    <div className="rounded-xl shadow-lg bg-white overflow-hidden transition hover:shadow-xl">
      {/* Header Section */}
      <div
        className={`p-4 bg-gradient-to-r ${bgGradient} flex items-center justify-between`}
      >
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt={`${platform} Logo`}
            className="h-8 w-8 rounded-lg shadow-md"
          />
          <h2 className="text-lg font-bold text-white">{platform}</h2>
        </div>
        {stats.rating && (
          <span className="text-sm font-semibold text-white bg-black/30 px-2 py-1 rounded-md">
            Rating: {stats.rating}
          </span>
        )}
      </div>

      {/* Stats Section */}
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <StatItem label="Total Solved" value={stats.solvedCount} />
          <StatItem label="Best Rating" value={stats.highestRating} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <StatItem label="Global Rank" value={stats.globalRank} />
          <StatItem label="Country Rank" value={stats.countryRank} />
        </div>
      </div>

      {/* Problem Distribution */}
      <div className="p-4 border-t space-y-2">
        <h3 className="text-sm font-semibold text-gray-700">Problem Distribution</h3>
        {["Easy", "Medium", "Hard"].map((level, index) => {
          const count =
            level === "Easy"
              ? stats.easyCount
              : level === "Medium"
              ? stats.mediumCount
              : stats.hardCount;
          const percentage = getPercentage(count).toFixed(1);

          return (
            <div key={index} className="space-y-1">
              <div className="flex justify-between text-sm items-center">
                <span className="text-gray-500">{level}</span>
                <span className="text-gray-700 font-medium">
                  {count || 0} ({percentage}%)
                </span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full">
                <div
                  className={`h-full bg-${bgGradient.split("-")[1]} rounded-full`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlatformCard;
