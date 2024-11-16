import Image from 'next/image';
import { FaMapMarkerAlt, FaUniversity, FaEnvelope, FaCode } from 'react-icons/fa';
import { useUser } from "@clerk/clerk-react";

export default function UserProfile({ profileData = {}, isEditing = false, onEdit }) {
  const { user } = useUser();
console.log("from profile dashboard" + profileData);
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center space-y-4 text-center">
      {/* Profile Image */}
      {user?.imageUrl ? (
        <div className="w-24 h-24 overflow-hidden rounded-full border-4 border-indigo-500 shadow-lg">
          <Image
            src={user?.imageUrl}
            alt="User Profile"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
      ) : (
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}

      {/* User Info */}
      <h2 className="text-2xl font-bold text-gray-900">
        {profileData.name || "Anonymous User"}
      </h2>
      <p className="text-sm text-gray-500">
        @{profileData.clerkId || "Unknown Clerk ID"}
      </p>

      {/* Additional Info */}
      <div className="text-gray-600 space-y-2">
        <p className="flex items-center justify-center space-x-2">
          <FaMapMarkerAlt className="text-indigo-500" />
          <span>{profileData.location || "Location not specified"}</span>
        </p>
        <p className="flex items-center justify-center space-x-2">
          <FaUniversity className="text-indigo-500" />
          <span>{profileData.university || "Institution not provided"}</span>
        </p>
        <p className="flex items-center justify-center space-x-2">
          <FaEnvelope className="text-indigo-500" />
          <span>{profileData.primaryEmail || "No email provided"}</span>
        </p>
        <p className="flex items-center justify-center space-x-2">
          <FaCode className="text-indigo-500" />
          <span>{profileData.leetCode || "LeetCode handle missing"}</span>
        </p>
      </div>

      {/* Optional Action Button */}
      {isEditing && onEdit && (
        <button
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors"
          onClick={onEdit}
        >
          Edit Profile
        </button>
      )}
    </div>
  );
}
