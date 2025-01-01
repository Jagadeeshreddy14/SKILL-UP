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
      barColor: "bg-yellow-500",
      textColor: "text-yellow-700",
    },
    Codeforces: {
      logo: "/images/codeforces.jpg",
      bgGradient: "from-blue-400 to-indigo-600",
      barColor: "bg-blue-500",
      textColor: "text-blue-700",
    },
    CodeChef: {
      logo: "/images/codechef.jpg",
      bgGradient: "from-purple-500 to-pink-500",
      barColor: "bg-purple-500",
      textColor: "text-purple-700",
    },
    GeeksforGeeks: {
      logo: "/images/gfg.png",
      bgGradient: "from-green-400 to-green-600",
      barColor: "bg-green-500",
      textColor: "text-green-700",
    },
  };

  const details = platformDetails[platform] || {
    bgGradient: "from-gray-400 to-gray-600",
    barColor: "bg-gray-500",
    textColor: "text-gray-700"
  };
  
  const { logo, bgGradient, barColor } = details;

  // Calculate total questions instead of total problems
  const totalQuestions = parseInt(stats.totalquestions || 0, 10);

  // Helper function to safely parse integers
  const safeParseInt = (value) => parseInt(value || 0, 10);

  // Calculate percentages based on total questions
  const getPercentage = (count) => {
    const parsedCount = safeParseInt(count);
    return totalQuestions > 0 ? (parsedCount / totalQuestions) * 100 : 0;
  };

  // Calculate difficulty percentages
  const difficultyStats = {
    Easy: {
      count: safeParseInt(stats.easyCount),
      color: "bg-green-500"
    },
    Medium: {
      count: safeParseInt(stats.mediumCount),
      color: "bg-orange-500"
    },
    Hard: {
      count: safeParseInt(stats.hardCount),
      color: "bg-red-500"
    }
  };

  return (
    <div className="rounded-xl shadow-lg bg-white overflow-hidden transition hover:shadow-xl">
      {/* Header Section */}
      <div className={`p-4 bg-gradient-to-r ${bgGradient} flex items-center justify-between`}>
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
          <StatItem 
            label="Problems Solved" 
            value={`${safeParseInt(stats.solvedCount)} / ${totalQuestions}`} 
          />
          <StatItem label="Best Rating" value={stats.highestRating} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <StatItem label="Global Rank" value={stats.globalRank} />
          <StatItem label="Country Rank" value={stats.countryRank} />
        </div>
      </div>

      {/* Overall Progress */}
      <div className="px-4 pb-2">
        <div className="flex justify-between text-sm items-center mb-1">
          <span className="text-gray-600 font-medium">Overall Progress</span>
          <span className="text-gray-800 font-medium">
            {((safeParseInt(stats.solvedCount) / totalQuestions) * 100).toFixed(1)}%
          </span>
        </div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`h-full ${barColor} transition-all duration-500`}
            style={{ 
              width: `${(safeParseInt(stats.solvedCount) / totalQuestions) * 100}%` 
            }}
          />
        </div>
      </div>

      {/* Problem Distribution */}
      <div className="p-4 border-t space-y-2">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Problem Distribution</h3>
        {Object.entries(difficultyStats).map(([level, { count, color }]) => {
          const percentage = getPercentage(count);
          return (
            <div key={level} className="space-y-1">
              <div className="flex justify-between text-sm items-center">
                <span className="text-gray-500">{level}</span>
                <span className="text-gray-700 font-medium">
                  {count} ({percentage.toFixed(1)}%)
                </span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${color} transition-all duration-500`}
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