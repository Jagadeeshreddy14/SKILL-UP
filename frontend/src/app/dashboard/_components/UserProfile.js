import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/clerk-react";
import {
  FaMapMarkerAlt,
  FaUniversity,
  FaEnvelope,
  FaCode,
  FaGithub,
  FaEdit,
  FaMedal,
} from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";

const InfoItem = ({ icon: Icon, text, className = "" }) => (
  <div className={`flex items-center space-x-3 rounded-lg hover:bg-gray-50 transition-colors ${className}`}>
    <Icon className="text-black w-5 h-5 flex-shrink-0" />
    <span className="text-gray-800 text-sm">{text}</span>
  </div>
);

export default function UserProfile({ profileData = {}, isEditing = false }) {
  const { user } = useUser();

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header Background with Image */}
        <div className="h-40 sm:h-32 bg-gradient-to-r from-indigo-500 to-purple-600 relative flex items-center justify-center">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-xl overflow-hidden absolute -bottom-12">
            <Image
              src={user.imageUrl}
              alt="User Profile"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="px-4 sm:px-6 pb-6 pt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {profileData.name || "Anonymous User"}
          </h2>
          <p className="text-sm text-gray-500 mt-1 break-all">
            @{profileData.clerkId || "Unknown Clerk ID"}
          </p>

          {/* Main Info Section */}
          <div className="mt-6 grid grid-cols-1 gap-3 text-left w-full max-w-md mx-auto">
            <InfoItem
              icon={FaMapMarkerAlt}
              text={profileData.location || "Location not specified"}
            />
            <InfoItem
              icon={FaUniversity}
              text="Indian Institute of Information Technology (IIIT), Bhagalpur"
            />
            <InfoItem
              icon={FaEnvelope}
              text={profileData.primaryEmail || "No email provided"}
            />
          </div>

          {/* Coding Profiles Section */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="flex items-center justify-center text-base sm:text-lg font-semibold text-gray-900 mb-4">
              <FaMedal className="text-indigo-500 mr-2" />
              Coding Profiles
            </h3>
            <div className="grid grid-cols-1 gap-3 w-full max-w-md mx-auto text-left">
              <InfoItem
                icon={SiLeetcode}
                text={profileData.leetCode || "LeetCode handle missing"}
                className="hover:bg-yellow-50"
              />
              <InfoItem
                icon={SiCodeforces}
                text={profileData.codeforces || "Codeforces handle missing"}
                className="hover:bg-blue-50"
              />
              <InfoItem
                icon={SiCodechef}
                text={profileData.codechef || "Codechef handle missing"}
                className="hover:bg-orange-50"
              />
            </div>
            <Link 
              href="/profile"
              className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors shadow-md text-sm"
            >
              <FaEdit className="mr-2" />
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
