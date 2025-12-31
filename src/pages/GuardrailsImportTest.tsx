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
        <Button>Shadcn Button</Button>
        <Input placeholder="Styled Input" />
        <Textarea placeholder="Styled Textarea" />
      </div>
    </AppShell>
  );
};

export default GuardrailsImportTest;