'use client';

import React, { useState, useEffect } from 'react';

export default function PropertyListPage() {
  const [properties, setProperties] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch properties from API
    const fetchProperties = async () => {
      const response = await fetch('/api/properties');
      const data = await response.json();
      setProperties(data);
    };
    fetchProperties();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Filter properties based on search query
    const filteredProperties = properties.filter((property) =>
      property.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProperties(filteredProperties);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Property Listings</h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-8">
        <input
          type="text"
          placeholder="Search properties..."
          className="p-2 border border-gray-300 rounded w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="mt-4 w-full bg-orange-500 text-white py-2 rounded">
          Search
        </button>
      </form>

      {/* Property Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div key={property._id} className="border rounded-lg p-4 shadow-md">
            <img
              src={property.imageUrl}
              alt={property.title}
              className="h-40 w-full object-cover mb-4 rounded"
            />
            <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
            <p className="text-gray-700 mb-4">{property.description}</p>
            <div className="flex justify-between items-center">
              <a
                href={`https://wa.me/${property.whatsapp}`}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400"
              >
                WhatsApp
              </a>
              <a
                href={`tel:${property.phone}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
              >
                Call
              </a>
              <a
                href={`mailto:${property.email}`}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-400"
              >
                Contact
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
