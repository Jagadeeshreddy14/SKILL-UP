// components/ProblemCategories.js
export default function ProblemCategories({ problems }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg space-y-6">
      <h3 className="text-lg font-semibold text-gray-700">Problems Solved</h3>
      <div className="grid grid-rows-2 gap-6">
        
        {/* Fundamentals Section */}
        <div className="flex flex-col items-center bg-indigo-100 p-4 rounded-lg">
          <p className="text-md font-medium text-indigo-600">Fundamentals</p>
          <div className="text-4xl font-bold text-indigo-700">
            {problems.fundamentals}
          </div>
        </div>

        {/* DSA Section */}
        <div className="flex flex-col items-center bg-green-100 p-4 rounded-lg">
          <p className="text-md font-medium text-green-600">Data Structures & Algorithms</p>
          <div className="text-4xl font-bold text-green-700">
            {problems.dsa.easy + problems.dsa.medium + problems.dsa.hard}
          </div>
          <div className="flex justify-center space-x-4 mt-2 text-sm font-medium text-gray-600">
            <span className="flex items-center space-x-1">
              <span className="h-3 w-3 bg-green-500 rounded-full"></span>
              <span>Easy: {problems.dsa.easy}</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="h-3 w-3 bg-yellow-500 rounded-full"></span>
              <span>Medium: {problems.dsa.medium}</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="h-3 w-3 bg-red-500 rounded-full"></span>
              <span>Hard: {problems.dsa.hard}</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
