import React from "react";
import { Trophy, Code } from "lucide-react";

const StatItem = ({ icon: Icon, label, value, color }) => (
  <div className="group relative p-4 bg-white/10 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
    <div className="absolute -top-3 -left-3 flex items-center justify-center w-8 h-8 bg-white/20 rounded-full group-hover:bg-white/30">
      <Icon className={`w-5 h-5 ${color}`} />
    </div>
    <div className="mt-3">
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-sm text-white/70">{label}</p>
    </div>
  </div>
);

const CPStatsCard = ({ stats }) => {
  const statsArray = Array.isArray(stats) ? stats : [];
  
  const cfStats = statsArray.find(s => s.platform === 'Codeforces');
  const ccStats = statsArray.find(s => s.platform === 'CodeChef');

  const totalSolved = parseInt(cfStats?.solvedCount || 0, 10) + 
                     parseInt(ccStats?.solvedCount || 0, 10);

  return (
    <div className="max-w-3xl p-6 rounded-xl bg-gradient-to-br from-blue-700 via-indigo-700 to-indigo-900 text-white shadow-xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-semibold">Competive Programming Stats</h1>
          <p className="text-sm text-white/70">CodeForces + CodeChef</p>
        </div>
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white/20 shadow-lg">
          <Trophy className="w-8 h-8 text-yellow-300" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatItem
          icon={Code}
          label="CodeForces Problems"
          value={cfStats?.solvedCount || "0"}
          color="text-red-400"
        />
        <StatItem
          icon={Code}
          label="CodeChef Problems"
          value={ccStats?.solvedCount || "0"}
          color="text-yellow-400"
        />
        <StatItem
          icon={Trophy}
          label="Total CP Problems"
          value={totalSolved}
          color="text-green-400"
        />
      </div>
    </div>
  );
};

export default CPStatsCard;