import React from "react";
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import {
  FaMapMarkerAlt, FaUniversity, FaEnvelope, FaBirthdayCake,
  FaGithub, FaMedal, FaInstagram, FaLinkedin,
  FaTwitter, FaGlobe,
} from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef, SiGeeksforgeeks } from "react-icons/si";

const InfoItem = ({ icon: Icon, text, link, className = "" }) => {
  const content = (
    <div className={`flex items-start space-x-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 ${className}`}>
      <Icon className="text-white/70 w-4 h-4 flex-shrink-0 mt-0.5" />
      <span className="text-white/90 text-sm break-words flex-1">{text}</span>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : content;
};

const SectionTitle = ({ icon: Icon, title }) => (
  <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-white/10">
    <Icon className="text-indigo-400 w-4 h-4" />
    <h3 className="text-base font-medium text-white/90">{title}</h3>
  </div>
);

export default function UserProfile({ profileData = {}, isEditing = false }) {
  const { user } = useUser();

  return (
    <div className="w-full max-w-3xl mx-auto p-3">
      <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-900 shadow-2xl border border-white/10">
        <div className="h-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            <div className="absolute inset-0 backdrop-blur-md bg-black/20" />
          </div>
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="w-32 h-32 rounded-2xl border-4 border-white/10 shadow-2xl overflow-hidden backdrop-blur-sm">
              <Image
                src={user.imageUrl}
                alt="User Profile"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="px-6 pt-20 pb-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
              {profileData.name || "Anonymous User"}
            </h2>
            <p className="text-sm text-white/50 mt-1">@{profileData.clerkId}</p>
            {profileData.bio && (
              <p className="mt-4 text-white/70 text-sm max-w-xl mx-auto break-words">
                {profileData.bio}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <SectionTitle icon={FaEnvelope} title="Personal Information" />
              <div className="space-y-3">
                <InfoItem icon={FaEnvelope} text={profileData.primaryEmail} />
                <InfoItem icon={FaMapMarkerAlt} text={profileData.location || "Location not specified"} />
                <InfoItem icon={FaBirthdayCake} text={profileData.dateOfBirth ? new Date(profileData.dateOfBirth).toLocaleDateString() : "Birth date not specified"} />
                <InfoItem icon={FaUniversity} text="Indian Institute of Information Technology (IIIT), Bhagalpur" />
              </div>
            </div>

            <div>
              <SectionTitle icon={FaGlobe} title="Social Links" />
              <div className="space-y-3">
                {[
                  { icon: FaGithub, name: "github", hoverClass: "hover:border-gray-400" },
                  { icon: FaLinkedin, name: "linkedin", hoverClass: "hover:border-blue-400" },
                  { icon: FaTwitter, name: "twitter", hoverClass: "hover:border-sky-400" },
                  { icon: FaInstagram, name: "instagram", hoverClass: "hover:border-pink-400" },
                  { icon: FaGlobe, name: "portfolio", hoverClass: "hover:border-emerald-400" }
                ].map(({ icon, name, hoverClass }) => (
                  <InfoItem
                    key={name}
                    icon={icon}
                    text={profileData[name] || name.charAt(0).toUpperCase() + name.slice(1)}
                    link={profileData[name]}
                    className={hoverClass}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <SectionTitle icon={FaMedal} title="Coding Profiles" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { icon: SiLeetcode, name: "leetCode", url: "leetcode.com", hoverClass: "hover:border-yellow-400" },
                { icon: SiCodeforces, name: "codeforces", url: "codeforces.com/profile", hoverClass: "hover:border-blue-400" },
                { icon: SiCodechef, name: "codechef", url: "codechef.com/users", hoverClass: "hover:border-orange-400" },
                { icon: SiGeeksforgeeks, name: "geeksforgeeks", url: "auth.geeksforgeeks.org/user", hoverClass: "hover:border-green-400" }
              ].map(({ icon, name, url, hoverClass }) => (
                <InfoItem
                  key={name}
                  icon={icon}
                  text={profileData[name] || name}
                  link={profileData[name] ? `https://${url}/${profileData[name]}` : undefined}
                  className={hoverClass}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 text-xs text-white/40 text-right">
            Member since: {new Date(profileData.createdAt).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
}