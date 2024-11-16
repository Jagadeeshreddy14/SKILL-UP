import { pgTable, serial, varchar, integer, date, timestamp, PgVarchar, PgInteger } from "drizzle-orm/pg-core";

export const ProfileData = pgTable('ProfileData', {
  id: serial('id').primaryKey(),
  primaryEmail: varchar('primaryEmail').notNull(),
  name: varchar('name').notNull(),
  clerkId: varchar('clerkId'),
  dateOfBirth: date('dateOfBirth'),
  leetCode: varchar('leetCode'),
  codeforces: varchar('codeforces'),
  codechef: varchar('codechef'),
  createdAt: varchar('createdAt'),
});

export const CodingPlatformStats = pgTable('CodingPlatformStats', {
  id: serial('id').primaryKey(),
  clerkId: varchar('clerkId').notNull(),
  platform: varchar('platform').notNull(),
  solvedCount: varchar('solvedCount').default(0),
  rating: varchar('rating'),           // Optional field, implicitly nullable
  highestRating: varchar('highestRating'), // Optional field, implicitly nullable
  globalRank: varchar('globalRank'),    // Optional field, implicitly nullable
  countryRank: varchar('countryRank'),  // Optional field, implicitly nullable
  lastUpdated:varchar('lastUpdated'),
  easyCount: varchar('easyCount').default(0),
  mediumCount: varchar('mediumCount').default(0),
  hardCount:varchar('hardCount').default(0),
});
