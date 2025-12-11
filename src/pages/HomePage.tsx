import React from 'react';
import { Button, Card } from '@/components/ui';

const HomePage: React.FC = () => {
  return (
    <div className='space-y-6'>
      <section className='max-w-5xl mx-auto text-center'>
        <h1 className='text-3xl font-bold'>Small wins, every day.</h1>
        <p className='text-muted-foreground'>Track exercises, log your day, and keep your recovery organized in one place.</p>
      </section>
      <Card title="Today’s Focus" description=''>
        <p>Motor goal: Hand and wrist mobility</p>
        <p>Cognitive goal: Short memory exercise</p>
        <Button className='mt-4' variant='primary'>View Today’s Exercises</Button>
      </Card>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
        <Card title='Exercises' description='Explore daily exercises tailored for your recovery.' />
        <Card title='Daily Log' description='Keep track of your daily progress and feelings.' />
        <Card title='Progress' description='Monitor your recovery journey over time.' />
        <Card title='Caregiver View' description='Tools and resources for caregivers supporting recovery.' />
      </div>
    </div>
  );
};

export default HomePage;