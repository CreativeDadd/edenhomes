// // app/properties/page.js
// import PropertyCard from '../components/PropertyCard';

// const properties = [
//   // Hardcoded properties for now
//   {
//     id: 1,
//     title: 'Luxury Villa in Lagos',
//     description: 'A beautiful luxury villa with a stunning view of the city.',
//     imageUrl: '/images/villa.jpg',
//     mainPrice: '₦45,000,000',
//     discountedPrice: '₦50,000,000',
//     discountPercent: 10,
//   },
//   // Add more properties here
// ];

// export default function PropertiesPage() {
//   return (
//     <div className="container mx-auto p-8">
//       <div className="flex justify-end mb-4">
//         <button className="bg-orange-500 text-white px-4 py-2 rounded-md" onClick={() => alert('Login Modal')}>
//           Log In
//         </button>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {properties.map((property) => (
//           <PropertyCard key={property.id} property={property} />
//         ))}
//       </div>
//     </div>
//   );
// }











'use client'

import { useState } from 'react';
import PropertyCard from '../components/PropertyCard';

const properties = [
  {
    id: 1,
    title: 'Luxury Villa in Lagos',
    description: 'A beautiful luxury villa with a stunning view of the city.',
    imageUrl: '/images/villa.jpg',
    mainPrice: '₦45,000,000',
    discountedPrice: '₦50,000,000',
    discountPercent: 10,
    location: 'Lagos',
  },
  // Add more properties with location here
];

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-8 mt-12">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by location or title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-full max-w-sm"
        />
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md ml-4" onClick={() => alert('Login Modal')}>
          Log In
        </button>
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
    </div>
  );
}
