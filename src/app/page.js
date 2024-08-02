"use client";

import { useState } from 'react';

export default function HomePage() {
  const [messageType, setMessageType] = useState('');
  const [generatedMessage, setGeneratedMessage] = useState('');

  const handleGenerate = async () => {
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messageType }),
    });
    const data = await res.json();
    setGeneratedMessage(data.message);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Generate Professional Message</h1>
      <select 
        className="border p-2 mb-4"
        onChange={(e) => setMessageType(e.target.value)}
      >
        <option value="">Select Message Type</option>
        <option value="cover letter">Cover Letter</option>
        <option value="LinkedIn message">LinkedIn Message</option>
        {/* Add more options as needed */}
      </select>
      <button 
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleGenerate}
      >
        Generate
      </button>
      {generatedMessage && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h2 className="font-bold mb-2">Generated Message:</h2>
          <p>{generatedMessage}</p>
        </div>
      )}
    </div>
  );
}
