import React from 'react';
import { Card } from '@/components/ui';

interface CardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const CustomCard: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <Card>
      <h2 className='text-lg font-semibold'>{title}</h2>
      <p className='text-sm text-muted-foreground'>{description}</p>
      {children}
    </Card>
  );
};

export default CustomCard;