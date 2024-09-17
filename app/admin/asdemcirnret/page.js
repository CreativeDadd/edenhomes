'use client';
//  app\admin\asdemcirnret\page.js ==== admin-login secrete page
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      email: credentials.email,
      password: credentials.password,
    });
    if (!res?.ok) setError('Invalid login credentials');
    else router.push('/admin/admin-dashboard');
  };

  return (
    <div className="container mx-auto p-6 max-w-md bg-white shadow-lg rounded-lg my-12 mt-36"  >
      <h2 className="text-3xl font-bold text-black mb-6">Admin Login</h2>
      <form onSubmit={handleLogin} className="space-y-6">
        <input
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full bg-[#FF7F50] text-white p-3 rounded-md hover:bg-[#FF4500] transition duration-300"
        >
          Login
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}
