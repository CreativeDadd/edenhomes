'use client'
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AgentDashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session) {
      router.push('/auth/signin');
      return;
    }

    if (session.user.role !== 'agent') {
      router.push('/'); // Redirect if not an agent
      return;
    }

    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/properties'); // Adjust API endpoint as needed
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
  }, [session, router]);

  if (loading) {
    return <p className="grid place-items-center h-full mt-24">Loading...</p>;
  }

  return (
    <main className="container mx-auto p-6 mt-16">
      <h1 className="text-4xl font-bold text-center mb-12">Agent Dashboard</h1>
      {/* <Link href="">Back to AgentDashboard</Link> */}

      <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
        <Link href="/agents/add-property">
          <button className="bg-[#ff4500] hover:bg-[#e63e00] text-white py-3 px-6 rounded-full transition duration-300">
            + ADD NEW PROPERTY
          </button>
        </Link>
        <Link href="/agent/view-reports">
          <button className="hover:bg-[#ff4500] hover:text-white py-3 px-6 rounded-full border-[#ff4500] text-[#ff4500] bg-white border transition duration-300">
            View Reports
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
                <Link href={`/agents/view-property/${property._id}`}>
                  <button className="bg-blue-800 hover:bg-[#e63e00] text-white py-2 px-4 rounded-full transition duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )
    }
    </main>
  )
}
