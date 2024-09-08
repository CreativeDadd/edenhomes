// // // app/admin/page.js
// // export default function AdminPage() {
// //     return (
// //       <div className="container mx-auto p-8">
// //         <h2 className="text-2xl font-bold mb-4">Admin - Manage Properties</h2>
// //         <p>List of properties with delete options...</p>
// //         {/* Implement CRUD operations here */}
// //       </div>
// //     );
// //   }
  


// import { connectToDatabase } from '../lib/mongodb';
// import Property from '../models/Property';
// import Link from 'next/link';

// export default function Admin({ properties }) {
//   const handleDelete = async (id) => {
//     const response = await fetch(`/api/delete-property/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       alert('Property deleted successfully!');
//     } else {
//       alert('Failed to delete property.');
//     }
//   };

//   return (
//     <main className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center mb-6">Admin Dashboard</h1>
//       <div className="grid grid-cols-1 gap-6">
//         {properties.map((property) => (
//           <div key={property._id} className="bg-white p-4 shadow-lg rounded-lg">
//             <h3 className="text-xl font-bold">{property.title}</h3>
//             <p>{property.description}</p>
//             <div className="mt-4 flex justify-between">
//               <Link href={`/view-property/${property._id}`}>
//                 <button className="bg-orange-500 text-white py-2 px-4 rounded">View Details</button>
//               </Link>
//               <button onClick={() => handleDelete(property._id)} className="bg-red-500 text-white py-2 px-4 rounded">
//                 Delete Property
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

// export async function getServerSideProps() {
//   await connectToDatabase();
//   const properties = await Property.find({});
//   return {
//     props: {
//       properties: JSON.parse(JSON.stringify(properties)),
//     },
//   };
// }




// 'use client'

// // app/admin/page.js
// import { useState, useEffect } from 'react';
// import Link from 'next/link';

// export default function AdminPage() {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const response = await fetch('/api/properties'); // API route to fetch properties
//         const data = await response.json();
//         console.log('Fetched properties:', data); // Add this line to debug
//         setProperties(data);
//       } catch (error) {
//         console.error('Failed to fetch properties:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchProperties();
//   }, []);
  

//   const handleDelete = async (id) => {
//     const response = await fetch(`/api/delete-property/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       setProperties(properties.filter((property) => property._id !== id));
//       alert('Property deleted successfully!');
//     } else {
//       alert('Failed to delete property.');
//     }
//   };

//   if (loading) {
//     return <p className="text-2xl grid place-items-center h-[100%]">Loading...</p>;
//   }

//   return (
//     <main className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center mb-6">Admin Dashboard</h1>
//       <div>
//         <Link href="/add-property" className="my-6 sm:text-xl font-semibold">
//         <button className="bg-green-500 text-white py-2 px-4 rounded">+ADD NEW PROPERTY</button>
//         </Link> 
//         <Link href="/admin/contacts" className="my-6 sm:text-xl font-semibold">
//           <button className="bg-green-500 text-white py-2 px-4 rounded">Check Messages</button>
//         </Link> 
//       </div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : properties.length === 0 ? (
//         <p>No properties found.</p>
//       ) : (
//         <div className="grid grid-cols-1 gap-6 border border-red-300 border-solid mt-12">
//           {properties.map((property) => (
//             <div key={property._id} className="bg-white p-4 shadow-lg rounded-lg">
//               <h3 className="text-xl font-bold">{property.title}</h3>
//               <p>{property.description}</p>
//               <div className="mt-4 flex justify-between">
//                 <Link href={`/view-property/${property._id}`}>
//                   <button className="bg-[#ff4500] text-white py-2 px-4 rounded">View Details</button>
//                 </Link>
//                 <button
//                   onClick={() => handleDelete(property._id)}
//                   className="bg-red-500 text-white py-2 px-4 rounded"
//                 >
//                   Delete Property
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </main>
//   );
  
// }






// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';

// export default function AdminPage() {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [propertyToDelete, setPropertyToDelete] = useState(null);
//   const [showConfirmDialog, setShowConfirmDialog] = useState(false);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const response = await fetch('/api/properties'); // API route to fetch properties
//         if (!response.ok) {
//           throw new Error('Failed to fetch properties');
//         }
//         const data = await response.json();
//         setProperties(data);
//       } catch (error) {
//         console.error('Failed to fetch properties:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProperties();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`/api/properties/${id}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         setProperties(properties.filter((property) => property._id !== id));
//         alert('Property deleted successfully!');
//       } else {
//         alert('Failed to delete property.');
//       }
//     } catch (error) {
//       console.error('Error deleting property:', error);
//       alert('An error occurred. Please try again later.');
//     } finally {
//       setShowConfirmDialog(false);
//       setPropertyToDelete(null);
//     }
//   };

//   const handleConfirmDelete = (id) => {
//     setPropertyToDelete(id);
//     setShowConfirmDialog(true);
//   };

