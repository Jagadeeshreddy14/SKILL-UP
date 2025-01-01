'use client';
import { useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState('');
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const fetchStats = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/scrape', {
        method: 'POST',
        body: JSON.stringify({ username }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setStats(data);
    } catch (error) {
      setError(error.message);
      setStats(null);
    }
    setLoading(false);
  };

  return (
    <main className="max-w-2xl m-20 p-4">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="LeetCode username"
          className="border p-2 rounded flex-1"
        />
        <button 
          onClick={fetchStats}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Fetch Stats'}
        </button>
      </div>

      {error && (
        <div className="text-red-600 mb-4 p-2 bg-red-50 rounded">
          {error}
        </div>
      )}

      {stats?.problemStats && (
        <div className="border rounded p-4 bg-white shadow">
          <div className="grid gap-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded text-center">
                <p className="font-medium text-gray-600">Problems Solved</p>
                <p className="text-2xl font-bold text-blue-600">{stats.problemStats.total || '0'}</p>
                <p className="text-sm text-gray-500">of {stats.acceptance?.totalQuestions || '0'}</p>
              </div>
              <div className="bg-orange-50 p-4 rounded text-center">
                <p className="font-medium text-gray-600">Contest Rating</p>
                <p className="text-2xl font-bold text-orange-600">{stats.contestStats?.rating || '0'}</p>
              </div>
              <div className="bg-green-50 p-4 rounded text-center">
                <p className="font-medium text-gray-600">Global Ranking</p>
                <p className="text-2xl font-bold text-green-600">{stats.contestStats?.globalRanking || '0'}</p>
              </div>
            </div>
            
            <div className="mt-4">
              <p className="font-medium text-gray-600 mb-2">Problems by Difficulty</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="p-3 bg-green-50 rounded text-center">
                  <p className="text-sm text-gray-600">Easy</p>
                  <p className="text-lg font-bold text-green-600">{stats.problemStats.easy || '0'}</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded text-center">
                  <p className="text-sm text-gray-600">Medium</p>
                  <p className="text-lg font-bold text-yellow-600">{stats.problemStats.medium || '0'}</p>
                </div>
                <div className="p-3 bg-red-50 rounded text-center">
                  <p className="text-sm text-gray-600">Hard</p>
                  <p className="text-lg font-bold text-red-600">{stats.problemStats.hard || '0'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}