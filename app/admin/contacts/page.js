// // app/admin/contacts/page.js
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import connectToDatabase from '../../lib/mongodb'; // Ensure this path is correct
// // import Contact from '../../../models/Contact'; // Ensure this path is correct

// export default function ContactPage() {
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         await connectToDatabase();
//         const response = await fetch('/api/contact'); // API route to fetch contacts
//         const data = await response.json();
//         console.log('Fetched contacts:', data); // Debugging
//         setContacts(data);
//       } catch (error) {
//         console.error('Failed to fetch contacts:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchContacts();
//   }, []);

//   if (loading) {
//     return <p className="text-2xl grid place-items-center h-[100%]">Loading...</p>;
//   }

//   return (
//     <main className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center mb-6">Message Dashboard</h1>
//       <Link href="/admin">Back to Dashboard</Link>
      
//       {contacts.length === 0 ? (
//         <p>No contacts found.</p>
//       ) : (
//         <div className="grid grid-cols-1 gap-6 mt-12">
//           {contacts.map((contact) => (
//             <div key={contact._id} className="bg-white p-4 shadow-lg rounded-lg">
//               <h3 className="text-xl font-bold">{contact.name}</h3>
//               <p>Email: {contact.email}</p>
//               <p>Phone: {contact.phone}</p>
//               <p>Address: {contact.address}</p>
//               <p>Message: {contact.message}</p>
//               <p className="text-gray-500 text-sm">Created At: {new Date(contact.createdAt).toLocaleDateString()}</p>
//               <div className="mt-4 flex gap-5">
//                 {/* <Link href={`/contact/${contact._id}`}>
//                   <button className="bg-blue-500 text-white py-2 px-4 rounded">View Details</button>
//                 </Link> */}
//                 <button
//                   onClick={() => handleDelete(contact._id)}
//                   className="bg-red-500 text-white py-2 px-4 rounded"
//                 >
//                   Delete Contact
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </main>
//   );
// }

// // Define handleDelete function for deleting a contact
// const handleDelete = async (id) => {
//   const response = await fetch(`/api/delete-contact/${id}`, {
//     method: 'DELETE',
//   });

//   if (response.ok) {
//     setContacts(contacts.filter((contact) => contact._id !== id));
//     alert('Contact deleted successfully!');
//   } else {
//     alert('Failed to delete contact.');
//   }
// };



// 'use client';

// import { useState, useEffect } from 'react';

// export default function AdminContactsPage() {
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const response = await fetch('/api/contact'); // API route to fetch contacts
//         if (!response.ok) {
//           throw new Error('Failed to fetch contacts');
//         }
//         const data = await response.json();
//         setContacts(data);
//       } catch (error) {
//         console.error('Failed to fetch contacts:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchContacts();
//   }, []);

//   if (loading) {
//     return <p className="text-2xl grid place-items-center h-[100%]">Loading...</p>;
//   }

//   return (
//     <main className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center mb-6">Contact Messages</h1>
//       {contacts.length === 0 ? (
//         <p>No contacts found.</p>
//       ) : (
//         <div className="grid grid-cols-1 gap-6 mt-12">
//           {contacts.map((contact) => (
//             <div key={contact._id} className="bg-white p-4 shadow-lg rounded-lg">
//               <h3 className="text-xl font-bold">{contact.name}</h3>
//               <p><strong>Email:</strong> {contact.email}</p>
//               <p><strong>Phone:</strong> {contact.phone}</p>
//               <p><strong>Address:</strong> {contact.address}</p>
//               <p><strong>Message:</strong> {contact.message}</p>
//               <p><strong>Received At:</strong> {new Date(contact.createdAt).toLocaleString()}</p>
//             </div>
//           ))}
          
//           <button onClick={() => handleDelete(contact._id)} className="bg-red-500 text-white py-2 px-4 rounded">
//                   Delete Contact
//             </button>

//           </div>
//       )}
//     </main>
//   );
// }


// 'use client';

// import Link from 'next/link';
// import { useState, useEffect } from 'react';

