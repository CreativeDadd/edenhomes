// app/agents/signup/page.js

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AgentSignup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/agents/signup/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push('/agents/login');
      } else {
        const { message } = await res.json();
        setError(message);
      }
    } catch (err) {
      setError('Error signing up agent');
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-md">
      <h2 className="text-3xl mb-4">Agent Signup</h2>
      <form onSubmit={handleSignup} className="grid gap-4">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-orange-500 text-white p-2 rounded">Sign Up</button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
