import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ExercisesPage from './pages/ExercisesPage';
import DailyLogPage from './pages/DailyLogPage';
import ResourcesPage from './pages/ResourcesPage';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Layout>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/exercises' element={<ExercisesPage />} />
        <Route path='/log' element={<DailyLogPage />} />
        <Route path='/resources' element={<ResourcesPage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Layout>
  );
};

export default App;