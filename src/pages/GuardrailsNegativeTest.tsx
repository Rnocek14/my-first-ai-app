import React from 'react';
import { AppShell } from '@/layout/AppShell';
import { PageHeader } from '@/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { recipes } from '@/design-system/recipes';

const GuardrailsNegativeTest: React.FC = () => {
  return (
    <AppShell>
      <PageHeader title="Guardrails Negative Test Page" subtitle="This is a bad example for guardrails testing." />
      <div className="flex flex-col gap-6 p-6">
        <Input placeholder="Enter raw HTML input..." />
        <Textarea placeholder="Enter raw HTML textarea..." />
        <Button variant="secondary">Raw HTML Button</Button>
      </div>
    </AppShell>
  );
};

export default GuardrailsNegativeTest;