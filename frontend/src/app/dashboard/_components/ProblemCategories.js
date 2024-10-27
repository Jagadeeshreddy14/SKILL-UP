// components/ProblemCategories.js
export default function ProblemCategories({ problems }) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="font-semibold">Problems Solved</h3>
        <div className="flex space-x-4">
          <div>
            <p>Fundamentals</p>
            <div className="text-3xl font-bold">{problems.fundamentals}</div>
          </div>
          <div>
            <p>DSA</p>
            <div className="text-3xl font-bold">{problems.dsa.easy + problems.dsa.medium + problems.dsa.hard}</div>
          </div>
        </div>
      </div>
    );
  }
  