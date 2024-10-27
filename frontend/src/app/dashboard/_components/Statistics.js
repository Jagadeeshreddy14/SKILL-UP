// components/Statistics.js
export default function Statistics({ stats }) {
    return (
      <div className="grid grid-cols-2 gap-4 p-4 bg-white rounded-lg shadow-md">
        <div>
          <h3 className="text-2xl font-bold">{stats.totalQuestions}</h3>
          <p>Total Questions</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">{stats.totalActiveDays}</h3>
          <p>Total Active Days</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">{stats.totalContests}</h3>
          <p>Total Contests</p>
        </div>
      </div>
    );
  }
  