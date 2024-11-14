// pages/dashboard.js
"use client";
import { useEffect, useState } from "react";
import UserProfile from "./_components/UserProfile";
import Statistics from "./_components/Statistics";
import ProblemCategories from "./_components/ProblemCategories";
import Data from "../../../pages/api/data";
export default function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await Data;
      setUserData(data);
    }
    fetchData();
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4 grid gap-4 grid-cols-1 md:grid-cols-3">
      <UserProfile user={userData} />
      <Statistics stats={userData} />
      <ProblemCategories problems={userData.problemsSolved} />
    </div>
  );
}
