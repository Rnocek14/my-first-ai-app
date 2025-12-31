import React from 'react';
import { AppShell } from '@/layout/AppShell';
import { PageHeader } from '@/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const GuardrailsImportTest: React.FC = () => {
  return (
    <AppShell>
      <PageHeader title="Guardrails Import Test" subtitle="Showcasing components" />
      <div className="flex flex-col gap-6 p-6">
        <Input placeholder="Enter your input here..." />
        <Textarea placeholder="Enter additional information here..." />
        <Button type="button">Submit</Button>
      </div>
    </AppShell>
  );
};

export default GuardrailsImportTest;