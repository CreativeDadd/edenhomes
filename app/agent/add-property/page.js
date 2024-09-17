'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddProperty() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    imageUrl: '',
    location: '',
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/agent/properties', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert('Property added, awaiting admin approval.');
      router.push('/agent/dashboard');
    } else {
      alert('Failed to add property.');
    }
  };

  return (
    <div className="container mx-auto p-8 mt-12 max-w-lg">
      <h2 className="text-3xl font-bold text-black mb-6">Add New Property</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <input
          type="url"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full bg-[#FF7F50] text-white py-3 rounded-md hover:bg-[#FF4500] transition duration-300"
        >
          Add Property
        </button>
      </form>
    </div>
  );
}
