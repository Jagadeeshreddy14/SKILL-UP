"use client";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useUser } from "@clerk/clerk-react";
import { db } from "../../../utils/db";
import { eq } from "drizzle-orm";
import { ProfileData } from "../../../utils/schema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProfilePage() {
  const { user } = useUser();
  const clerkUserId = user?.id;
  const [profileData, setProfileData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch profile data
  const fetchProfileData = async () => {
    try {
      const userProfile = await db
        .select()
        .from(ProfileData)
        .where(eq(ProfileData.clerkId, clerkUserId))
        .then(([result]) => result);

      if (!userProfile) {
        await db.insert(ProfileData).values({
          primaryEmail: user.primaryEmailAddress?.emailAddress || "",
          name: user.fullName || "",
          clerkId: clerkUserId,
          createdAt: new Date().toISOString(),
          profilePic: user.imageUrl || "",
        });
        setIsNew(true);
        toast.success("Welcome, new user! Please fill in your details.");
      } else {
        setProfileData(userProfile);
       
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
      toast.error("Failed to fetch profile data. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (clerkUserId) fetchProfileData();
  }, [clerkUserId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Save profile info only
  const handleSave = async () => {
    toast.info("Saving profile information...");
    try {
      await db
        .update(ProfileData)
        .set({
          leetCode: profileData.leetCode,
          codeforces: profileData.codeforces,
          codechef: profileData.codechef,
        })
        .where(eq(ProfileData.clerkId, clerkUserId));

      setIsEditing(false);
      setIsNew(false);
      toast.success("Profile information saved successfully!");
    } catch (error) {
      console.error("Error saving profile data:", error);
      toast.error("Failed to save profile information. Please try again.");
    }
  };

  // Refresh and update coding stats only
  const handleRefreshCodingStats = async () => {
    toast.info("Updating coding stats...");
    try {
      const response = await fetch("/api/updatePlatformStats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clerkId: clerkUserId,
          leetCode: profileData.leetCode,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to update platform stats:", errorData);
        toast.error("Failed to update platform stats.");
        return;
      }

      toast.success("Coding stats updated successfully!");
    } catch (error) {
      console.error("Error refreshing coding stats:", error);
      toast.error("Error refreshing coding stats. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-2xl bg-white shadow-lg rounded-lg">
     
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Your Profile</h1>
        <p className="text-gray-600">
          Welcome, {isLoading ? <Skeleton width={150} /> : user?.fullName}
        </p>
        {isNew && <p className="text-red-500">New user! Please fill in your details below.</p>}
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-4 relative">
          {isLoading ? (
            <Skeleton circle={true} height={96} width={96} />
          ) : (
            <img
              src={user?.imageUrl}
              alt="Profile"
              className="w-24 h-24 rounded-full shadow-md object-cover"
            />
          )}
        </div>
        <p className="text-lg text-gray-700 mb-4">
          Email: {isLoading ? <Skeleton width={200} /> : user.primaryEmailAddress?.emailAddress}
        </p>
        <p className="text-sm text-gray-500 mb-8">
          ID: {isLoading ? <Skeleton width={100} /> : user.id}
        </p>

        <div className="w-full">
          {isEditing ? (
            <div className="space-y-4">
              <input
                name="leetCode"
                value={profileData?.leetCode || ""}
                onChange={handleInputChange}
                placeholder="LeetCode Username"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                name="codeforces"
                value={profileData?.codeforces || ""}
                onChange={handleInputChange}
                placeholder="Codeforces Username"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                name="codechef"
                value={profileData?.codechef || ""}
                onChange={handleInputChange}
                placeholder="Codechef Username"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <div className="flex justify-between mt-6">
                <button
                  onClick={handleSave}
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
                >
                  Save Profile Info
                </button>
              
              </div>
            </div>
          ) : (
            <>
              <p className="text-lg mb-4">
                <strong>LeetCode Username:</strong> {isLoading ? <Skeleton width={100} /> : profileData?.leetCode || "Not provided"}
              </p>
              <p className="text-lg mb-4">
                <strong>Codeforces Username:</strong> {isLoading ? <Skeleton width={100} /> : profileData?.codeforces || "Not provided"}
              </p>
              <p className="text-lg mb-4">
                <strong>Codechef Username:</strong> {isLoading ? <Skeleton width={100} /> : profileData?.codechef || "Not provided"}
              </p>
              <div className="flex justify-between mt-6">
              <button
                onClick={() => setIsEditing(true)}
                className=" bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                {isNew ? "Add Details" : "Edit Profile"}
              </button>
              <button
                  onClick={handleRefreshCodingStats}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                  Refresh Coding Stats
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
