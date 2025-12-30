import React from 'react';
import { AppShell } from '@/layout/AppShell';
import { PageHeader } from '@/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const GuardrailsImportTest: React.FC = () => {
  return (
    <AppShell>
      <PageHeader title="Guardrails Import Test" subtitle="Showcasing components" />
      <div className="flex flex-col gap-6 p-6">
        <Button>Shadcn Button</Button>
        <Badge>Sample Badge</Badge>
        <Input placeholder="Styled Input" />
        <Textarea placeholder="Styled Textarea" />
        <Button className="bg-primary text-white p-2 rounded">Raw HTML Button</Button>
      </div>
    </AppShell>
  );
};

export default GuardrailsImportTest;