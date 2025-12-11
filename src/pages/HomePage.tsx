import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AppShell } from '@/layout/AppShell';
import { PageHeader } from '@/layout/PageHeader';

const HomePage: React.FC = () => {
  return (
    <AppShell>
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
    </AppShell>
  );
};

export default HomePage;