import React from 'react';
import { AppShell } from '@/layout/AppShell';
import { PageHeader } from '@/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { recipes } from '@/design-system/recipes';

const DashboardPage: React.FC = () => {
  return (
    <AppShell>
      <PageHeader 
        title="Dashboard" 
        subtitle="Monitor your metrics and projects"
        actions={(
          <div className='flex space-x-4'>
            <Button>Create</Button>
            <Button variant='outline'>Settings</Button>
          </div>
        )}
      />
      <div className={recipes.flexStack}>  {/* Vertical alignment of cards */}
        <Card className={recipes.cardCompact}>
          <h2 className='text-lg font-semibold'>Total Users</h2>
          <p className='text-2xl font-bold'>1,234</p>
        </Card>
        <Card className={recipes.cardCompact}>
          <h2 className='text-lg font-semibold'>Total Projects</h2>
          <p className='text-2xl font-bold'>56</p>
        </Card>
        {/* Warning Card */}
        <Card className='bg-[#FFCC00] border-[#000000] text-[#111111]'>
          <h2 className='text-lg font-semibold'>Warning</h2>
          <p className='text-md'>Please be aware of the upcoming changes!</p>
        </Card>
      </div>
    </AppShell>
  );
};

export default DashboardPage;