import React, { useState } from 'react';
import './DailyLogPage.css';

interface LogEntry {
  id: number;
  date: string;
  rating: number;
  notes: string;
}

const DailyLogPage: React.FC = () => {
  const [entries, setEntries] = useState<LogEntry[]>([]);
  const [rating, setRating] = useState<number>(3);
  const [notes, setNotes] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: LogEntry = {
      id: entries.length + 1,
      date: new Date().toISOString(),
      rating,
      notes
    };
    setEntries([...entries, newEntry]);
    setNotes('');
  };

  return (
    <div className='daily-log-page'>
      <h1>Daily Log</h1>
      <form onSubmit={handleSubmit}>
        <label>
          How was today?
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
            <option value={1}>Very difficult</option>
            <option value={2}>Difficult</option>
            <option value={3}>Mixed</option>
            <option value={4}>Good</option>
            <option value={5}>Very good</option>
          </select>
        </label>
        <label>
          Notes / symptoms / wins:
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
        </label>
        <button type='submit'>Submit</button>
      </form>
      <h2>Recent entries</h2>
      <ul>
        {entries.map(entry => (
          <li key={entry.id}>
            <strong>{new Date(entry.date).toLocaleString()}</strong> - 
            <span style={{ color: entry.rating >= 4 ? 'green' : entry.rating >= 2 ? 'orange' : 'red' }}>{entry.rating}</span>
            <p>{entry.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyLogPage;