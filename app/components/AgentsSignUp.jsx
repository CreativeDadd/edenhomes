// /app/components/AgentsSignUp.jsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AgentsSignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    age: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, role: 'agent' }), // Pass 'agent' role explicitly
      });
      
      if (!res.ok) {
        const { message } = await res.json();
        throw new Error(message || 'Error signing up');
      }
      
      setShowModal(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    router.push('/');
  };
  

  

  return (
    <div className="container mx-auto p-6 mt-12 max-w-lg">
      <div className="text-black mb-6 text-center mt-6">
      <h2 className="text-3xl font-bold text-black ">Are You an Experienced Property Agent?</h2>
      <p className="text-green-500 pt-4"> We partner with agents who have properties that we can onboard into our accommodation  services. We see our agents as partners of progress and we ensure the relationship is mutually beneficial. If you need a reliable relocations company to work with, then you can signup below:</p>
      </div>
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
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
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
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
            <h3 className="text-2xl font-bold mb-4">Signup Successful!</h3>
            <p className="text-gray-700 mb-6">Awaiting admin approval for your account.</p>
            <button
              className="bg-[#FF7F50] text-white p-3 rounded-md hover:bg-[#FF4500] transition duration-300"
              onClick={closeModal}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
