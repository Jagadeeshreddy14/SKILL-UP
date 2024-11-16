"use client";
import { useEffect, useState } from "react";
import UserProfile from "./_components/UserProfile";
import Statistics from "./_components/Statistics";
import { toast } from "react-toastify";
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
      toast.error("Failed to fetch stats data. Please try again later.");
    }
  };

  useEffect(() => {
    if (clerkUserId) {
      Promise.all([fetchProfileData(), fetchStatsData()]);
    }
  }, [clerkUserId]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Skeleton height={400} className="rounded-lg" />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <Skeleton height={200} className="rounded-lg" />
            <Skeleton height={400} className="rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  const NoDataCard = ({ message }) => (
    <div className="p-6 bg-gray-50 rounded-lg text-gray-500 flex items-center justify-center min-h-[200px] border border-gray-100">
      <p className="text-center text-lg">{message}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-2">
        {isNew && (
          <div className="mb-6 p-4 bg-blue-50 text-blue-700 rounded-lg shadow-sm">
            Welcome! Please complete your profile to get started.
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Section */}
          <div className="lg:col-span-1 lg:sticky lg:top-6 lg:self-start">
            {profileData ? (
              <UserProfile profileData={profileData} isEditing={true} />
            ) : (
              <NoDataCard message="No profile data available" />
            )}
          </div>

          {/* Stats Section */}
          <div className="lg:col-span-2 space-y-2">
            <div className="bg-white rounded-xl shadow-sm p-3 transition-all hover:shadow-md">
              {userData ? (
                <TotalStatsCard stats={userData} />
              ) : (
                <NoDataCard message="No platform stats available" />
              )}
            </div>

            <div className="bg-white rounded-xl shadow-sm p-1 transition-all hover:shadow-md">
              {userData ? (
                <Statistics stats={userData} />
              ) : (
                <NoDataCard message="No platform stats available" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}