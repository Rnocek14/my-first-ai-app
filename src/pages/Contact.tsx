import React, { useState } from 'react';
import { Input, Button } from '@/components/ui';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold'>Contact Us</h1>
      <form onSubmit={handleSubmit} className='rounded-2xl border bg-card p-6 shadow-sm'>
        <Input label='Name' value={name} onChange={(e) => setName(e.target.value)} required />
        <Input label='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Input label='Message' as='textarea' value={message} onChange={(e) => setMessage(e.target.value)} required />
        <Button type='submit' className='mt-4'>Send</Button>
      </form>
    </div>
  );
};

export default Contact;