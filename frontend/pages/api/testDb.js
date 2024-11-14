// pages/api/testDb.js
import { db } from "../../utils/db";

export default async function handler(req, res) {
  try {
    const test = await db.execute(`SELECT NOW()`);
    res.status(200).json({ message: "Database connection successful!", test });
  } catch (error) {
    console.error("Database connection failed:", error.message);
    res.status(500).json({ error: `Database operation failed: ${error.message}` });
  }
}
