import React from 'react';
import { AppShell } from '@/layout/AppShell';
import { PageHeader } from '@/layout/PageHeader';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ButtonFixerTest: React.FC = () => {
  return (
    <AppShell>
      <PageHeader title="Button Fixer Test" subtitle="Testing raw HTML elements" />
      <div className='flex flex-col gap-4 p-6'>
        <Button>Shadcn Button</Button>
        <Input type='button' value='Raw HTML Button' className='mt-4 p-2 border border-input rounded-md'  />
        <Input placeholder="This is a raw input"  />
      </div>
    </AppShell>
  );
};

export default ButtonFixerTest;