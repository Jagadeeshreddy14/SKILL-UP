import { pgTable, serial, text, varchar, date } from "drizzle-orm/pg-core";


// ProfileData table schema for storing user login details and profile data
export const ProfileData = pgTable('ProfileData', {
  id: serial('id').primaryKey(),
  primaryEmail: varchar('primaryEmail').notNull(),  // User's primary email
  name: varchar('name').notNull(),                  // Full name
  clerkId: varchar('clerkId'), // clerk user id
  dateOfBirth: date('dateOfBirth'),                 // Date of birth (optional)
  leetCode: varchar('leetCode'),                    // Username on LeetCode
  codeforces: varchar('codeforces'),                // Username on Codeforces
  codechef: varchar('codechef'),                // Username on Codechef
  createdAt: varchar('createdAt'),                  // Optional field for record creation timestamp
});
