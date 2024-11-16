// pages/api/user.js
import Data from "./data";

export default async function handler(req, res) {
  try {
    const user = Data; // Adjust query as needed
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user data' });
  }
}
