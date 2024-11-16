// /utils/platformAPI.js

// API fetch for LeetCode
export async function fetchLeetCodeStats(username) {
    const response = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${username}`);
    const data = await response.json();

    return {
      platform: "LeetCode",
      username,
      solvedCount: data.totalSolved.toString(),
      rating: data.contributionPoint ? data.contributionPoint.toString() : null,
      globalRank: data.ranking ? data.ranking.toString() : null,
      easyCount: data.easySolved ? data.easySolved.toString() : "0",
      mediumCount: data.mediumSolved ? data.mediumSolved.toString() : "0",
      hardCount: data.hardSolved ? data.hardSolved.toString() : "0",
      lastUpdated: new Date().toISOString(), // Capture the current timestamp
    };
}
