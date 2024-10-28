// components/Statistics.js
import { FaQuestionCircle, FaCalendarCheck, FaTrophy } from 'react-icons/fa';

export default function Statistics({ stats }) {
  return (
    <div className="grid grid-cols-3 gap-6 p-6 bg-white rounded-lg shadow-lg text-center">
      
      {/* Total Questions */}
      <div className="flex flex-col items-center bg-blue-100 p-4 rounded-lg">
        <FaQuestionCircle className="text-blue-500 text-3xl mb-2" />
        <h3 className="text-3xl font-extrabold text-blue-700">{stats.totalQuestions}</h3>
        <p className="text-sm font-medium text-gray-600">Total Questions</p>
      </div>
      
      {/* Total Active Days */}
      <div className="flex flex-col items-center bg-green-100 p-4 rounded-lg">
        <FaCalendarCheck className="text-green-500 text-3xl mb-2" />
        <h3 className="text-3xl font-extrabold text-green-700">{stats.totalActiveDays}</h3>
        <p className="text-sm font-medium text-gray-600">Total Active Days</p>
      </div>
      
      {/* Total Contests */}
      <div className="flex flex-col items-center bg-yellow-100 p-4 rounded-lg">
        <FaTrophy className="text-yellow-500 text-3xl mb-2" />
        <h3 className="text-3xl font-extrabold text-yellow-700">{stats.totalContests}</h3>
        <p className="text-sm font-medium text-gray-600">Total Contests</p>
      </div>

    </div>
  );
}
