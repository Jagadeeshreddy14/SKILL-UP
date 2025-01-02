"use client";
import { useEffect, useState } from "react";
import UserProfile from "./_components/UserProfile";
import { ProfileData } from "../../../utils/schema";
import Statistics from "./_components/Statistics";
import TotalStatsCard from "./_components/TotalStatsCard";
import { useUser } from "@clerk/clerk-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CPStatsCard from "./_components/CPStatsCard";

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
        return data.profile; // Return the profile data
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

  const fetchStatsData = async (profile) => {
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
      <div className="container mx-auto p-6 space-y-6 m-1 mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Skeleton className="h-[600px] w-full rounded-xl" />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <Skeleton className="h-[200px] w-full rounded-xl" />
            <Skeleton className="h-[400px] w-full rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  const NoDataCard = ({ message }) => (
    <Card className="bg-gray-50">
      <CardContent className="flex items-center justify-center min-h-[200px]">
        <p className="text-lg text-gray-500">{message}</p>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50/50 mt-16">
      <div className="container mx-auto ">
        {isNew && (
          <Alert className="mb-1 bg-blue-50 text-blue-700 border-blue-200">
            <AlertDescription>
              Welcome! Please complete your profile to get started.
            </AlertDescription>
          </Alert>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-6">
              {profileData ? (
                <Card className="shadow-sm hover:shadow-md transition-all duration-200">
                  <CardContent className="p-0">
                    <UserProfile profileData={profileData} isEditing={true} />
                  </CardContent>
                </Card>
              ) : (
                <NoDataCard message="No profile data available" />
              )}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-sm hover:shadow-md transition-all duration-200">
              <CardContent className="p-1">
                {userData ? (
                  <TotalStatsCard stats={userData} />
                ) : (
                  <NoDataCard message="No platform stats available" />
                )}
              </CardContent>
              <CardContent className="p-1">
                {userData ? (
                  <CPStatsCard stats={userData} />
                ) : (
                  <NoDataCard message="No platform stats available" />
                )}
              </CardContent>
            </Card>
            <Card className="shadow-sm hover:shadow-md transition-all duration-200">
              <CardContent className="p-1">
                {userData ? (
                  <Statistics stats={userData} />
                ) : (
                  <NoDataCard message="No platform stats available" />
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}