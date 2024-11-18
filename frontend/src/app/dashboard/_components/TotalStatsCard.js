import React from "react";
import { Trophy, Circle, AlertTriangle, Target } from "lucide-react";

const StatItem = ({ icon: Icon, label, value, color }) => (
  <div className="group relative p-4 bg-white/10 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
    <div className="absolute -top-3 -left-3 flex items-center justify-center w-8 h-8 bg-white/20 rounded-full group-hover:bg-white/30 transition duration-300">
      <Icon className={`w-5 h-5 ${color}`} />
    </div>
    <div className="mt-3">
      <p className="text-2xl font-bold text-white">{value.toLocaleString()}</p>
      <p className="text-sm text-white/70">{label}</p>
    </div>
  </div>
);

const TotalStatsCard = ({ stats }) => {
  const statsArray = Array.isArray(stats) ? stats : [];

  const totalStats = statsArray.reduce(
    (acc, platform) => {
      acc.totalSolved += parseInt(platform.solvedCount || 0, 10);
      acc.totalQuestions += parseInt(platform.totalquestions || 0, 10);
      acc.easyCount += parseInt(platform.easyCount || 0, 10);
      acc.mediumCount += parseInt(platform.mediumCount || 0, 10);
      acc.hardCount += parseInt(platform.hardCount || 0, 10);
      return acc;
    },
    { totalSolved: 0, totalQuestions: 0, easyCount: 0, mediumCount: 0, hardCount: 0 }
  );

  const calculateProgress = () => {
    return totalStats.totalQuestions > 0 
      ? (totalStats.totalSolved / totalStats.totalQuestions) * 100 
      : 0;
  };

  // Ensure progress value is bounded between 0 and 100
  const progressValue = Math.min(100, Math.max(0, calculateProgress()));

  return (
    <div className="max-w-3xl p-6 rounded-xl bg-gradient-to-br from-indigo-700 via-purple-700 to-purple-900 text-white shadow-xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-semibold">Total Stats</h1>
          <p className="text-sm text-white/70">Combined achievements summary</p>
        </div>
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white/20 shadow-lg">
          <Trophy className="w-8 h-8 text-yellow-300" />
        </div>
      </div>

      {/* Progress Section */}
      <div className="mb-8">
        {/* Progress Text */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-white/70">Overall Progress</span>
          <span className="text-sm font-medium text-white">
            {progressValue.toFixed(1)}%
          </span>
        </div>
        
        {/* Progress Bar Container */}
        <div className="relative">
          {/* Background Bar */}
          <div className="h-3 w-full bg-white/10 rounded-full">
            {/* Filled Bar */}
            <div 
              className="absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-1000 ease-out"
              style={{ width: `${progressValue}%` }}
            />
          </div>
          
          {/* Progress Details */}
          <div className="mt-2 flex justify-between text-xs text-white/70">
            <span>{totalStats.totalSolved.toLocaleString()} solved</span>
            <span>out of {totalStats.totalQuestions.toLocaleString()} total</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatItem
          icon={Trophy}
          label="Total Solved"
          value={totalStats.totalSolved}
          color="text-yellow-400"
        />
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
      </div>
    </div>
  );
};

export default TotalStatsCard;