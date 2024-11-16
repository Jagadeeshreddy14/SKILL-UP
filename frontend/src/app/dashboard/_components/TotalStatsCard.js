import React from "react";

const TotalStatsCard = ({ stats }) => {
  // Ensure stats is always an array
  const statsArray = Array.isArray(stats) ? stats : [];

  // Calculate total stats
  const totalStats = statsArray.reduce(
    (acc, platform) => {
      acc.totalSolved += parseInt(platform.solvedCount || 0, 10);
      acc.easyCount += parseInt(platform.easyCount || 0, 10);
      acc.mediumCount += parseInt(platform.mediumCount || 0, 10);
      acc.hardCount += parseInt(platform.hardCount || 0, 10);
      return acc;
    },
    { totalSolved: 0, easyCount: 0, mediumCount: 0, hardCount: 0 }
  );

  return (
    <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg flex flex-col items-center space-y-4 text-center">
      <h2 className="text-2xl font-bold">Total Stats</h2>
      <p className="text-lg">All Platforms Combined</p>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex flex-col items-center">
          <span className="font-semibold text-lg">{totalStats.totalSolved}</span>
          <span>Total Solved</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-lg">{totalStats.easyCount}</span>
          <span>Easy</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-lg">{totalStats.mediumCount}</span>
          <span>Medium</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold text-lg">{totalStats.hardCount}</span>
          <span>Hard</span>
        </div>
      </div>
    </div>
  );
};

export default TotalStatsCard;
