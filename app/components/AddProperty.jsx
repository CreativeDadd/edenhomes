"use client"

import { useState, useEffect } from 'react';
import { FaBed, FaBath } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // <-- Correct import

export default function AddProperty({ closeModal, agentId }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    discountPrice: '',
    discountPercent: '',
    imageUrl: '',
    location: '',
    bedrooms: '',
    bathrooms: '',
    kitchenImageUrl: '',
    frontImageUrl: '',
    compoundImageUrl: '',
    sittingRoomImageUrl: '',
    specialPlaceImageUrl: '',
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
          [imageType]: data.secure_url, // Set the uploaded image URL to the corresponding field
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

    if (!agentId) {
      alert('Agent ID is missing. Cannot submit the property.');
      return;
    }

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
        router.push("/"); // Redirect to the home page after submission
        closeModal();
      } else {
        const errorData = await response.json();
        alert(`Failed to submit property. Error: ${errorData.error}`);
      }
    } catch (error) {
      alert('An error occurred while submitting the property.');
    }
  };
  
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg overflow-hidden mt-4">
      <h1 className="text-3xl font-bold text-center mb-8">Add New Property</h1>

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

          {/*Image Upload */}
          <label className="flex flex-col">
            <span className="font-bold">Main Image</span>
            <input type="file" onChange={(e) => handleImageUpload(e, 'imageUrl')} required />
            {formData.imageUrl && <Image width={100} height={100} src={formData.imageUrl} alt="Main" className="mt-2 h-32 w-full object-cover" />}
          </label>
          <label className="flex flex-col">
            <span className="font-bold">Kitchen</span> 
            <input type="file" onChange={(e) => handleImageUpload(e, 'kitchenImageUrl')} required />
            {formData.kitchenImageUrl && <Image width={100} height={100} src={formData.kitchenImageUrl} alt="Main" className="mt-2 h-32 w-full object-cover" />}
          </label>
          <label className="flex flex-col">
            <span className="font-bold">Frontage Image</span>
            <input type="file" onChange={(e) => handleImageUpload(e, 'frontImageUrl')} required />
            {formData.frontImageUrl && <Image width={100} height={100} src={formData.frontImageUrl} alt="Main" className="mt-2 h-32 w-full object-cover" />}
          </label>
          <label className="flex flex-col">
            <span className="font-bold">Compound Views</span> 
            <input type="file" onChange={(e) => handleImageUpload(e, 'compoundImageUrl')} required />
            {formData.compoundImageUrl && <Image width={100} height={100} src={formData.compoundImageUrl} alt="Main" className="mt-2 h-32 w-full object-cover" />}
          </label>
          <label className="flex flex-col">
            <span className="font-bold">Sitting Room</span>
            <input type="file" onChange={(e) => handleImageUpload(e, 'sittingRoomImageUrl')} required />
            {formData.sittingRoomImageUrl && <Image width={100} height={100} src={formData.sittingRoomImageUrl} alt="Main" className="mt-2 h-32 w-full object-cover" />}
          </label>
          <label className="flex flex-col">
            <span className="font-bold">Special Place Image</span>
            <input type="file" onChange={(e) => handleImageUpload(e, 'specialPlaceImageUrl')} required />
            {formData.specialPlaceImageUrl && <Image width={100} height={100} src={formData.specialPlaceImageUrl} alt="Main" className="mt-2 h-32 w-full object-cover" />}
          </label>

          {/* Additional Image Uploads */}
          {/* Add similar image inputs for kitchen, front, compound, etc. */}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#ff7F50] text-white font-bold py-2 px-4 rounded-md"
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Add Property'}
          </button>
        </form>
      </div>
    </div>
  );
}
