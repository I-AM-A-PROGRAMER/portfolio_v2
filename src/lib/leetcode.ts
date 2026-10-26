export interface LeetCodeStats {
  username: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
  isFallback: boolean;
}

// Deterministic last-known-good fallback data per SRS.md §7 & PHASES.md Phase 5
export const FALLBACK_LEETCODE_STATS: LeetCodeStats = {
  username: 'RiyoSup',
  totalSolved: 168,
  totalQuestions: 3300,
  easySolved: 74,
  totalEasy: 830,
  mediumSolved: 78,
  totalMedium: 1720,
  hardSolved: 16,
  totalHard: 750,
  acceptanceRate: 64.2,
  ranking: 284120,
  contributionPoints: 120,
  reputation: 0,
  isFallback: true,
};

/**
 * Fetches LeetCode statistics using community proxy with daily caching (86400s).
 * Strictly isolated with comprehensive error boundaries to avoid affecting any other section.
 */
export async function getLeetCodeStats(username: string = 'RiyoSup'): Promise<LeetCodeStats> {
  // Normalize username
  const cleanUsername = username.trim() || 'RiyoSup';

  // Primary endpoint: alfagov/leetcode-api or similar community proxy
  // Secondary endpoint: leetcode-stats-api.herokuapp.com
  const endpoints = [
    `https://leetcode-stats-api.herokuapp.com/${cleanUsername}`,
    `https://alfa-leetcode-api.onrender.com/userProfile/${cleanUsername}`,
  ];

  for (const endpoint of endpoints) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000); // 4s timeout

      const res = await fetch(endpoint, {
        signal: controller.signal,
        next: { revalidate: 86400 }, // Daily caching per Phase 5 spec
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        continue;
      }

      const data = await res.json();

      // Normalize format 1: leetcode-stats-api
      if (data && data.status === 'success') {
        return {
          username: cleanUsername,
          totalSolved: data.totalSolved ?? FALLBACK_LEETCODE_STATS.totalSolved,
          totalQuestions: data.totalQuestions ?? FALLBACK_LEETCODE_STATS.totalQuestions,
          easySolved: data.easySolved ?? FALLBACK_LEETCODE_STATS.easySolved,
          totalEasy: data.totalEasy ?? FALLBACK_LEETCODE_STATS.totalEasy,
          mediumSolved: data.mediumSolved ?? FALLBACK_LEETCODE_STATS.mediumSolved,
          totalMedium: data.totalMedium ?? FALLBACK_LEETCODE_STATS.totalMedium,
          hardSolved: data.hardSolved ?? FALLBACK_LEETCODE_STATS.hardSolved,
          totalHard: data.totalHard ?? FALLBACK_LEETCODE_STATS.totalHard,
          acceptanceRate: Number(data.acceptanceRate ?? FALLBACK_LEETCODE_STATS.acceptanceRate),
          ranking: data.ranking ?? FALLBACK_LEETCODE_STATS.ranking,
          contributionPoints: data.contributionPoints ?? FALLBACK_LEETCODE_STATS.contributionPoints,
          reputation: data.reputation ?? FALLBACK_LEETCODE_STATS.reputation,
          isFallback: false,
        };
      }

      // Normalize format 2: alfa-leetcode-api
      if (data && (data.totalSolved !== undefined || data.matchedUser)) {
        return {
          username: cleanUsername,
          totalSolved: data.totalSolved ?? FALLBACK_LEETCODE_STATS.totalSolved,
          totalQuestions: data.totalQuestions ?? FALLBACK_LEETCODE_STATS.totalQuestions,
          easySolved: data.easySolved ?? FALLBACK_LEETCODE_STATS.easySolved,
          totalEasy: data.totalEasy ?? FALLBACK_LEETCODE_STATS.totalEasy,
          mediumSolved: data.mediumSolved ?? FALLBACK_LEETCODE_STATS.mediumSolved,
          totalMedium: data.totalMedium ?? FALLBACK_LEETCODE_STATS.totalMedium,
          hardSolved: data.hardSolved ?? FALLBACK_LEETCODE_STATS.hardSolved,
          totalHard: data.totalHard ?? FALLBACK_LEETCODE_STATS.totalHard,
          acceptanceRate: Number(data.acceptanceRate ?? FALLBACK_LEETCODE_STATS.acceptanceRate),
          ranking: data.ranking ?? FALLBACK_LEETCODE_STATS.ranking,
          contributionPoints: data.contributionPoints ?? FALLBACK_LEETCODE_STATS.contributionPoints,
          reputation: data.reputation ?? FALLBACK_LEETCODE_STATS.reputation,
          isFallback: false,
        };
      }
    } catch {
      // Intentionally silent fallback - LeetCode is prone to rate limits / cold starts
      continue;
    }
  }

  // Graceful degradation fallback
  return {
    ...FALLBACK_LEETCODE_STATS,
    username: cleanUsername,
    isFallback: true,
  };
}
