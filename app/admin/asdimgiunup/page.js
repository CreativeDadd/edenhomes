'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminSignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/admin-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Error signing up');

      setSuccess('Admin account created successfully!');
      setTimeout(() => {
        router.push('/admin/asdemcirnret'); // Redirect to the admin login page after success
      }, 3000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto p-6 mt-12 max-w-lg">
      <h2 className="text-3xl font-bold text-black mb-6">Admin Sign Up</h2>
      <form onSubmit={handleSignUp} className="space-y-6 bg-white p-6 shadow-lg rounded-lg">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full bg-[#FF7F50] text-white p-3 rounded-md hover:bg-[#FF4500] transition duration-300"
        >
          Sign Up
        </button>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </form>
    </div>
  );
}
