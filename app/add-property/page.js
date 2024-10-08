// app/add-property/page.js
'use client';

import { useState, useEffect } from 'react';
import { FaBed, FaBath } from 'react-icons/fa';
import Image from 'next/image';
import { CldImage } from 'next-cloudinary';



export default function AddProperty() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    discountPrice: '',
    discountPercent: '',
    imageUrl: '', // Main image
    location: '',
    bedrooms: '',
    bathrooms: '',
    kitchenImageUrl: '', // Separate field for kitchen image
    frontImageUrl: '', // Separate field for front image
    compoundImageUrl: '', // Separate field for compound image
    sittingRoomImageUrl: '', // Separate field for sitting room image
    specialPlaceImageUrl: '', // Separate field for special place image
  });

  const [loading, setLoading] = useState(false);

  // Function to handle image upload
  const handleImageUpload = async (e, field) => {
    setLoading(true);
    const file = e.target.files[0];
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('upload_preset', 'gzk48mwa');

    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/dxhwiufpc/image/upload', {
        method: 'POST',
        body: uploadData,
      });

      const data = await response.json();

      if (response.ok) {
        setFormData((prev) => ({ ...prev, [field]: data.secure_url })); // Set correct image URL
      } else {
        alert('Failed to upload image');
      }
    } catch (error) {
      alert('An error occurred during image upload');
    } finally {
      setLoading(false);
    }

  };

  
  useEffect(() => {
    if (formData.price && formData.discountPrice) {
      const discountPercent = (
        ((formData.price - formData.discountPrice) / formData.price) * 100
      ).toFixed(2);
      setFormData((prev) => ({ ...prev, discountPercent }));
    }
  }, [formData.price, formData.discountPrice]);




  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const router = useRouter();


    // Check for missing required fields and alert the user if found
    for (const field in formData) {
      if (!formData[field] && field !== 'specialPlaceImageUrl') {
        alert(`Please fill in the ${field} field.`);
        return;
      }
    }

    try {
      const response = await fetch('/api/add-property', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Property added successfully!');

        // Reset form
        setFormData({
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
      } else {
        const { message } = await response.json();
        alert(`Failed to add property. Error: ${message}`);
      }
    } catch (error) {
      alert('An error occurred while adding the property.');
    }
  };

  return (
    <div className="container max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg mt-24">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Add New Property</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        {/* Title, description, price, discountPrice, location inputs */}
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="border border-gray-300 p-3 rounded-md"
          required
        />
        <textarea
          placeholder="Description (max 30 words)"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="border border-gray-300 p-3 rounded-md"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="border border-gray-300 p-3 rounded-md"
          required
        />
        <input
          type="number"
          placeholder="Discount Price"
          value={formData.discountPrice}
          onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
          className="border border-gray-300 p-3 rounded-md"
          required
        />
        {/* <input
          type="number"
          placeholder="Discount Percent"
          value={formData.discountPercent}
          onChange={(e) => setFormData({ ...formData, discountPercent: e.target.value })}
          className="border border-gray-300 p-3 rounded-md"
          required
        /> */}
        {/* Display calculated discount percentage */}
        {formData.discountPercent && (
            <div className="text-green-500">
              Discount: {formData.discountPercent}%
            </div>
          )}
        <input
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="border border-gray-300 p-3 rounded-md"
          required
        />

        {/* Bedrooms, bathrooms inputs */}
        <div className="flex items-center">
          <FaBed className="mr-2" />
          <input
            type="number"
            placeholder="Number of Beds"
            value={formData.bedrooms}
            onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
            className="border border-gray-300 p-3 rounded-md"
            required
          />
        </div>
        <div className="flex items-center">
          <FaBath className="mr-2" />
          <input
            type="number"
            placeholder="Number of Bathrooms"
            value={formData.bathrooms}
            onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
            className="border border-gray-300 p-3 rounded-md"
            required
          />
        </div>

        {/* Main image upload */}
        <label className="flex flex-col">
          <span className="font-bold">Main Image</span>
          <input type="file" onChange={(e) => handleImageUpload(e, 'imageUrl')} required />
          {formData.imageUrl && <CldImage width={100} height={100} src={formData.imageUrl} alt="Main" className="mt-2 h-32 w-full object-cover" />}
        </label>

        {/* Additional image uploads */}
        <label className="flex flex-col">
          <span className="font-bold">Kitchen Image</span>
          <input type="file" onChange={(e) => handleImageUpload(e, 'kitchenImageUrl')} required />
          {formData.kitchenImageUrl && (
            <Image width={100} height={100} src={formData.kitchenImageUrl} alt="Kitchen" className="mt-2 h-32 w-full object-cover" />
          )}
        </label>
        <label className="flex flex-col">
          <span className="font-bold">Front Image</span>
          <input type="file" onChange={(e) => handleImageUpload(e, 'frontImageUrl')} required />
          {formData.frontImageUrl && (
            <Image width={100} height={100} src={formData.frontImageUrl} alt="Front" className="mt-2 h-32 w-full object-cover" />
          )}
        </label>
        <label className="flex flex-col">
          <span className="font-bold">Compound Image</span>
          <input type="file" onChange={(e) => handleImageUpload(e, 'compoundImageUrl')} required />
          {formData.compoundImageUrl && (
            <Image width={100} height={100} src={formData.compoundImageUrl} alt="Compound" className="mt-2 h-32 w-full object-cover" />
          )}
        </label>
        <label className="flex flex-col">
          <span className="font-bold">Sitting Room Image</span>
          <input type="file" onChange={(e) => handleImageUpload(e, 'sittingRoomImageUrl')} required />
          {formData.sittingRoomImageUrl && (
            <Image width={100} height={100} src={formData.sittingRoomImageUrl} alt="Sitting Room" className="mt-2 h-32 w-full object-cover" />
          )}
        </label>
        <label className="flex flex-col">
          <span className="font-bold">Special Place Image (Optional)</span>
          <input type="file" onChange={(e) => handleImageUpload(e, 'specialPlaceImageUrl')} />
          {formData.specialPlaceImageUrl && (
            <CldImage width={100} height={100} src={formData.specialPlaceImageUrl} alt="Special Place" className="mt-2 h-32 w-full object-cover" />
            
          )}
        </label>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-md text-white font-bold ${
            loading ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'
          }`}
        >
          {loading ? 'Uploading...' : 'Add Property'}
        </button>
      </form>
    </div>
  );
}
