import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/clerk-react";
import {
  FaMapMarkerAlt,
  FaUniversity,
  FaEnvelope,
  FaBirthdayCake,
  FaGithub,
  FaEdit,
  FaMedal,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGlobe,
} from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef, SiGeeksforgeeks } from "react-icons/si";

const InfoItem = ({ icon: Icon, text, link, className = "" }) => {
  const content = (
    <div className={`flex items-start space-x-3 p-1.5 rounded-lg hover:bg-gray-50 transition-colors ${className}`}>
      <Icon className="text-gray-600 w-4 h-4 flex-shrink-0 mt-0.5" />
      <span className="text-gray-800 text-sm break-words flex-1">{text}</span>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
};

const SectionTitle = ({ icon: Icon, title }) => (
  <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-gray-100">
    <Icon className="text-indigo-500 w-4 h-4" />
    <h3 className="text-base font-semibold text-gray-900">{title}</h3>
  </div>
);

export default function UserProfile({ profileData = {}, isEditing = false }) {
  const { user } = useUser();

  return (
    <div className="w-full max-w-3xl mx-auto p-3">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header Background with Image */}
        <div className="h-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative">
          <div className="absolute inset-0 bg-black/10" />
          {/* Centered profile image container */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
            <div className="w-28 h-28 rounded-full border-4 border-white shadow-xl overflow-hidden">
              <Image
                src={user.imageUrl}
                alt="User Profile"
                width={112}
                height={112}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 pt-20 pb-4">
          {/* Header Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {profileData.name || "Anonymous User"}
            </h2>
            <p className="text-sm text-gray-500 mt-1">@{profileData.clerkId}</p>
            {/* Bio Section */}
            {profileData.bio && (
              <p className="mt-3 text-gray-600 text-sm max-w-xl mx-auto break-words">
                {profileData.bio}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Personal Information */}
            <div>
              <SectionTitle icon={FaEnvelope} title="Personal Information" />
              <div className="space-y-2">
                <InfoItem
                  icon={FaEnvelope}
                  text={profileData.primaryEmail}
                />
                <InfoItem
                  icon={FaMapMarkerAlt}
                  text={profileData.location || "Location not specified"}
                />
                <InfoItem
                  icon={FaBirthdayCake}
                  text={profileData.dateOfBirth ? new Date(profileData.dateOfBirth).toLocaleDateString() : "Birth date not specified"}
                />
                <InfoItem
                  icon={FaUniversity}
                  text="Indian Institute of Information Technology (IIIT), Bhagalpur"
                />
              </div>
            </div>

            {/* Social Links */}
            <div>
              <SectionTitle icon={FaGlobe} title="Social Links" />
              <div className="space-y-2">
                <InfoItem
                  icon={FaGithub}
                  text={profileData.github || "GitHub"}
                  link={profileData.github}
                  className="hover:bg-gray-50"
                />
                <InfoItem
                  icon={FaLinkedin}
                  text={profileData.linkedin || "LinkedIn"}
                  link={profileData.linkedin}
                  className="hover:bg-blue-50"
                />
                <InfoItem
                  icon={FaTwitter}
                  text={profileData.twitter || "Twitter"}
                  link={profileData.twitter}
                  className="hover:bg-sky-50"
                />
                <InfoItem
                  icon={FaInstagram}
                  text={profileData.instagram || "Instagram"}
                  link={profileData.instagram}
                  className="hover:bg-pink-50"
                />
                <InfoItem
                  icon={FaGlobe}
                  text={profileData.portfolio || "Portfolio"}
                  link={profileData.portfolio}
                  className="hover:bg-green-50"
                />
              </div>
            </div>
          </div>

          {/* Coding Profiles Section */}
          <div className="mt-6">
            <SectionTitle icon={FaMedal} title="Coding Profiles" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <InfoItem
                icon={SiLeetcode}
                text={profileData.leetCode || "LeetCode"}
                link={`https://leetcode.com/${profileData.leetCode}`}
                className="hover:bg-yellow-50"
              />
              <InfoItem
                icon={SiCodeforces}
                text={profileData.codeforces || "Codeforces"}
                link={`https://codeforces.com/profile/${profileData.codeforces}`}
                className="hover:bg-blue-50"
              />
              <InfoItem
                icon={SiCodechef}
                text={profileData.codechef || "CodeChef"}
                link={`https://www.codechef.com/users/${profileData.codechef}`}
                className="hover:bg-orange-50"
              />
              <InfoItem 
              icon={SiGeeksforgeeks}
              text={profileData.geeksforgeeks || "GeeksforGeeks"}
              link={`https://auth.geeksforgeeks.org/user/${profileData.geeksforgeeks}`}
              className="hover:bg-green-50"
              />
            </div>
          </div>

          {/* Creation Date */}
          <div className="mt-6 text-xs text-gray-500 text-right">
            Member since: {new Date(profileData.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
}