// export default function AdminContactsPage() {
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [contactToDelete, setContactToDelete] = useState(null);
//   const [showConfirmDialog, setShowConfirmDialog] = useState(false);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const response = await fetch('/api/contact'); // API route to fetch contacts
//         if (!response.ok) {
//           throw new Error('Failed to fetch contacts');
//         }
//         const data = await response.json();
//         setContacts(data);
//       } catch (error) {
//         console.error('Failed to fetch contacts:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchContacts();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`/api/contact/${id}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         setContacts(contacts.filter((contact) => contact._id !== id));
//         alert('Contact deleted successfully!');
//       } else {
//         alert('Failed to delete contact.');
//       }
//     } catch (error) {
//       console.error('Error deleting contact:', error);
//       alert('An error occurred. Please try again later.');
//     } finally {
//       setShowConfirmDialog(false);
//       setContactToDelete(null);
//     }
//   };

//   const handleConfirmDelete = (id) => {
//     setContactToDelete(id);
//     setShowConfirmDialog(true);
//   };

//   const handleCancelDelete = () => {
//     setShowConfirmDialog(false);
//     setContactToDelete(null);
//   };

//   if (loading) {
//     return <p className="text-2xl grid place-items-center h-[100%]">Loading...</p>;
//   }

//   return (
//     <main className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center mb-6">Contact Messages</h1>
//       <Link href="/admin">Back To Admin Dashboard</Link>
//       {contacts.length === 0 ? (
//         <p>No contacts found.</p>
//       ) : (
//         <div className="grid grid-cols-1 gap-6 mt-12">
//           {contacts.map((contact) => (
//             <div key={contact._id} className="bg-white p-4 shadow-lg rounded-lg">
//               <h3 className="text-xl font-bold">{contact.name}</h3>
//               <p><strong>Email:</strong> {contact.email}</p>
//               <p><strong>Phone:</strong> {contact.phone}</p>
//               <p><strong>Address:</strong> {contact.address}</p>
//               <p><strong>Message:</strong> {contact.message}</p>
//               <p><strong>Received At:</strong> {new Date(contact.createdAt).toLocaleString()}</p>
//               <button
//                 onClick={() => handleConfirmDelete(contact._id)}
//                 className="bg-red-500 text-white py-2 px-4 rounded mt-4"
//               >
//                 Delete Message
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {showConfirmDialog && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
//             <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
//             <p>Are you sure you want to delete this contact?</p>
//             <div className="mt-4 flex justify-end gap-4">
//               <button
//                 onClick={() => handleDelete(contactToDelete)}
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

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contactToDelete, setContactToDelete] = useState(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('/api/contact'); // API route to fetch contacts
        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Failed to fetch contacts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setContacts(contacts.filter((contact) => contact._id !== id));
        alert('Contact deleted successfully!');
      } else {
        alert('Failed to delete contact.');
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setShowConfirmDialog(false);
      setContactToDelete(null);
    }
  };

  const handleConfirmDelete = (id) => {
    setContactToDelete(id);
    setShowConfirmDialog(true);
  };

  const handleCancelDelete = () => {
    setShowConfirmDialog(false);
    setContactToDelete(null);
  };

  if (loading) {
    return <p className="text-2xl grid place-items-center h-[100%]">Loading...</p>;
  }

  return (
    <main className="container mx-auto p-6 max-w-3xl md:max-w-[75%]">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Messages</h1>
      <Link href="/admin" className="text-blue-500 underline mb-6 inline-block">
        Back To Admin Dashboard
      </Link>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 mt-8">
          {contacts.map((contact) => (
            <div key={contact._id} className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">{contact.name}</h3>
              <p className="text-gray-600"><strong>Email:</strong> {contact.email}</p>
              <p className="text-gray-600"><strong>Phone:</strong> {contact.phone}</p>
              <p className="text-gray-600"><strong>Address:</strong> {contact.address}</p>
              <p className="text-gray-600"><strong>Message:</strong> {contact.message}</p>
              <p className="text-gray-600"><strong>Received At:</strong> {new Date(contact.createdAt).toLocaleString()}</p>
              
              {/* WhatsApp CTA Button */}
              <a
                href={`https://wa.me/${contact.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white py-2 px-4 rounded inline-block mt-4"
              >
                Contact on WhatsApp
              </a>

              {/* Delete Button */}
              <button
                onClick={() => handleConfirmDelete(contact._id)}
                className="bg-red-500 text-white py-2 px-4 rounded mt-4 ml-4"
              >
                Delete Message
              </button>
            </div>
          ))}
        </div>
      )}

      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
            <p>Are you sure you want to delete this contact?</p>
            <div className="mt-4 flex justify-end gap-4">
              <button
                onClick={() => handleDelete(contactToDelete)}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Yes
              </button>
              <button
                onClick={handleCancelDelete}
                className="bg-green-500 text-white py-2 px-4 rounded"
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
