// components/UserProfile.js
import Image from 'next/image';
import { FaMapMarkerAlt, FaUniversity, FaEnvelope, FaTwitter } from 'react-icons/fa';

export default function UserProfile({ user }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center space-y-4 text-center">
      {/* Profile Image */}
      <div className="w-24 h-24 overflow-hidden rounded-full border-4 border-indigo-500 shadow-lg">
        <img src={user.dplink} alt="User Profile" className="w-full h-full object-cover" />
      </div>

      {/* User Info */}
      <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
      <p className="text-sm text-gray-500">@{user.handle}</p>

      {/* Additional Info */}
      <div className="text-gray-600 space-y-2">
        <p className="flex items-center justify-center space-x-2">
          <FaMapMarkerAlt className="text-indigo-500" />
          <span>{user.location}</span>
        </p>
        <p className="flex items-center justify-center space-x-2">
          <FaUniversity className="text-indigo-500" />
          <span>{user.institution}</span>
        </p>
        <p className="flex items-center justify-center space-x-2">
          <FaEnvelope className="text-indigo-500" />
          <span>{user.email}</span>
        </p>
        <p className="flex items-center justify-center space-x-2">
          <FaTwitter className="text-indigo-500" />
          <span>@{user.handle}</span>
        </p>
      </div>

      {/* Optional Action Button */}
      <button className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors">
        Edit Profile
      </button>
    </div>
  );
}
