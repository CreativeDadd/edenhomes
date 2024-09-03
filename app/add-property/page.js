// // app/add-property/page.js
// import AddPropertyForm from '../components/AddPropertyForm';

// export default function AddPropertyPage() {
//   return (
//     <div className="container mx-auto p-8">
//       <h2 className="text-2xl font-bold mb-4">Add New Property</h2>
//       <AddPropertyForm />
//     </div>
//   );
// }


'use client';
import { useState } from 'react';

export default function AddProperty() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    discountPrice: '',
    discountPercent: '',
    imageUrl: '',
    location: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/add-property', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Property added successfully!');
    } else {
      alert('Failed to add property.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container max-w-[756px] mx-auto p-6">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-6">Add New Property</h1>
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="border border-gray-300 p-2 rounded"
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="number"
          placeholder="Discount Price"
          value={formData.discountPrice}
          onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="number"
          placeholder="Discount Percent"
          value={formData.discountPercent}
          onChange={(e) => setFormData({ ...formData, discountPercent: e.target.value })}
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="border border-gray-300 p-2 rounded"
        />
        <button type="submit" className=" bg-[#FF4500] text-white py-2 px-4 rounded">Add Property</button>
      </div>
    </form>
  );
}
