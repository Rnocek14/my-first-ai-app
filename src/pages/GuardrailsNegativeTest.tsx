import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const GuardrailsNegativeTest: React.FC = () => {
  return (
    <div>
      <h1>This is a Test Page</h1>
      <Button>Raw HTML Button</Button>
      <Input type="text" placeholder="Raw HTML Input"  />
      <Textarea placeholder="Raw HTML Textarea"></Textarea>
    </div>
  );
};

export default GuardrailsNegativeTest;