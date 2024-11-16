"use client";
import { useEffect, useState } from "react";
import UserProfile from "./_components/UserProfile";
import Statistics from "./_components/Statistics";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skeleton from "react-loading-skeleton";
import { useUser } from "@clerk/clerk-react";
import TotalStatsCard from "./_components/TotalStatsCard";

export default function Dashboard() {
  const { user } = useUser();
  const clerkUserId = user?.id;
  const [profileData, setProfileData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isNew, setIsNew] = useState(false);

  const fetchProfileData = async () => {
    try {
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clerkId: clerkUserId }),
      });
      const data = await response.json();

      if (response.status === 200) {
        if (data.isNew) {
          setIsNew(true);
          toast.success("Welcome, new user! Please fill in your profile.");
        }
        setProfileData(data.profile);
      } else {
        throw new Error(data.error || "Failed to fetch profile data");
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
      toast.error("Failed to fetch profile data. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchStatsData = async () => {
    try {
      const response = await fetch("/api/stats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clerkId: clerkUserId }),
      });
      const data = await response.json();

      if (response.status === 200) {
        setUserData(data.userStats || []);
      } else {
        throw new Error(data.error || "Failed to fetch stats data");
      }
    } catch (error) {
      console.error("Error fetching stats data:", error);

    }
  };

  useEffect(() => {
    if (clerkUserId) fetchProfileData();
    fetchStatsData();
  }, [clerkUserId]);

  if (isLoading) {
    return (
      <div className="container mx-auto p-4">
        <Skeleton height={200} />
        <Skeleton height={200} />
        <Skeleton height={200} />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
   

      {/* Profile Card - Left Side */}
      <div className="lg:col-span-1 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        {profileData ? (
          <UserProfile profileData={profileData} />
        ) : (
          <div className="p-4 bg-gray-100 rounded-lg text-gray-500">
            No profile data available
          </div>
        )}
      </div>

      {/* Right Side */}
      <div className="lg:col-span-2 grid gap-6">
        {/* Total Stats Card - Top */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {userData ? (
            <TotalStatsCard stats={userData} />
          ) : (
            <div className="p-4 bg-gray-100 rounded-lg text-gray-500">
              No platform stats available
            </div>
          )}
        </div>

        {/* Statistics Card - Below */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {userData ? (
            <Statistics stats={userData} />
          ) : (
            <div className="p-4 bg-gray-100 rounded-lg text-gray-500">
              No platform stats available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
