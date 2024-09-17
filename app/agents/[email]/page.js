"use client"

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function AgentProfilePage({ params }) {
  const { email } = params; // Dynamic email from the route
  const [agent, setAgent] = useState(null);
  const [properties, setProperties] = useState([]);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    async function fetchAgentData() {
      try {
        const res = await fetch(`/api/agents/${email}`);
        const data = await res.json();
        setAgent(data.agent);
        setProperties(data.properties);
      } catch (err) {
        console.error(err);
        router.push('/404'); // Redirect to 404 if agent not found
      }
    }

    if (email) {
      fetchAgentData();
    }
  }, [email, router]);

  if (!session || session.user.email !== email) {
    router.push('/auth/signin');
    return null;
  }

  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg mt-12">
      {agent ? (
        <>
          <h1 className="text-3xl font-bold text-center text-black">Welcome, {agent.name}</h1>
          <div className="mt-6">
            <p>Email: {agent.email}</p>
            <p>Phone: {agent.phone}</p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Your Property Listings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {properties.length > 0 ? (
              properties.map((property) => (
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
                  <p className="text-gray-700 font-semibold">Price: ${property.price}</p>
                  <p className="text-sm text-gray-500">
                    Status: {property.isApproved ? 'Approved' : 'Pending Approval'}
                  </p>
                </div>
              ))
            ) : (
              <p>No properties listed yet.</p>
            )}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
