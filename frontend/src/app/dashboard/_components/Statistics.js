import React from "react";
import PlatformCard from "./PlatformCard.js";

const Statistics = ({ stats }) => {
  console.log("Stats from statistics:", stats);

  // Handle case where stats is a single object or empty
  const statsArray = Array.isArray(stats) ? stats : stats ? [stats] : [];

  const platforms = ["LeetCode", "Codeforces", "Codechef"];
  const availableStats = statsArray.filter((stat) =>
    platforms.includes(stat.platform)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {availableStats.length > 0 ? (
        platforms.map((platform) => {
          const platformStats = statsArray.find(
            (stat) => stat.platform === platform
          );
          return platformStats ? (
            <PlatformCard
              key={platform}
              platform={platform}
              stats={platformStats}
            />
          ) : (
            <div
              key={platform}
              className="p-6 bg-gray-100 rounded-lg shadow-lg flex items-center justify-center text-gray-500"
            >
              No data available for {platform}.
            </div>
          );
        })
      ) : (
        <div className="col-span-1 md:col-span-3 text-center text-gray-500">
          No statistics available at the moment.
        </div>
      )}
    </div>
  );
};

export default Statistics;
