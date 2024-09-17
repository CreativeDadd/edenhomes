// 'use client';

// import { useSession } from 'next-auth/react';
// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// export default function AgentDashboard() {
//   const { data: session } = useSession();
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     if (session) {
//       // Fetch the agent's properties from the API
//       fetch(`/api/agent/properties`)
//         .then((res) => res.json())
//         .then((data) => setProperties(data.properties));
//     }
//   }, [session]);

//   return (
//     <div className="container mx-auto p-8 mt-12">
//       <h2 className="text-4xl font-bold text-black mb-6">Agent Dashboard</h2>
//       <Link href="/agent/add-property">
//         <a className="bg-gradient-to-r from-[#FF7F50] to-[#FF4500] text-white py-2 px-6 rounded-md shadow-lg hover:shadow-xl transition mb-6 inline-block">
//           Add New Property
//         </a>
//       </Link>
//       <h3 className="text-2xl font-semibold text-black mt-6 mb-4">Your Properties</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {properties.length > 0 ? (
//           properties.map((property) => (
//             <div key={property._id} className="border border-gray-300 p-4 rounded-md shadow-md">
//               <h4 className="text-lg font-bold text-black mb-2">{property.title}</h4>
//               <img src={property.imageUrl} alt={property.title} className="w-full h-48 object-cover rounded-md mb-2" />
//               <div className="flex justify-between">
//                 <Link href={`/agent/edit-property/${property._id}`}>
//                   <a className="text-orange-500">Edit</a>
//                 </Link>
//                 <button
//                   onClick={() => handleDelete(property._id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">You have no properties listed yet.</p>
//         )}
//       </div>
//     </div>
//   );

//   async function handleDelete(propertyId) {
//     if (confirm('Are you sure you want to delete this property?')) {
//       const res = await fetch(`/api/agent/properties/${propertyId}`, { method: 'DELETE' });
//       if (res.ok) {
//         setProperties((prev) => prev.filter((p) => p._id !== propertyId));
//         alert('Property deleted successfully.');
//       } else {
//         alert('Failed to delete property.');
//       }
//     }
//   }
// }









// app/dashboard/agent.js
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { useState, useEffect } from 'react';

export default function AgentDashboard() {
  const [properties, setProperties] = useState([]);

  // Fetch properties specific to the agent
  useEffect(() => {
    const fetchProperties = async () => {
      const res = await fetch('/api/agent/properties');
      const data = await res.json();
      setProperties(data);
    };

    fetchProperties();
  }, []);

  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <div className="container mx-auto mt-16 p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-black">
        Agent Dashboard
      </h1>

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-700">
          My Properties
        </h2>

        <Link href="/agent/add-property">
          <button className="bg-gradient-to-r from-[#FF7F50] to-[#FF4500] text-white py-2 px-6 rounded-lg text-lg font-semibold hover:shadow-md transition duration-200">
            Add New Property
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property._id} className="border border-gray-200 rounded-lg p-4">
            <Image
              src={property.imageUrl}
              alt={property.title}
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">{property.title}</h3>
            <p className="text-gray-600">{property.description}</p>

            <div className="mt-4 flex justify-between">
              <Link href={`/agent/edit-property/${property._id}`}>
                <button className="bg-gray-800 text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-md transition duration-200">
                  Edit
                </button>
              </Link>

              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-md transition duration-200"
                onClick={() => handleDelete(property._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleLogout}
        className="mt-12 bg-black text-white py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-md transition duration-200"
      >
        Logout
      </button>
    </div>
  );
}

async function handleDelete(propertyId) {
  if (confirm('Are you sure you want to delete this property?')) {
    try {
      const response = await fetch(`/api/agent/properties/${propertyId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Property deleted successfully!');
        window.location.reload(); // Reload the page after deletion
      } else {
        alert('Failed to delete the property.');
      }
    } catch (error) {
      alert('An error occurred while deleting the property.');
    }
  }
}
