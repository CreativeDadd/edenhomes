// // components/AddProperty.jsx
// 'use client';

// import { useState, useEffect } from 'react';

// export default function AddProperty({ closeModal, agentId }) {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: '',
//     discountPrice: '',
//     discountPercent: '',
//     location: '',
//     bedrooms: '',
//     bathrooms: '',
//     images: {
//       kitchen: '',
//       front: '',
//       compound: '',
//       sittingRoom: '',
//       specialPlace: '',
//     },
//   });

//   useEffect(() => {
//     if (formData.price && formData.discountPrice) {
//       const discountPercent = (
//         ((formData.price - formData.discountPrice) / formData.price) * 100
//       ).toFixed(2);
//       setFormData((prev) => ({ ...prev, discountPercent }));
//     }
//   }, [formData.price, formData.discountPrice]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`/api/agents/${agentId}/properties`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         alert('Property submitted for approval');
//         closeModal(); // Close modal after submission
//       } else {
//         alert('Failed to submit property.');
//       }
//     } catch (error) {
//       alert('An error occurred while submitting the property.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
//       {/* Add form fields similar to your previous AddProperty component */}
//       {/* Include all the form data and handleImageUpload functionality */}
//       <button type="submit" className="bg-[#FF7F50] text-white py-3 rounded-md">
//         Submit for Approval
//       </button>
//     </form>
//   );
// }










// components/AddProperty.jsx
'use client';

import { useState, useEffect } from 'react';
import { FaBed, FaBath } from 'react-icons/fa';

export default function AddProperty({ closeModal, agentId }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    discountPrice: '',
    discountPercent: '',
    location: '',
    bedrooms: '',
    bathrooms: '',
    images: {
      kitchen: '',
      front: '',
      compound: '',
      sittingRoom: '',
      specialPlace: '',
    },
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (formData.price && formData.discountPrice) {
      const discountPercent = (
        ((formData.price - formData.discountPrice) / formData.price) * 100
      ).toFixed(2);
      setFormData((prev) => ({ ...prev, discountPercent }));
    }
  }, [formData.price, formData.discountPrice]);

  const handleImageUpload = async (e, imageType) => {
    setLoading(true);
    const file = e.target.files[0];
    const imageData = new FormData();
    imageData.append('file', file);
    imageData.append('upload_preset', 'gzk48mwa'); // Cloudinary preset

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/dxhwiufpc/image/upload`, {
        method: 'POST',
        body: imageData,
      });

      const data = await response.json();

      if (response.ok) {
        setFormData((prev) => ({
          ...prev,
          images: { ...prev.images, [imageType]: data.secure_url },
        }));
      } else {
        alert('Failed to upload image');
      }
    } catch (error) {
      alert('An error occurred during the image upload.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/agents/${agentId}/properties`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Property submitted for approval!');
        closeModal();
      } else {
        alert('Failed to submit property.');
      }
    } catch (error) {
      alert('An error occurred while submitting the property.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg overflow-hidden mt-24">
      <h1 className="text-3xl font-bold text-center mb-8">Add New Property</h1>

      {/* Scrollable container */}
      <div className="overflow-y-auto max-h-[500px]">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          {/* Title */}
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="border border-gray-300 p-3 rounded-md"
            required
          />

          {/* Description */}
          <textarea
            placeholder="Description (max 30 words)"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="border border-gray-300 p-3 rounded-md"
            maxLength={30}
            required
          />

          {/* Price */}
          <input
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="border border-gray-300 p-3 rounded-md"
            required
          />

          {/* Discount Price */}
          <input
            type="number"
            placeholder="Discount Price"
            value={formData.discountPrice}
            onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
            className="border border-gray-300 p-3 rounded-md"
          />

          {/* Display calculated discount percentage */}
          {formData.discountPercent && (
            <div className="text-green-500">
              Discount: {formData.discountPercent}%
            </div>
          )}

          {/* Location */}
          <input
            type="text"
            placeholder="Location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="border border-gray-300 p-3 rounded-md"
          />

          {/* Bedrooms */}
          <div className="flex items-center">
            <FaBed className="mr-2" />
            <input
              type="number"
              placeholder="Number of Beds"
              value={formData.bedrooms}
              onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
              className="border border-gray-300 p-3 rounded-md"
            />
          </div>

          {/* Bathrooms */}
          <div className="flex items-center">
            <FaBath className="mr-2" />
            <input
              type="number"
              placeholder="Number of Bathrooms"
              value={formData.bathrooms}
              onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
              className="border border-gray-300 p-3 rounded-md"
            />
          </div>

          {/* Image Uploads */}
          <label>Upload Kitchen Picture:</label>
          <input type="file" onChange={(e) => handleImageUpload(e, 'kitchen')} />
          
          <label>Upload Front Picture:</label>
          <input type="file" onChange={(e) => handleImageUpload(e, 'front')} />

          <label>Upload Compound Picture:</label>
          <input type="file" onChange={(e) => handleImageUpload(e, 'compound')} />

          <label>Upload Sitting Room Picture:</label>
          <input type="file" onChange={(e) => handleImageUpload(e, 'sittingRoom')} />

          <label>Upload Special Place Picture:</label>
          <input type="file" onChange={(e) => handleImageUpload(e, 'specialPlace')} />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-gradient-to-r from-[#FF7F50] to-red-500 text-white py-3 rounded-md text-lg font-semibold hover:shadow-lg transition duration-200"
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Submit Property'}
          </button>
        </form>
      </div>
    </div>
  );
}
