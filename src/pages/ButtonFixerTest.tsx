import React from 'react';
import { AppShell } from '@/layout/AppShell';
import { PageHeader } from '@/layout/PageHeader';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ButtonFixerTest: React.FC = () => {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <AppShell>
      <PageHeader title="Button Fixer Test" subtitle="Testing proper elements" />
      <div className='flex flex-col gap-4 p-6'>
        <Button onClick={handleButtonClick}>Shadcn Button</Button>
        <Button variant='outline' className='p-2'>Tailwind Styled Button</Button>
        <Input placeholder="This is a properly styled input" />
      </div>
    </AppShell>
  );
};

export default ButtonFixerTest;