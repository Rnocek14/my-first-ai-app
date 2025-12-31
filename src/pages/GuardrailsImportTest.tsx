import React, { useState } from 'react';
import { AppShell } from '@/layout/AppShell';
import { PageHeader } from '@/layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { recipes } from '@/design-system/recipes';

const GuardrailsImportTest: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const handleSubmit = () => {
    console.log('Input:', inputValue);
    console.log('Textarea:', textareaValue);
    // Reset fields if needed
    setInputValue('');
    setTextareaValue('');
  };

  return (
    <AppShell>
      <PageHeader title="Guardrails Import Test" subtitle="Simple form demonstration" />
      <Card className={recipes.cardPadded}>
        <div className="flex flex-col gap-6 p-6">
          <Input 
            placeholder="Enter your input here..." 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
          <Textarea 
            placeholder="Enter additional information here..." 
            value={textareaValue} 
            onChange={(e) => setTextareaValue(e.target.value)} 
          />
          <Button type="button" onClick={handleSubmit}>Submit</Button>
        </div>
      </Card>
    </AppShell>
  );
};

export default GuardrailsImportTest;