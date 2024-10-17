'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AddProperty from '@/app/components/AddProperty';
import Link from 'next/link';
import Image from 'next/image';

export default function AgentDashboard({ params }) {
  const { agentId } = params;
  const [agentData, setAgentData] = useState(null);
  const [properties, setProperties] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loadingProperties, setLoadingProperties] = useState(true);
  const [propertyToDelete, setPropertyToDelete] = useState(null); // For delete confirmation
  const router = useRouter();

  useEffect(() => {
    async function fetchAgentData() {
      try {
        const response = await fetch(`/api/agents/${agentId}`);
        if (response.ok) {
          const data = await response.json();
          setAgentData(data);
        } else {
          router.push('/404');
        }
      } catch (error) {
        console.error('Error fetching agent data:', error);
      }
    }

    async function fetchAgentProperties() {
      try {
        const response = await fetch(`/api/agents/${agentId}/properties`);
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }

        const data = await response.text();
        if (data) {
          setProperties(JSON.parse(data));
        } else {
          setProperties([]);
        }
      } catch (error) {
        console.error('Error fetching agent properties:', error);
        setProperties([]);
      } finally {
        setLoadingProperties(false);
      }
    }

    fetchAgentData();
    fetchAgentProperties();
  }, [agentId, router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/auth/signin');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Handle delete confirmation
  const handleDeleteConfirm = async (id) => {
    try {
      const response = await fetch(`/api/properties/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to delete property: ${response.status} - ${errorData.message}`);
      }

      alert('Property deleted successfully');
      router.refresh(); // Refresh to update the list of properties
    } catch (error) {
      console.error('Error deleting property:', error.message);
      alert(`Error deleting property: ${error.message}`);
    } finally {
      setPropertyToDelete(null); // Close modal after operation
    }
  };

  // Handle delete modal
  const openDeleteModal = (propertyId) => setPropertyToDelete(propertyId);
  const closeDeleteModal = () => setPropertyToDelete(null);

  if (!agentData) {
    return <div>Loading agent data...</div>;
  }

  return (
    <div className="p-4 mt-16">
      <h1 className="text-2xl font-bold">Welcome, {agentData.name}!</h1>
      <p>Email: {agentData.email}</p>

      <button
        className="bg-red-500 text-white p-2 rounded-md mt-4"
        onClick={handleLogout}
      >
        Logout
      </button>

      <button
        className="bg-blue-500 text-white p-2 rounded-md mt-4 ml-4"
        onClick={openModal}
      >
        Add New Property
      </button>

      {showModal && (
        <div className="bg-gray-600 bg-opacity-50 sm:fixed inset-0 flex items-center justify-center z-50 mt-12">
          <div className="bg-white p-2 rounded-lg shadow-lg max-w-lg">
            <AddProperty agentId={agentId} />
            <button
              className="bg-gray-300 text-black p-2 rounded-md mt-4"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <h2 className="text-xl font-bold mt-8">Your Properties</h2>

      {loadingProperties ? (
        <div className="text-center text-gray-500">Loading properties...</div>
      ) : properties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property._id} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{property.title}</h3>
              <p className="text-gray-600 mb-4">Detail: {property.description}</p>
              <Image
                src={property.imageUrl}
                alt="Property image"
                width={150}
                height={150}
                className="rounded-md"
              />
              <p className="text-gray-700 mt-4">
                <span className="font-bold">Price:</span> ₦{property.discountPrice} (Discount: {property.discountPercent}%)
              </p>
              <p className="text-gray-700 mt-2">
                <span className="font-bold">Status:</span>{' '}
                <span
                  className={
                    property.status === 'pending'
                      ? 'text-yellow-500'
                      : property.status === 'approved'
                      ? 'text-green-500'
                      : 'text-red-500'
                  }
                >
                  {property.status === 'pending' ? 'Awaiting Approval' : property.status}
                </span>
              </p>

              <div className="flex space-x-4 mt-4">
                {/* <button
                  className="bg-yellow-500 text-white py-1 px-2 rounded-md"
                  onClick={() => router.push(`/admin/update-property/edit/${property._id}`)}
                >
                  Edit
                </button> */}

                <button
                  className="bg-red-500 text-white py-1 px-2 rounded-md"
                  onClick={() => openDeleteModal(property._id)}
                >
                  Delete
                </button>

                <button
                  className="bg-blue-500 text-white py-1 px-2 rounded-md"
                  onClick={() => router.push(`/view-property/${property._id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No properties available.</div>
      )}

      {/* Delete Confirmation Modal */}
      {propertyToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Are you sure you want to delete{' '}
              <span className="text-blue-800 underline">&quot;{properties.find(p => p._id === propertyToDelete)?.title}&quot;</span>?
            </h3>
            <p className="mb-4 text-red-600 font-bold">This action is not reversible!</p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 text-black py-1 px-3 rounded-md"
                onClick={closeDeleteModal}
              >
                No
              </button>
              <button
                className="bg-red-500 text-white py-1 px-3 rounded-md"
                onClick={() => handleDeleteConfirm(propertyToDelete)}
              >
                Delete Property
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
