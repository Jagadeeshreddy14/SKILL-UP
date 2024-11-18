// /utils/platformAPI.js

// API fetch for LeetCode
export async function fetchLeetCodeStats(username) {
    const response = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`);
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
      totalquestions: data.totalQuestions ? data.totalQuestions.toString() : "0",
      totaleasy: data.totalEasy ? data.totalEasy.toString() : "0",
      totalmedium: data.totalMedium ? data.totalMedium.toString() : "0",
      totalhard: data.totalHard ? data.totalHard.toString() : "0",
      lastUpdated: new Date().toISOString(), // Capture the current timestamp
    };
}
