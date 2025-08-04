import React, { useState } from 'react';

const languages = ['JavaScript', 'Python', 'Java', 'C++', 'Go'];

function InterviewPrepPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);

  const handleStartInterview = async () => {
    setLoading(true);
    setQuestion('');
    try {
      // Replace this fetch with your actual AI API endpoint
      const res = await fetch('/api/mock-interview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language: selectedLanguage }),
      });
      const data = await res.json();
      setQuestion(data.question || 'No question received.');
    } catch (err) {
      setQuestion('Error fetching question.');
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">AI Mock Interview</h1>
      <label className="block mb-2">Select Language:</label>
      <select
        className="border rounded px-2 py-1 mb-4"
        value={selectedLanguage}
        onChange={e => setSelectedLanguage(e.target.value)}
      >
        <option value="">--Choose--</option>
        {languages.map(lang => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>
      <button
        className="bg-[#6c47ff] text-white rounded px-4 py-2"
        disabled={!selectedLanguage || loading}
        onClick={handleStartInterview}
      >
        {loading ? 'Loading...' : 'Start Interview'}
      </button>
      {question && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <strong>Question:</strong>
          <p>{question}</p>
        </div>
      )}
    </div>
  );
}

export default InterviewPrepPage;