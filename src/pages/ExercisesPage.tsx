import React, { useState } from 'react';
import { Card } from '@/components/ui';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const exercises = {
  Motor: [
    { title: 'Finger flex & extend', description: 'A simple exercise to improve finger mobility.', reps: '3 sets of 10' },
    { title: 'Shoulder raises', description: 'Helps in shoulder mobility and strength.', reps: '3 sets of 10' }
  ],
  Speech: [
    { title: 'Word repetition practice', description: 'Practice repeating words to enhance speech.', reps: '5 minutes' },
    { title: 'Breathing & pacing', description: 'Focus on breathing techniques.', reps: '5 minutes' }
  ],
  Cognitive: [
    { title: 'Name 5 items in a category', description: 'A fun memory exercise.', reps: '5 minutes' },
    { title: 'Memory card exercise', description: 'Enhance memory through card matching.', reps: '5 minutes' }
  ]
};

const ExercisesPage: React.FC = () => {
  const [completed, setCompleted] = useState<{ [key: string]: boolean }>({});

  const toggleCompleted = (title: string) => {
    setCompleted(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const totalExercises = Object.values(exercises).flat().length;
  const completedCount = Object.keys(completed).filter(key => completed[key]).length;

  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>Exercises</h1>
      <p>{completedCount} of {totalExercises} exercises completed today</p>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {Object.entries(exercises).map(([section, items]) => (
          <div key={section} className='space-y-4'>
            <h2 className='text-sm font-semibold uppercase tracking-wide text-muted-foreground'>{section} exercises</h2>
            {items.map(exercise => (
              <Card key={exercise.title} title={exercise.title} description={exercise.description}>
                <p>Suggested: {exercise.reps}</p>
                <Button onClick={() => toggleCompleted(exercise.title)}>{completed[exercise.title] ? 'Mark as undone' : 'Mark as done'}</Button>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExercisesPage;