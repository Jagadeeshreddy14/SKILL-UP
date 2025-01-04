import React from 'react';
import { AlertCircle, TrendingUp, Award, Calendar, Globe2, Flag, Code } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";

const StatItem = ({ label, value, icon: Icon }) => (
  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
    <div className="flex items-center gap-2">
      <div className="p-2 rounded-lg bg-black/20 border border-white/10">
        <Icon className="w-4 h-4 text-white/80" />
      </div>
      <span className="text-sm font-medium text-white/70">{label}</span>
    </div>
    <span className="text-sm font-bold text-white">{value || "N/A"}</span>
  </div>
);

const PlatformCard = ({ platform, stats }) => {
  if (!stats) return null;

  const platformDetails = {
    LeetCode: {
      logo: "/images/leetcode.png",
      bgGradient: "from-yellow-900 to-yellow-700",
      categories: {
        Easy: { color: "bg-emerald-500" },
        Medium: { color: "bg-amber-500" },
        Hard: { color: "bg-rose-500" }
      }
    },
    Codeforces: {
      logo: "/images/codeforces.jpg",
      bgGradient: "from-blue-900 to-blue-700",
      totalOnly: true
    },
    CodeChef: {
      logo: "/images/codechef.jpg",
      bgGradient: "from-purple-900 to-purple-700",
      totalOnly: true
    },
    GeeksforGeeks: {
      logo: "/images/gfg.png",
      bgGradient: "from-green-900 to-green-700",
      categories: {
        Easy: { color: "bg-emerald-500" },
        Medium: { color: "bg-amber-500" },
        Hard: { color: "bg-rose-500" },
        Fundamental: { color: "bg-blue-500" }
      }
    }
  };

  const details = platformDetails[platform] || {
    bgGradient: "from-gray-900 to-gray-700"
  };
  
  const { logo, bgGradient, categories, totalOnly } = details;

  const calculateTotalSolved = () => {
    if (totalOnly) return parseInt(stats.solvedCount) || 0;
    
    if (platform === "GeeksforGeeks") {
      return parseInt(stats.easyCount || 0) + 
             parseInt(stats.mediumCount || 0) + 
             parseInt(stats.hardCount || 0) +
             parseInt(stats.fundamentalCount || 0);
    }
    return parseInt(stats.easyCount || 0) + 
           parseInt(stats.mediumCount || 0) + 
           parseInt(stats.hardCount || 0);
  };

  const totalSolved = calculateTotalSolved();

  return (
    <div className="rounded-2xl overflow-hidden bg-gray-900 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-white/20">
      <div className="lg:flex">
        <div className={`lg:w-1/4 p-4 bg-gradient-to-br ${bgGradient} relative overflow-hidden`}>
          <div className="flex lg:flex-col items-center lg:items-start gap-3 relative z-10">
            <div className="p-2 bg-black/20 backdrop-blur-md rounded-xl border border-white/10">
              <img src={logo} alt={`${platform} Logo`} className="h-10 w-10 rounded-lg" />
            </div>
            <div className="lg:mt-2">
              <h2 className="text-lg lg:text-xl font-bold text-white">{platform}</h2>
              <p className="text-xs text-white/60">{stats.lastUpdated}</p>
            </div>
            {stats.rating && (
              <div className="lg:mt-4 p-3 bg-black/20 rounded-xl border border-white/10 w-full">
                <span className="text-sm text-white/60">Rating</span>
                <span className="block text-2xl font-bold text-white">{stats.rating}</span>
              </div>
            )}
          </div>
        </div>

        <div className="lg:w-3/4 p-4 bg-black/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <StatItem label="Problems" value={totalSolved} icon={Code} />
            <StatItem label="Contests" value={stats.totalcontest} icon={Award} />
            <StatItem label="Best" value={stats.highestRating} icon={TrendingUp} />
            <StatItem label="Rank" value={stats.globalRank} icon={Globe2} />
          </div>

          {!totalOnly && categories && (
            <div className="mt-4 pt-4 border-t border-white/10">
              <h3 className="text-sm font-medium text-white/70 mb-3">Problem Distribution</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(categories).map(([level, { color }]) => {
                  const count = level === "Fundamental" 
                    ? parseInt(stats.fundamentalCount || 0)
                    : parseInt(stats[`${level.toLowerCase()}Count`] || 0);
                  const percentage = totalSolved > 0 ? (count / totalSolved) * 100 : 0;
                  
                  return (
                    <div key={level} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white/60">{level}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white">{count}</span>
                          <span className="text-xs text-white/40">({percentage.toFixed(1)}%)</span>
                        </div>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
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
  <div className="w-full rounded-2xl bg-gray-900 border border-white/10 p-8">
    <div className="flex flex-col items-center justify-center text-center space-y-4">
      <AlertCircle className="h-12 w-12 text-white/40" />
      <div className="space-y-2">
        <h3 className="font-semibold text-lg text-white">No Data Available</h3>
        <p className="text-sm text-white/60">{message}</p>
      </div>
    </div>
  </div>
);

const PlatfromCards = ({ stats }) => {
  const platforms = [
    { id: "leetcode", name: "LeetCode" },
    { id: "geeksforgeeks", name: "GeeksforGeeks" },
    { id: "codeforces", name: "Codeforces" },
    { id: "codechef", name: "CodeChef" }
  ];

  const statsArray = Array.isArray(stats) ? stats : stats ? [stats] : [];
  const availableStats = statsArray.filter(stat => 
    platforms.map(p => p.name).includes(stat.platform)
  );

  if (!stats) return <EmptyState message="Connect your coding platforms to see your PlatfromCards" />;
  if (availableStats.length === 0) return <EmptyState message="No platform data found. Try connecting some platforms." />;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Platform PlatfromCards</h2>
          <p className="text-white/60">
            {availableStats.length} of {platforms.length} platforms connected
          </p>
        </div>
      </div>

      <div className="grid gap-6">
        {platforms.map(({ id, name }) => (
          <PlatformCard
            key={id}
            platform={name}
            stats={statsArray.find(stat => stat.platform === name)}
          />
        ))}
      </div>

      {availableStats.length > 0 && availableStats.length < platforms.length && (
        <Alert className="bg-white/5 border-white/10 text-white">
          <AlertDescription>
            💡 Connect more coding platforms to track all your progress in one place.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default PlatfromCards;