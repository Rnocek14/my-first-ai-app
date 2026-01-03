import React from 'react';
import { AppShell } from '@/layout/AppShell';
import { PageHeader } from '@/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { recipes } from '@/design-system/recipes';

const HomePage: React.FC = () => {
  return (
    <AppShell>
      <PageHeader 
        title="Dog Grooming Services" 
        subtitle="Manage your grooming appointments and services." 
        actions={<Button>Book Appointment</Button>} 
      />
      <div className={recipes.metricsGrid}>
        <Card className={recipes.cardCompact}>
          <h2 className='text-lg font-semibold'>Total Appointments</h2>
          <p className='text-2xl font-bold'>1,234</p>
        </Card>
        <Card className={recipes.cardCompact}>
          <h2 className='text-lg font-semibold'>Total Clients</h2>
          <p className='text-2xl font-bold'>56</p>
        </Card>
        <Card className={recipes.cardCompact}>
          <h2 className='text-lg font-semibold'>Pending Requests</h2>
          <p className='text-2xl font-bold'>12</p>
        </Card>
        <Card className={recipes.cardCompact}>
          <h2 className='text-lg font-semibold'>Completed Services</h2>
          <p className='text-2xl font-bold'>30</p>
        </Card>
      </div>
    </AppShell>
  );
};

export default HomePage;
