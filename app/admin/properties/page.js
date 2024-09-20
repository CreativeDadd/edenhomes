// app/admin/properties/page.jsx
'use client';
import { useEffect, useState } from 'react';

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
        // Refresh property list after approval/rejection
        setProperties(properties.filter((prop) => prop.id !== propertyId));
      } else {
        alert('Failed to update property status.');
      }
    } catch (error) {
      alert('An error occurred.');
    }
  };

  return (
    <div className="p-4 mt-24">
      <h1 className="text-2xl font-bold">Pending Property Approvals</h1>
      <ul>
        {properties.map((property) => (
          <li key={property.id} className="p-4 bg-gray-100 rounded mt-4">
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p>Agent: {property.agentEmail}</p>
            <button
              className="bg-green-500 text-white px-4 py-2 mr-2"
              onClick={() => handleApproval(property.id, 'approved')}
            >
              Approve
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2"
              onClick={() => handleApproval(property.id, 'rejected')}
            >
              Reject
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
