// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';

// const PropertyEditForm = ({ property }) => {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     title: property?.title || '',
//     description: property?.description || '',
//     location: property?.location || '',
//     price: property?.price || 0,
//     discountPrice: property?.discountPrice || 0,
//     imageUrl: property?.imageUrl || '',
//     kitchenImageUrl: property?.kitchenImageUrl || '',
//     frontImageUrl: property?.frontImageUrl || '',
//     compoundImageUrl: property?.compoundImageUrl || '',
//     sittingRoomImageUrl: property?.sittingRoomImageUrl || '',
//     specialPlaceImageUrl: property?.specialPlaceImageUrl || '',
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`/api/properties/${property._id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(`Failed to update property: ${response.status} - ${errorData.message}`);
//       }

//       alert('Property updated successfully!');
//       router.push('/admin/update-properties');
//     } catch (error) {
//       console.error('Error updating property:', error.message);
//       alert(`Error updating property: ${error.message}`);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Edit Property</h2>
//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Title</label>
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           className="border rounded-lg w-full p-2"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Description</label>
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           className="border rounded-lg w-full p-2"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Location</label>
//         <input
//           type="text"
//           name="location"
//           value={formData.location}
//           onChange={handleChange}
//           className="border rounded-lg w-full p-2"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Price</label>
//         <input
//           type="number"
//           name="price"
//           value={formData.price}
//           onChange={handleChange}
//           className="border rounded-lg w-full p-2"
//           required
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Discount Price</label>
//         <input
//           type="number"
//           name="discountPrice"
//           value={formData.discountPrice}
//           onChange={handleChange}
//           className="border rounded-lg w-full p-2"
//         />
//       </div>

//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Image URL</label>
//         <input
//           type="text"
//           name="imageUrl"
//           value={formData.imageUrl}
//           onChange={handleChange}
//           className="border rounded-lg w-full p-2"
//         />
//       </div>

//       {/* Add fields for kitchen, front, compound, etc. images here */}

//       <div className="flex justify-end">
//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded-lg"
//         >
//           Save Changes
//         </button>
//       </div>
//     </form>
//   );
// };

// export default PropertyEditForm;
























'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

const PropertyEditForm = ({property}) => {
  const router = useRouter();
  const { id } = useParams(); // Get the property ID from the route parameters
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    price: 0,
    discountPrice: 0,
    imageUrl: '',
    kitchenImageUrl: '',
    frontImageUrl: '',
    compoundImageUrl: '',
    sittingRoomImageUrl: '',
    specialPlaceImageUrl: '',
  });

  // Fetch the property data when the component loads
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`/api/properties/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch property');
        }
        const property = await response.json();
        setFormData({
          title: property.title || '',
          description: property.description || '',
          location: property.location || '',
          price: property.price || 0,
          discountPrice: property.discountPrice || 0,
          imageUrl: property.imageUrl || '',
          kitchenImageUrl: property.kitchenImageUrl || '',
          frontImageUrl: property.frontImageUrl || '',
          compoundImageUrl: property.compoundImageUrl || '',
          sittingRoomImageUrl: property.sittingRoomImageUrl || '',
          specialPlaceImageUrl: property.specialPlaceImageUrl || '',
        });
        setLoading(false);
      } catch (err) {
        console.error('Error fetching property:', err);
        setError('Failed to load property data');
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/properties/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Failed to update property: ${response.status} - ${errorData.message}`);
      }

      alert('Property updated successfully!');
      router.push('/admin/update-property');
    } catch (error) {
      console.error('Error updating property:', error.message);
      alert(`Error updating property: ${error.message}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Property</h2>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="border rounded-lg w-full p-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border rounded-lg w-full p-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="border rounded-lg w-full p-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="border rounded-lg w-full p-2"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Discount Price</label>
        <input
          type="number"
          name="discountPrice"
          value={formData.discountPrice}
          onChange={handleChange}
          className="border rounded-lg w-full p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Image URL</label>
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          className="border rounded-lg w-full p-2"
        />
      </div>

      {/* Add fields for kitchen, front, compound, etc. images here */}

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default PropertyEditForm;


























// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useRouter, useParams } from 'next/navigation';

// const PropertyEditForm = ({ property }) => {
//   const router = useRouter();
//   const { id } = useParams(); // Get the property ID from the route parameters
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     location: '',
//     price: 0,
//     discountPrice: 0,
//     imageUrl: '',
//     kitchenImageUrl: '',
//     frontImageUrl: '',
//     compoundImageUrl: '',
//     sittingRoomImageUrl: '',
//     specialPlaceImageUrl: '',
//   });

//   // Fetch the property data when the component loads
//   useEffect(() => {
//     const fetchProperty = async () => {
//       try {
//         const response = await fetch(`/api/properties/${id}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch property');
//         }
//         const property = await response.json();
//         setFormData({
//           title: property.title || '',
//           description: property.description || '',
//           location: property.location || '',
//           price: property.price || 0,
//           discountPrice: property.discountPrice || 0,
//           imageUrl: property.imageUrl || '',
//           kitchenImageUrl: property.kitchenImageUrl || '',
//           frontImageUrl: property.frontImageUrl || '',
//           compoundImageUrl: property.compoundImageUrl || '',
//           sittingRoomImageUrl: property.sittingRoomImageUrl || '',
//           specialPlaceImageUrl: property.specialPlaceImageUrl || '',
//         });
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching property:', err);
//         setError('Failed to load property data');
//         setLoading(false);
//       }
//     };

//     fetchProperty();
//   }, [id]);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle image uploads
//   const handleImageUpload = async (e, fieldName) => {
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', 'YOUR_CLOUDINARY_UPLOAD_PRESET'); // Add your Cloudinary upload preset here

//     try {
//       const res = await fetch(`https://api.cloudinary.com/v1_1/dxhwiufpc/image/upload`, {
//         method: 'POST',
//         body: formData,
//       });
//       const data = await res.json();
//       setFormData({ ...formData, [fieldName]: data.secure_url });
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`/api/properties/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(`Failed to update property: ${response.status} - ${errorData.message}`);
//       }

//       alert('Property updated successfully!');
//       router.push('/admin/update-property');
//     } catch (error) {
//       console.error('Error updating property:', error.message);
//       alert(`Error updating property: ${error.message}`);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Edit Property</h2>

//       {/* Title */}
//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Title</label>
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           className="border rounded-lg w-full p-2"
//           required
//         />
//       </div>

//       {/* Description */}
//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Description</label>
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           className="border rounded-lg w-full p-2"
//           required
//         />
//       </div>

//       {/* Price */}
//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Price</label>
//         <input
//           type="number"
//           name="price"
//           value={formData.price}
//           onChange={handleChange}
//           className="border rounded-lg w-full p-2"
//           required
//         />
//       </div>

//       {/* Image Upload */}
//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Main Image</label>
//         <input
//           type="file"
//           name="imageUrl"
//           onChange={(e) => handleImageUpload(e, 'imageUrl')}
//           className="border rounded-lg w-full p-2"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Kitchen Image</label>
//         <input
//           type="file"
//           name="kitchenImageUrl" 
//           onChange={(e) => handleImageUpload(e, 'kitchenImageUrl')}
//           className="border rounded-lg w-full p-2"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Front Image</label>
//         <input
//           type="file"
//           name="frontImageUrl" 
//           onChange={(e) => handleImageUpload(e, 'frontImageUrl')}
//           className="border rounded-lg w-full p-2"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Compound Image</label>
//         <input
//           type="file"
//           name="compoundImageUrl" 
//           onChange={(e) => handleImageUpload(e, 'compoundImageUrl')}
//           className="border rounded-lg w-full p-2"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Sitting Room Image</label>
//         <input
//           type="file"
//           name="sittingRoomImageUrl" 
//           onChange={(e) => handleImageUpload(e, 'sittingRoomImageUrl')}
//           className="border rounded-lg w-full p-2"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700 mb-2">Special Place Image</label>
//         <input
//           type="file"
//           name="specialPlaceImageUrl"
//           onChange={(e) => handleImageUpload(e, 'specialPlaceImageUrl')}
//           className="border rounded-lg w-full p-2"
//         />
//       </div>

//       {/* Add more image fields for kitchen, front, etc. */}

//       <div className="flex justify-end">
//         <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
//           Save Changes
//         </button>
//       </div>
//     </form>
//   );
// };

// export default PropertyEditForm;
