import React from 'react';
import { AlertCircle, TrendingUp, Award, Calendar, Globe2, Flag, Code } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const StatItem = ({ label, value, icon: Icon }) => (
  <div className="flex items-center justify-between p-2 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors">
    <div className="flex items-center gap-1.5">
      <div className="p-1.5 rounded-md bg-white shadow-sm">
        <Icon className="w-3.5 h-3.5 text-gray-600" />
      </div>
      <span className="text-xs font-medium text-gray-600">{label}</span>
    </div>
    <span className="text-xs font-semibold text-gray-800">{value || "N/A"}</span>
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
      categories: {
        Easy: { color: "bg-green-500" },
        Medium: { color: "bg-orange-500" },
        Hard: { color: "bg-red-500" }
      }
    },
    Codeforces: {
      logo: "/images/codeforces.jpg",
      bgGradient: "from-blue-400 via-blue-500 to-indigo-600",
      barColor: "bg-blue-500",
      textColor: "text-blue-700",
      totalOnly: true
    },
    CodeChef: {
      logo: "/images/codechef.jpg",
      bgGradient: "from-purple-400 via-purple-500 to-pink-500",
      barColor: "bg-purple-500",
      textColor: "text-purple-700",
      totalOnly: true
    },
    GeeksforGeeks: {
      logo: "/images/gfg.png",
      bgGradient: "from-green-400 via-green-500 to-green-600",
      barColor: "bg-green-500",
      textColor: "text-green-700",
      categories: {
        Easy: { color: "bg-green-500" },
        Medium: { color: "bg-orange-500" },
        Hard: { color: "bg-red-500" },
        Fundamental: { color: "bg-blue-500" }
      }
    }
  };

  const details = platformDetails[platform] || {
    bgGradient: "from-gray-400 to-gray-600",
    barColor: "bg-gray-500",
    textColor: "text-gray-700"
  };
  
  const { logo, bgGradient, categories, totalOnly } = details;

  const calculateTotalSolved = () => {
    if (totalOnly) {
      return parseInt(stats.solvedCount) || 0;
    }
    
    if (platform === "GeeksforGeeks") {
      return (
        parseInt(stats.easyCount || 0) + 
        parseInt(stats.mediumCount || 0) + 
        parseInt(stats.hardCount || 0) +
        parseInt(stats.fundamentalCount || 0)
      );
    } else {
      return (
        parseInt(stats.easyCount || 0) + 
        parseInt(stats.mediumCount || 0) + 
        parseInt(stats.hardCount || 0)
      );
    }
  };

  const totalSolved = calculateTotalSolved();

  return (
    <div className="rounded-xl shadow bg-white overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-[1.01] w-full">
      <div className="lg:flex">
        <div className={`lg:w-1/4 p-3 bg-gradient-to-r ${bgGradient} relative overflow-hidden`}>
          <div className="flex lg:flex-col items-center lg:items-start gap-2 relative z-10">
            <div className="p-1.5 bg-white/10 backdrop-blur-md rounded-lg">
              <img
                src={logo}
                alt={`${platform} Logo`}
                className="h-8 w-8 lg:h-10 lg:w-10 rounded-md"
              />
            </div>
            <div className="lg:mt-2">
              <h2 className="text-base lg:text-lg font-bold text-white">{platform}</h2>
              <p className="text-xs text-white/80">Last updated: {stats.lastUpdated}</p>
            </div>
            {stats.rating && (
              <div className="lg:mt-3 flex flex-col items-start">
                <span className="text-xs font-medium text-white/80">Rating</span>
                <span className="text-lg lg:text-xl font-bold text-white">{stats.rating}</span>
              </div>
            )}
          </div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="lg:w-3/4 lg:flex lg:flex-col">
          <div className="p-3">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              <StatItem 
                label="Problems" 
                value={totalSolved}
                icon={Code}
              />
              <StatItem 
                label="Contests" 
                value={stats.totalcontest}
                icon={Award}
              />
              <StatItem 
                label="Best" 
                value={stats.highestRating}
                icon={TrendingUp}
              />
              <StatItem 
                label="Rank" 
                value={stats.globalRank}
                icon={Globe2}
              />
            </div>
          </div>

          {!totalOnly && categories && (
            <div className="p-3 border-t border-gray-100">
              <h3 className="text-xs font-semibold text-gray-800 mb-2">Problem Distribution</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {Object.entries(categories).map(([level, { color }]) => {
                  const count = level === "Fundamental" 
                    ? parseInt(stats.fundamentalCount || 0)
                    : parseInt(stats[`${level.toLowerCase()}Count`] || 0);
                  
                  const percentage = totalSolved > 0 ? (count / totalSolved) * 100 : 0;
                  
                  return (
                    <div key={level} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-600">{level}</span>
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-bold">{count}</span>
                          <span className="text-[10px] text-gray-500">({percentage.toFixed(1)}%)</span>
                        </div>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
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
          )}
        </div>
      </div>
    </div>
  );
};

const EmptyState = ({ message }) => (
  <div className="w-full rounded-xl shadow bg-white p-6">
    <div className="flex flex-col items-center justify-center text-center space-y-4">
      <AlertCircle className="h-12 w-12 text-gray-400" />
      <div className="space-y-2">
        <h3 className="font-semibold text-lg">No Data Available</h3>
        <p className="text-sm text-gray-500">{message}</p>
      </div>
    </div>
  </div>
);

const Statistics = ({ stats }) => {
  const platforms = [
    {
      id: "leetcode",
      name: "LeetCode",
    },
    {
      id: "geeksforgeeks",
      name: "GeeksforGeeks",
    },
    {
      id: "codeforces",
      name: "Codeforces",
    },
    {
      id: "codechef",
      name: "CodeChef",
    }
  ];

  const statsArray = Array.isArray(stats) ? stats : stats ? [stats] : [];
  const availableStats = statsArray.filter((stat) =>
    platforms.map(p => p.name).includes(stat.platform)
  );

  if (!stats) {
    return <EmptyState message="Connect your coding platforms to see your statistics" />;
  }

  if (availableStats.length === 0) {
    return <EmptyState message="No platform data found. Try connecting some platforms." />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Platform Statistics</h2>
          <p className="text-gray-500">
            {availableStats.length} of {platforms.length} platforms connected
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        {platforms.map(({ id, name }) => {
          const platformStats = statsArray.find(
            (stat) => stat.platform === name
          );
          return (
            <PlatformCard
              key={id}
              platform={name}
              stats={platformStats}
            />
          );
        })}
      </div>

      {availableStats.length > 0 && availableStats.length < platforms.length && (
        <Alert>
          <AlertDescription>
            💡 Connect more coding platforms to track all your progress in one place.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default Statistics;