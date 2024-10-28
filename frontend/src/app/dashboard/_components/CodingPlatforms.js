// components/CodingPlatforms.js
import React, { useState, useEffect } from 'react';
async function fetchLeetCodeStats(username) {
    const response = await fetch(`https://leetcode.com/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
          }
        `,
        variables: { username }
      }),
    });
    const data = await response.json();
    const acSubmissions = data?.data?.matchedUser?.submitStats?.acSubmissionNum || [];
    return {
      totalSolved: acSubmissions.reduce((acc, cur) => acc + cur.count, 0),
      easySolved: acSubmissions.find(item => item.difficulty === 'EASY')?.count || 0,
      mediumSolved: acSubmissions.find(item => item.difficulty === 'MEDIUM')?.count || 0,
      hardSolved: acSubmissions.find(item => item.difficulty === 'HARD')?.count || 0,
    };
  }
  
  async function fetchCodeChefStats(username) {
    // Mock data for illustration; CodeChef API requires authentication
    return {
      rating: 1700,
      contestsParticipated: 15,
    };
  }
  
  async function fetchCodeForcesStats(username) {
    const response = await fetch(`https://codeforces.com/api/user.info?handles=${username}`);
    const data = await response.json();
    const user = data?.result[0];
    return {
      rating: user?.rating || 0,
      maxRating: user?.maxRating || 0,
      contests: user?.contestRating || 0,
    };
  }
  
function CodingPlatforms({ userData }) {
  const [platformStats, setPlatformStats] = useState({
    leetcode: null,
    codechef: null,
    codeforces: null,
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const leetCodeData = await fetchLeetCodeStats(userData.leetcode);
        const codeChefData = await fetchCodeChefStats(userData.codechef);
        const codeForcesData = await fetchCodeForcesStats(userData.codeforces);

        setPlatformStats({
          leetcode: leetCodeData,
          codechef: codeChefData,
          codeforces: codeForcesData,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    }

    fetchStats();
  }, [userData]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Coding Platform Statistics</h3>
      
      {/* LeetCode Stats */}
      {platformStats.leetcode && (
        <div className="p-2 mb-3 bg-yellow-100 rounded-lg">
          <h4 className="text-md font-bold">LeetCode</h4>
          <p>Total Solved: {platformStats.leetcode.totalSolved}</p>
          <p>Easy: {platformStats.leetcode.easySolved}</p>
          <p>Medium: {platformStats.leetcode.mediumSolved}</p>
          <p>Hard: {platformStats.leetcode.hardSolved}</p>
        </div>
      )}

      {/* CodeChef Stats */}
      {platformStats.codechef && (
        <div className="p-2 mb-3 bg-blue-100 rounded-lg">
          <h4 className="text-md font-bold">CodeChef</h4>
          <p>Rating: {platformStats.codechef.rating}</p>
          <p>Contests Participated: {platformStats.codechef.contestsParticipated}</p>
        </div>
      )}

      {/* CodeForces Stats */}
      {platformStats.codeforces && (
        <div className="p-2 mb-3 bg-green-100 rounded-lg">
          <h4 className="text-md font-bold">CodeForces</h4>
          <p>Rating: {platformStats.codeforces.rating}</p>
          <p>Max Rating: {platformStats.codeforces.maxRating}</p>
          <p>Contests: {platformStats.codeforces.contests}</p>
        </div>
      )}
    </div>
  );
}

export default CodingPlatforms;
