
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const PropertyCard = ({ property }) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

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
      // Optionally, update the UI here (e.g., remove the property from the list)
      router.refresh(); // Refresh the page or update state after successful deletion
    } catch (error) {
      console.error('Error deleting property:', error.message);
      alert(`Error deleting property: ${error.message}`);
    } finally {
      setShowModal(false); // Close modal after operation
    }
  };

  // Function to open the delete confirmation modal
  const handleDeleteClick = () => {
    setShowModal(true);
  };

  // Function to close the delete confirmation modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center">
        <Image
          width={100}
          height={100}
          src={property.imageUrl}
          alt={property.title}
          className="w-24 h-24 object-cover rounded-md mr-4"
        />
        <div className="flex-1">
          <h2 className="font-bold text-lg">{property.title}</h2>
          <h2 className="font-bold">₦{property.discountPrice}</h2>
          <div className="flex space-x-4 mt-2">
          <button
                className="bg-yellow-500 text-white py-1 px-2 rounded-md"
                onClick={() => router.push(`/admin/update-property/edit/${property._id}`)}
              >
                Edit this Property
              </button>

            <button
              className="bg-red-500 text-white py-1 px-2 rounded-md"
              onClick={handleDeleteClick}
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
      </div>

      {/* Warning Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Are you sure you want to delete{' '}
              <span className="text-blue-800 underline">&quot;{property.title}&quot;</span>?
            </h3>
            <p className="mb-4 text-red-600 font-bold">This action is not reversible!</p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 text-black py-1 px-3 rounded-md"
                onClick={closeModal}
              >
                No
              </button>
              <button
                className="bg-red-500 text-white py-1 px-3 rounded-md"
                onClick={() => handleDeleteConfirm(property._id)}
              >
                Delete Property
              </button>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyCard;
