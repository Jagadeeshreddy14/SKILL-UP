"use client";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useUser } from "@clerk/clerk-react";
import { db } from "../../../utils/db";
import { eq } from "drizzle-orm";
import { ProfileData } from "../../../utils/schema";

function ProfilePage() {
  const { user } = useUser();
  const clerkUserId = user?.id;
  const [profileData, setProfileData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Added loading state

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
        });
        setIsNew(true);
      } else {
        setProfileData(userProfile);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    } finally {
      setIsLoading(false); // Set loading to false after fetch
    }
  };

  useEffect(() => {
    if (clerkUserId) fetchProfileData();
  }, [clerkUserId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = async () => {
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
    } catch (error) {
      console.error("Error saving profile data:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-2xl bg-white shadow-lg rounded-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Your Profile</h1>
        <p className="text-gray-600">
          Welcome, {isLoading ? <Skeleton width={150} /> : user.fullName}
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
          Unique ID: {isLoading ? <Skeleton width={100} /> : user.id}
        </p>

        <div className="w-full">
          {isEditing ? (
            <div className="space-y-4">
              <input
                name="primaryEmail"
                value={profileData?.primaryEmail || user.primaryEmailAddress?.emailAddress || ""}
                onChange={handleInputChange}
                placeholder="Primary Email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                readOnly
              />
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
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300 ease-in-out"
                >
                  Cancel
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

              <button
                onClick={() => setIsEditing(true)}
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                {isNew ? "Add Details" : "Edit Profile"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
