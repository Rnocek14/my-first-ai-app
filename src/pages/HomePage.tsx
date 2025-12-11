import React from 'react';
import './HomePage.css';
import Card from '../components/Card';

const HomePage: React.FC = () => {
  return (
    <div className='home-page'>
      <h1>Small wins, every day.</h1>
      <p>Track exercises, log your day, and keep your recovery organized in one place.</p>
      <div className='today-focus'>
        <Card title='Today’s Focus' description=''>
          <p>Motor goal: Hand and wrist mobility</p>
          <p>Cognitive goal: Short memory exercise</p>
          <button>View Today’s Exercises</button>
        </Card>
      </div>
      <div className='what-you-can-do'>
        <h2>What you can do here</h2>
        <div className='columns'>
          <Card title='Exercises' description='Explore daily exercises tailored for your recovery.' />
          <Card title='Daily logging' description='Keep track of your daily progress and feelings.' />
          <Card title='Helpful resources' description='Access resources to support your journey.' />
        </div>
      </div>
    </div>
  );
};

export default HomePage;