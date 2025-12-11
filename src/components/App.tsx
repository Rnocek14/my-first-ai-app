import React from 'react';
import { AppShell } from '@/layout/AppShell';
import { PageHeader } from '@/layout/PageHeader';
import { Button } from '@/components/ui/button';

const App: React.FC = () => {
  return (
    <AppShell>
      <PageHeader 
        title="Hello from My First AI App" 
        subtitle="If you can see this, the internal sandbox pipeline is working." 
        actions={<Button>Get Started</Button>} 
      />
    </AppShell>
  );
};

export default App;