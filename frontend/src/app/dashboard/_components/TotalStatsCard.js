import React, { useState } from "react";
import { Trophy, Circle, AlertTriangle, Target, Info } from "lucide-react";

const StatItem = ({ icon: Icon, label, value, color, tooltip }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="group relative p-4 bg-white/10 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
      <div className="absolute -top-3 -left-3 flex items-center justify-center w-8 h-8 bg-white/20 rounded-full group-hover:bg-white/30">
        <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <div className="mt-3">
        <div className="flex items-center gap-2">
          <p className="text-2xl font-bold text-white">{value.toLocaleString()}</p>
          {tooltip && (
            <div className="relative">
              <Info 
                className="w-4 h-4 text-white/70 cursor-help"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              />
              {showTooltip && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap">
                  {tooltip}
                </div>
              )}
            </div>
          )}
        </div>
        <p className="text-sm text-white/70">{label}</p>
      </div>
    </div>
  );
};

const TotalStatsCard = ({ stats }) => {
  const statsArray = Array.isArray(stats) ? stats : [];

  const totalStats = statsArray.reduce(
    (acc, platform) => {
      acc.totalSolved += parseInt(platform.solvedCount || 0, 10);
      acc.easyCount += parseInt(platform.easyCount || 0, 10);
      acc.mediumCount += parseInt(platform.mediumCount || 0, 10);
      acc.hardCount += parseInt(platform.hardCount || 0, 10);
      acc.fundamentalCount = parseInt(
        statsArray.find(s => s.platform === 'GeeksforGeeks')?.fundamentalCount || 0,
        10
      );
      acc.totalDSASolved = parseInt(
        statsArray.find(s => s.platform === 'LeetCode')?.solvedCount || 0,
        10
      ) + parseInt(
        statsArray.find(s => s.platform === 'GeeksforGeeks')?.solvedCount || 0,
        10
      );
      return acc;
    },
    { totalSolved: 0, easyCount: 0, mediumCount: 0, hardCount: 0, fundamentalCount: 0, totalDSASolved: 0 }
  );

  return (
    <div className="max-w-3xl p-6 rounded-xl bg-gradient-to-br from-indigo-700 via-purple-700 to-purple-900 text-white shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-semibold">DSA Stats</h1>
          <p className="text-sm text-white/70">LeetCode + GeeksforGeeks combined</p>
        </div>
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white/20 shadow-lg">
          <Trophy className="w-8 h-8 text-yellow-300" />
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-white/70">Total DSA Problems Solved</span>
          <span className="text-2xl font-bold text-white">
            {totalStats.totalDSASolved.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatItem
          icon={Circle}
          label="Easy"
          value={totalStats.easyCount}
          color="text-green-400"
        />
        <StatItem
          icon={AlertTriangle}
          label="Medium"
          value={totalStats.mediumCount}
          color="text-orange-400"
        />
        <StatItem
          icon={Target}
          label="Hard"
          value={totalStats.hardCount}
          color="text-red-400"
        />
        <StatItem
          icon={Info}
          label="Fundamentals"
          value={totalStats.fundamentalCount}
          color="text-blue-400"
          tooltip="GFG Fundamental Problems"
        />
      </div>
    </div>
  );
};

export default TotalStatsCard;