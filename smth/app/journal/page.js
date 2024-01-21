"use client"
import React, { useState } from 'react';

const Page = () => {
  const [journalEntries, setJournalEntries] = useState([]);
  const [currentEntry, setCurrentEntry] = useState('');

  const handleInputChange = (e) => {
    setCurrentEntry(e.target.value);
  };

  const handleAddEntry = () => {
    if (currentEntry.trim() !== '') {
      const now = new Date();
      const entryWithTimestamp = {
        content: currentEntry,
        timestamp: now.toLocaleString(),
      };

      setJournalEntries([entryWithTimestamp, ...journalEntries]);
      setCurrentEntry('');
    }
  };

  return (
    <div className="bg-gray-100 p-16 rounded-lg shadow-md flex justify-center items-center h-screen">
      <div className="bg-white p-12 rounded shadow w-4/5 h-4/5">
        <h1 className="text-3xl font-bold mb-6">Journal Page</h1>
        <div>
          <textarea
            className="w-full h-32 p-2 mb-4 border rounded w-600"
            value={currentEntry}
            onChange={handleInputChange}
            placeholder="Write your journal entry..."
          />
          <button
            className="btn btn-accent"
            onClick={handleAddEntry}
          >
            Add Entry
          </button>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Journal Entries</h2>
          <ul>
            {journalEntries.map((entry, index) => (
              <li key={index} className="mb-4">
                <span className="text-gray-500">{entry.timestamp}</span>
                <p>{entry.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
