// app/components/SearchablePropertyList.jsx
'use client';

import { useState } from 'react';
import PropertyCard from './PropertyCard';

export default function SearchablePropertyList({ properties }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by location or title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-full max-w-sm"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No properties found</p>
        )}
      </div>
    </>
  );
}
