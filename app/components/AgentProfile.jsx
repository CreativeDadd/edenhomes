'use client';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AgentProfile() {
  const { data: session } = useSession();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchProperties() {
      const res = await fetch(`/api/agent/${session.user.email}/properties`);
      const data = await res.json();
      setProperties(data);
    }

    if (session) {
      fetchProperties();
    }
  }, [session]);

  const handleDelete = async (propertyId) => {
    if (confirm('Are you sure you want to delete this property?')) {
      await fetch(`/api/properties/${propertyId}`, {
        method: 'DELETE',
      });
      setProperties(properties.filter((property) => property._id !== propertyId));
    }
  };

  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg mt-12">
      <h1 className="text-3xl font-bold text-center text-black">Welcome, {session?.user.name}</h1>
      <div className="mt-6">
        <Link href="/agents/add-property" legacyBehavior>
          <a className="bg-gradient-to-r from-[#FF7F50] to-red-500 text-white py-2 px-4 rounded-md hover:shadow-lg">
            Add New Property
          </a>
        </Link>
        <Link href="/view-property" legacyBehavior>
          <a className="bg-gradient-to-r from-[#FF7F50] to-red-500 text-white py-2 px-4 rounded-md hover:shadow-lg">
            View ALL Serviced Properties
          </a>
        </Link>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">Your Property Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {properties.map((property) => (
            <div key={property._id} className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <Image
                src={property.imageUrl}
                alt={property.title}
                width={300}
                height={200}
                className="rounded-md"
              />
              <h3 className="text-xl font-bold text-gray-800 mt-4">{property.title}</h3>
              <p className="text-gray-600">{property.description}</p>
              <div className="mt-2">
                <span className="text-gray-700 font-semibold">Price: </span>${property.price}
              </div>
              <button
                onClick={() => handleDelete(property._id)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => signOut()}
        className="mt-8 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-black transition"
      >
        Logout
      </button>
    </div>
  );
}
