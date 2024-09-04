// app/admin/contacts/page.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import connectToDatabase from '../../lib/mongodb'; // Ensure this path is correct
// import Contact from '../../../models/Contact'; // Ensure this path is correct

export default function ContactPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        await connectToDatabase();
        const response = await fetch('/api/contact/getcontact'); // API route to fetch contacts
        const data = await response.json();
        console.log('Fetched contacts:', data); // Debugging
        setContacts(data);
      } catch (error) {
        console.error('Failed to fetch contacts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) {
    return <p className="text-2xl grid place-items-center h-[100%]">Loading...</p>;
  }

  return (
    <main className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Message Dashboard</h1>
      <Link href="/admin">Back to Dashboard</Link>
      
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 mt-12">
          {contacts.map((contact) => (
            <div key={contact._id} className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold">{contact.name}</h3>
              <p>Email: {contact.email}</p>
              <p>Phone: {contact.phone}</p>
              <p>Address: {contact.address}</p>
              <p>Message: {contact.message}</p>
              <p className="text-gray-500 text-sm">Created At: {new Date(contact.createdAt).toLocaleDateString()}</p>
              <div className="mt-4 flex gap-5">
                {/* <Link href={`/contact/${contact._id}`}>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded">View Details</button>
                </Link> */}
                <button
                  onClick={() => handleDelete(contact._id)}
                  className="bg-red-500 text-white py-2 px-4 rounded"
                >
                  Delete Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

// Define handleDelete function for deleting a contact
const handleDelete = async (id) => {
  const response = await fetch(`/api/delete-contact/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    setContacts(contacts.filter((contact) => contact._id !== id));
    alert('Contact deleted successfully!');
  } else {
    alert('Failed to delete contact.');
  }
};
