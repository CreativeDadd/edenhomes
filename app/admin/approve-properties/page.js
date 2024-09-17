'use client';

import { useEffect, useState } from 'react';

export default function ApproveProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch unapproved properties
    fetch('/api/admin/unapproved-properties')
      .then((res) => res.json())
      .then((data) => setProperties(data.properties));
  }, []);

  const handleApprove = async (id) => {
    const res = await fetch(`/api/admin/approve-property/${id}`, {
      method: 'POST',
    });

    if (res.ok) {
      setProperties((prev) => prev.filter((property) => property._id !== id));
      alert('Property approved successfully.');
    } else {
      alert('Failed to approve property.');
    }
  };

  return (
    <div className="container mx-auto p-8 mt-12 max-w-4xl">
      <h2 className="text-4xl font-bold text-black mb-6">Approve Properties</h2>
      {properties.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {properties.map((property) => (
            <div key={property._id} className="border border-gray-300 p-4 rounded-md">
              <h3 className="text-xl font-bold text-black mb-2">{property.title}</h3>
              <img src={property.imageUrl} alt={property.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <button
                onClick={() => handleApprove(property._id)}
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
              >
                Approve
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No properties awaiting approval.</p>
      )}
    </div>
  );
}









// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function ApproveProperties() {
//   const [properties, setProperties] = useState([]);
//   const [error, setError] = useState('');
//   const router = useRouter();

//   useEffect(() => {
//     // Fetch unapproved properties
//     const fetchProperties = async () => {
//       try {
//         const res = await fetch('/api/admin/unapproved-properties');
//         if (!res.ok) throw new Error('Failed to fetch properties');
//         const data = await res.json();
//         setProperties(data.properties);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchProperties();
//   }, []);

//   const approveProperty = async (propertyId) => {
//     try {
//       const res = await fetch(`/api/admin/approve-property`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ propertyId }),
//       });

//       if (!res.ok) throw new Error('Failed to approve property');

//       // Update UI after approval
//       setProperties(properties.filter((property) => property._id !== propertyId));
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (error) {
//     return <p className="text-red-500">{error}</p>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-bold text-black mb-6">Approve Properties</h2>
//       {properties.length === 0 ? (
//         <p className="text-gray-600">No pending properties.</p>
//       ) : (
//         <ul className="space-y-4">
//           {properties.map((property) => (
//             <li key={property._id} className="p-4 bg-white shadow-md rounded-md">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <h3 className="text-lg font-bold">{property.title}</h3>
//                   <p className="text-sm text-gray-500">Location: {property.location}</p>
//                   <p className="text-sm text-gray-500">Price: ${property.price}</p>
//                 </div>
//                 <button
//                   onClick={() => approveProperty(property._id)}
//                   className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
//                 >
//                   Approve
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
