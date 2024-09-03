"use client"
// import LoginModal from '@/app/components/LoginModal';
// import { useState } from 'react';
// // import LoginModal from '../components/LoginModal'; // Adjust path as needed

// export default function LoginModalpage() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="container mx-auto p-8">
//       <button onClick={handleOpenModal} className="bg-blue-500 text-white px-4 py-2 rounded-md">
//         Open Login Modal
//       </button>
//       {/* Rendering LoginModal with correct props */}
//       <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
//     </div>
//   );
// }

// app/page.js or app/[route]/page.js

// import { useState } from 'react';
// import { useRouter } from 'next/navigation'; // Import from 'next/navigation'
// import LoginModal from '@/app/components/LoginModal'; // Adjust path as necessary

// export default function HomePage() {
//   const [isModalOpen, setModalOpen] = useState(true);
//   const router = useRouter();

//   const handleLoginSuccess = () => {
//     router.push('/admin');
//   };

//   const handleClose = () => {
//     setModalOpen(false);
//   };

//   return (
//     <div>
//       <h1>Welcome to the Homepage</h1>
//       <div className="container mx-auto p-8">
// //       <button onClick={handleOpenModal} className="bg-blue-500 text-white px-4 py-2 rounded-md">
// //         Open Login Modal
// //       </button>
// //       {/* Rendering LoginModal with correct props */}
// //       <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
// //     </div>
//       <LoginModal isOpen={isModalOpen} onClose={handleClose} onSuccess={handleLoginSuccess} />
//     </div>
//   );
// }







// app/admin/page.jsx
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function AdminPage() {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     async function fetchProperties() {
//       try {
//         const response = await fetch('/api/properties');
//         const data = await response.json();
//         setProperties(data);
//       } catch (error) {
//         console.error('Error fetching properties:', error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchProperties();
//   }, []);

//   const handleDelete = async (id) => {
//     const response = await fetch(`/api/delete-property/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       alert('Property deleted successfully!');
//       setProperties(properties.filter((property) => property._id !== id));
//     } else {
//       alert('Failed to delete property.');
//     }
//   };

//   return (
//     <main className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center mb-6">Admin Dashboard</h1>
//       {loading ? (
//         <p className="text-center">Loading...</p>
//       ) : properties.length === 0 ? (
//         <p className="text-center">No properties found.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {properties.map((property) => (
//             <div key={property._id} className="bg-white p-4 shadow-lg rounded-lg">
//               <h3 className="text-xl font-bold">{property.title}</h3>
//               <p>{property.description}</p>
//               <div className="mt-4 flex justify-between">
//                 <button
//                   onClick={() => router.push(`/view-property/${property._id}`)}
//                   className="bg-orange-500 text-white py-2 px-4 rounded"
//                 >
//                   View Details
//                 </button>
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







import { useState } from 'react';
import LoginModal from '@/app/components/LoginModal';

export default function LoginPage() {
  const [isModalOpen, setModalOpen] = useState(true);

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <LoginModal isOpen={isModalOpen} onClose={handleClose} />
    </div>
  );
}