//   const handleCancelDelete = () => {
//     setShowConfirmDialog(false);
//     setPropertyToDelete(null);
//   };

//   if (loading) {
//     return <p className="text-2xl grid place-items-center h-[100%]">Loading...</p>;
//   }

//   return (
//     <main className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center mb-6">Admin Dashboard</h1>
//       <div className="flex gap-4 mb-6">
//         <Link href="/add-property">
//           <button className="bg-green-500 text-white py-2 px-4 rounded">+ADD NEW PROPERTY</button>
//         </Link>
//         <Link href="/admin/contacts">
//           <button className="bg-green-500 text-white py-2 px-4 rounded">Check Messages</button>
//         </Link>
//       </div>
//       {properties.length === 0 ? (
//         <p>No properties found.</p>
//       ) : (
//         <div className="grid grid-cols-1 gap-6 border border-red-300 border-solid mt-12">
//           {properties.map((property) => (
//             <div key={property._id} className="bg-white p-4 shadow-lg rounded-lg">
//               <h3 className="text-xl font-bold">{property.title}</h3>
//               <p>{property.description}</p>
//               <div className="mt-4 flex justify-between">
//                 <Link href={`/view-property/${property._id}`}>
//                   <button className="bg-[#ff4500] text-white py-2 px-4 rounded">View Details</button>
//                 </Link>
//                 <button
//                   onClick={() => handleConfirmDelete(property._id)}
//                   className="bg-red-500 text-white py-2 px-4 rounded"
//                 >
//                   Delete Property
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {showConfirmDialog && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
//             <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
//             <p>Are you sure you want to delete this property?</p>
//             <div className="mt-4 flex justify-end gap-4">
//               <button
//                 onClick={() => handleDelete(propertyToDelete)}
//                 className="bg-red-500 text-white py-2 px-4 rounded"
//               >
//                 Yes
//               </button>
//               <button
//                 onClick={handleCancelDelete}
//                 className="bg-green-500 text-white py-2 px-4 rounded"
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }












'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [propertyToDelete, setPropertyToDelete] = useState(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/properties');
        if (!response.ok) throw new Error('Failed to fetch properties');
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Failed to fetch properties:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/properties/${id}`, { method: 'DELETE' });
      if (response.ok) {
        setProperties(properties.filter((property) => property._id !== id));
        alert('Property deleted successfully!');
      } else {
        alert('Failed to delete property.');
      }
    } catch (error) {
      console.error('Error deleting property:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setShowConfirmDialog(false);
      setPropertyToDelete(null);
    }
  };

  const handleConfirmDelete = (id) => {
    setPropertyToDelete(id);
    setShowConfirmDialog(true);
  };

  const handleCancelDelete = () => {
    setShowConfirmDialog(false);
    setPropertyToDelete(null);
  };

  if (loading) {
    return <p className="text-2xl grid place-items-center h-[100vh]">Loading...</p>;
  }

  return (
    <main className="container mx-auto p-6 mt-16">
      <h1 className="text-4xl font-bold text-center mb-12">Admin Dashboard</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
        <Link href="/add-property">
          <button className="bg-[#ff4500] hover:bg-[#e63e00] text-white py-3 px-6 rounded-full transition duration-300">
            + ADD NEW PROPERTY
          </button>
        </Link>
        <Link href="/add-blog">
          <button className="hover:bg-[#ff4500]  hover:text-white py-3 px-6 rounded-full border-[#ff4500] text-[#ff4500] bg-white border  transition duration-300">
            + Add New Blog
          </button>
        </Link>
        <Link href="/admin/blogs">
          <button className="hover:bg-[#ff4500]  hover:text-white py-3 px-6 rounded-full border-[#ff4500] text-[#ff4500] bg-white border  transition duration-300">
            Update Blogs
          </button>
        </Link>
        <Link href="/admin/contacts">
          <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full transition duration-300">
            Check Messages
          </button>
        </Link>
      </div>

      {properties.length === 0 ? (
        <p className="text-center text-lg">No properties found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4">{property.title}</h3>
              <p className="text-gray-700 mb-6">{property.description}</p>
              <div className="flex justify-between items-center">
                <Link href={`/view-property/${property._id}`}>
                  <button className="bg-blue-800 hover:bg-[#e63e00] text-white py-2 px-4 rounded-full transition duration-300">
                    View Details
                  </button>
                </Link>
                <button
                  onClick={() => handleConfirmDelete(property._id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full transition duration-300"
                >
                  Delete Property
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-6">Confirm Deletion</h3>
            <p className="text-gray-700 mb-6">Are you sure you want to delete this property?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => handleDelete(propertyToDelete)}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg transition duration-300"
              >
                Yes
              </button>
              <button
                onClick={handleCancelDelete}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg transition duration-300"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
