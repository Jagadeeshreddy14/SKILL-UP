import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { username } = await req.json();
    
    const query = `
      query userProfilePublicProfile($username: String!) {
        matchedUser(username: $username) {
          submitStats {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
          profile {
            ranking
            reputation
            solutionCount
          }
        }
        userContestRanking(username: $username) {
          rating
          attendedContestsCount
          globalRanking
        }
      }
    `;

    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com',
      },
      body: JSON.stringify({
        query,
        variables: { username }
      })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    const { matchedUser, userContestRanking } = data.data;

    if (!matchedUser) {
      throw new Error('User not found');
    }

    const stats = {
      problemStats: {
        total: matchedUser.submitStats?.acSubmissionNum?.[0]?.count || 0,
        easy: matchedUser.submitStats?.acSubmissionNum?.[1]?.count || 0,
        medium: matchedUser.submitStats?.acSubmissionNum?.[2]?.count || 0,
        hard: matchedUser.submitStats?.acSubmissionNum?.[3]?.count || 0
      },
      contestStats: {
        rating: userContestRanking?.rating || 0,
        globalRanking: userContestRanking?.globalRanking || 0,
        contestsAttended: userContestRanking?.attendedContestsCount || 0
      },
      acceptance: {
        totalSolved: matchedUser.submitStats?.acSubmissionNum?.[0]?.count || 0,
        totalQuestions: matchedUser.profile?.solutionCount || 0
      }
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}