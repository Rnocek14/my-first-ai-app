import React, { useState } from 'react';
import './ExercisesPage.css';
import Card from '../components/Card';

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
    <div className='exercises-page'>
      <h1>Exercises</h1>
      <p>{completedCount} of {totalExercises} exercises completed today</p>
      <div className='exercise-sections'>
        {Object.entries(exercises).map(([section, items]) => (
          <div key={section} className='exercise-section'>
            <h2>{section} exercises</h2>
            {items.map(exercise => (
              <Card key={exercise.title} title={exercise.title} description={exercise.description}>
                <p>Suggested: {exercise.reps}</p>
                <button onClick={() => toggleCompleted(exercise.title)}>{completed[exercise.title] ? 'Mark as undone' : 'Mark as done'}</button>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExercisesPage;