import { db } from "../../utils/db";
import { CodingPlatformStats } from "../../utils/schema";
import { fetchLeetCodeStats } from "../../utils/platformAPI";
import { eq, and } from "drizzle-orm";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { clerkId, leetCode } = req.body;

    try {
      // Fetch stats for LeetCode
      const leetCodeStats = await fetchLeetCodeStats(leetCode);
      console.log("Fetched LeetCode stats:", leetCodeStats);

      if (!leetCodeStats) {
        throw new Error("Failed to fetch LeetCode stats");
      }

      // Filter only defined properties to avoid issues with null values
      const dataToInsertOrUpdate = {
        ...(leetCodeStats.solvedCount !== undefined && { solvedCount: leetCodeStats.solvedCount || 0 }),
        ...(leetCodeStats.rating !== undefined && { rating: leetCodeStats.rating || 0 }),
        ...(leetCodeStats.highestRating !== undefined && { highestRating: leetCodeStats.highestRating }),
        ...(leetCodeStats.globalRank !== undefined && { globalRank: leetCodeStats.globalRank }),
        ...(leetCodeStats.countryRank !== undefined && { countryRank: leetCodeStats.countryRank }),
        ...(leetCodeStats.easyCount !== undefined && { easyCount: leetCodeStats.easyCount || 0 }),
        ...(leetCodeStats.mediumCount !== undefined && { mediumCount: leetCodeStats.mediumCount || 0 }),
        ...(leetCodeStats.hardCount !== undefined && { hardCount: leetCodeStats.hardCount || 0 }),
        lastUpdated: new Date().toISOString(),
      };

      console.log("Data to insert or update:", dataToInsertOrUpdate);

      // Check for an existing record
      const existingRecord = await db
        .select()
        .from(CodingPlatformStats)
        .where(
          and(
            eq(CodingPlatformStats.clerkId, clerkId),
            eq(CodingPlatformStats.platform, "LeetCode")
          )
        )
        .limit(1);

      if (existingRecord.length > 0) {
        // Update the existing record
        await db
          .update(CodingPlatformStats)
          .set(dataToInsertOrUpdate)
          .where(
            and(
              eq(CodingPlatformStats.clerkId, clerkId),
              eq(CodingPlatformStats.platform, "LeetCode")
            )
          );
      } else {
        // Insert a new record
        await db
          .insert(CodingPlatformStats)
          .values({
            clerkId,
            platform: "LeetCode",
            ...dataToInsertOrUpdate,
          });
      }

      res.status(200).json({ message: "Platform stats updated/inserted successfully!" });
    } catch (error) {
      console.error("Database operation failed:", error.message, error.stack);
      res.status(500).json({ error: `Database operation failed: ${error.message}` });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}