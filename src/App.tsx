import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppShell } from '@/layout/AppShell';
import { PageHeader } from '@/layout/PageHeader';
import { Button } from '@/components/ui/button';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ExercisesPage from './pages/ExercisesPage';
import DailyLogPage from './pages/DailyLogPage';
import ResourcesPage from './pages/ResourcesPage';
import Contact from './pages/Contact';
import { Card } from '@/components/ui/card';

const App: React.FC = () => {
  return (
    <AppShell>
      <Navbar />
      <PageHeader 
        title="My Dashboard" 
        subtitle="Overview of your projects and activity" 
        actions={<Button>New Project</Button>} 
      />
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <Card title='Project 1' description='Description for project 1.'>
          <Button variant='secondary'>Open</Button>
        </Card>
        <Card title='Project 2' description='Description for project 2.'>
          <Button variant='secondary'>Open</Button>
        </Card>
        <Card title='Project 3' description='Description for project 3.'>
          <Button variant='secondary'>Open</Button>
        </Card>
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/exercises' element={<ExercisesPage />} />
        <Route path='/log' element={<DailyLogPage />} />
        <Route path='/resources' element={<ResourcesPage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </AppShell>
  );
};

export default App;