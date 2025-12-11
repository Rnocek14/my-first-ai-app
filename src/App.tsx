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

const App: React.FC = () => {
  return (
    <AppShell>
      <Navbar />
      <PageHeader 
        title="My Dashboard" 
        subtitle="Overview of your projects and activity" 
        actions={<Button>New Project</Button>} 
      />
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