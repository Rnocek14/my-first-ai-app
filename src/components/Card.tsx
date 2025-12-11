import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <div className='card'>
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default Card;