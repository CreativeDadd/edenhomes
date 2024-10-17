

// app/admin/properties/page.js
'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function AdminProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchProperties() {
      const response = await fetch('/api/admin/properties');
      const data = await response.json();
      setProperties(data);
    }
    fetchProperties();
  }, []);

  const handleApproval = async (propertyId, status) => {
    try {
      const response = await fetch(`/api/admin/properties/${propertyId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (response.ok) {
        alert(`Property ${status}`);
        setProperties(properties.filter((prop) => prop._id !== propertyId));
      } else {
        alert('Failed to update property status.');
      }
    } catch (error) {
      alert('An error occurred.');
    }
  };

  return (
    <div className="p-6 mt-16 max-w-7xl mx-auto">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Pending Property Approvals</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <li key={property._id} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{property.title}</h3>
            {property.imageUrl && (
              <div className="mb-4">
                <Image src={property.imageUrl} width={300} height={200} className="rounded-lg object-cover w-full h-48" alt={property.title} />
              </div>
            )}
            <p className="text-gray-600 mb-3">{property.description}</p>
            <p className="font-medium text-gray-700 mb-2">Price: <span className="text-green-600">{property.discountPrice}</span></p>
            <p className="text-sm text-gray-500 mb-6">Agent: {property.agentId?.email || 'No agent assigned'}</p>
            <div className="flex justify-between items-center">
              <button
                className="bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 text-white font-bold py-2 px-4 rounded-lg transition duration-150 ease-in-out"
                onClick={() => handleApproval(property._id, 'approved')}
              >
                Approve
              </button>
              <button
                className="bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 text-white font-bold py-2 px-4 rounded-lg transition duration-150 ease-in-out"
                onClick={() => handleApproval(property._id, 'rejected')}
              >
                Reject
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}











