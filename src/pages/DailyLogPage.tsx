import React, { useState } from 'react';
import { Button, Card } from '@/components/ui';

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
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>Daily Log</h1>
      <form onSubmit={handleSubmit} className='rounded-2xl border bg-card p-6 shadow-sm'>
        <label className='block'>How was today?</label>
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))} className='mt-2'>
          <option value={1}>Very difficult</option>
          <option value={2}>Difficult</option>
          <option value={3}>Mixed</option>
          <option value={4}>Good</option>
          <option value={5}>Very good</option>
        </select>
        <label className='block mt-4'>Notes / symptoms / wins:</label>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className='mt-2' />
        <Button type='submit' className='mt-4'>Submit</Button>
      </form>
      <h2 className='text-lg font-semibold'>Recent entries</h2>
      <div className='space-y-4'>
        {entries.map(entry => (
          <Card key={entry.id} title={new Date(entry.date).toLocaleString()} description={`Rating: ${entry.rating}`}>
            <p>{entry.notes}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DailyLogPage;