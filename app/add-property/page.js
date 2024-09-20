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



// //app/add-property/page.js
// 'use client';
// import { useState } from 'react';

// export default function AddProperty() {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: '',
//     discountPrice: '',
//     discountPercent: '',
//     imageUrl: '',
//     location: '',
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch('/api/add-property', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       alert('Property added successfully!');
//     } else {
//       alert('Failed to add property.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="container max-w-[756px] mx-auto p-6">
//       <h1 className="text-2xl sm:text-4xl font-bold text-center mb-6">Add New Property</h1>
//       <div className="grid grid-cols-1 gap-4">
//         <input
//           type="text"
//           placeholder="Title"
//           value={formData.title}
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//         />
//         <textarea
//           placeholder="Description"
//           value={formData.description}
//           onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={formData.price}
//           onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//         />
//         <input
//           type="number"
//           placeholder="Discount Price"
//           value={formData.discountPrice}
//           onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//         />
//         <input
//           type="number"
//           placeholder="Discount Percent"
//           value={formData.discountPercent}
//           onChange={(e) => setFormData({ ...formData, discountPercent: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Image URL"
//           value={formData.imageUrl}
//           onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           value={formData.location}
//           onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//         />
//         <button type="submit" className=" bg-[#FF4500] text-white py-2 px-4 rounded">Add Property</button>
//       </div>
//     </form>
//   );
// }









// 'use client';
// import { useState } from 'react';

// export default function AddProperty() {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: '',
//     discountPrice: '',
//     discountPercent: '',
//     imageUrl: '',
//     location: '',
//   });

//   const [uploading, setUploading] = useState(false);

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       setUploading(true);
//       const response = await fetch('/api/upload-image', {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.json();
//       if (data.url) {
//         setFormData((prev) => ({ ...prev, imageUrl: data.url }));
//       } else {
//         alert('Failed to upload image');
//       }
//     } catch (error) {
//       console.error('Error uploading image:', error);
//       alert('An error occurred while uploading the image');
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch('/api/add-property', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       alert('Property added successfully!');
//     } else {
//       alert('Failed to add property.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="container max-w-[756px] mx-auto p-6">
//       <h1 className="text-2xl sm:text-4xl font-bold text-center mb-6">Add New Property</h1>
//       <div className="grid grid-cols-1 gap-4">
//         <input
//           type="text"
//           placeholder="Title"
//           value={formData.title}
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//         />
//         <textarea
//           placeholder="Description"
//           value={formData.description}
//           onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={formData.price}
//           onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//         />
//         <input
//           type="number"
//           placeholder="Discount Price"
//           value={formData.discountPrice}
//           onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//         />
//         <input
//           type="number"
//           placeholder="Discount Percent"
//           value={formData.discountPercent}
//           onChange={(e) => setFormData({ ...formData, discountPercent: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//         />
//         <div>
//           <label className="block mb-2 text-gray-700">Upload Image</label>
//           <input
//             type="file"
//             onChange={handleImageUpload}
//             className="border border-gray-300 p-2 rounded w-full"
//           />
//           {uploading && <p className="text-orange-500">Uploading...</p>}
//           {formData.imageUrl && <img src={formData.imageUrl} alt="Property" className="mt-4" />}
//         </div>
//         <input
//           type="text"
//           placeholder="Location"
//           value={formData.location}
//           onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//         />
//         <button type="submit" className="bg-[#FF4500] text-white py-2 px-4 rounded">
//           Add Property
//         </button>
//       </div>
//     </form>
//   );
// }









// // app/add-property/page.js
// 'use client';
// import { useState } from 'react';
// import { CldImage } from 'next-cloudinary';

// export default function AddProperty() {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: '',
//     discountPrice: '',
//     discountPercent: '',
//     imageUrl: '',
//     location: '',
//   });

//   const [uploadedImageUrl, setUploadedImageUrl] = useState('');

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', 'your_upload_preset'); // Replace with your Cloudinary preset

//     const response = await fetch(`https://api.cloudinary.com/v1_1/dxhwiufpc/image/upload`, {
//       method: 'POST',
//       body: formData,
//     });

//     const data = await response.json();

//     if (response.ok) {
//       setUploadedImageUrl(data.secure_url);
//       setFormData((prev) => ({ ...prev, imageUrl: data.secure_url }));
//     } else {
//       alert('Failed to upload image');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch('/api/add-property', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       alert('Property added successfully!');
//     } else {
//       alert('Failed to add property.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="container max-w-[756px] mx-auto p-6">
//       <h1 className="text-2xl sm:text-4xl font-bold text-center mb-6">Add New Property</h1>
//       <div className="grid grid-cols-1 gap-4">
//         <input
//           type="text"
//           placeholder="Title"
//           value={formData.title}
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//         />
//         <textarea
//           placeholder="Description"
//           value={formData.description}
//           onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={formData.price}
//           onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//         />
//         <input
//           type="number"
//           placeholder="Discount Price"
//           value={formData.discountPrice}
//           onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//         />
//         <input
//           type="number"
//           placeholder="Discount Percent"
//           value={formData.discountPercent}
//           onChange={(e) => setFormData({ ...formData, discountPercent: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//         />
//         <input
//           type="file"
//           onChange={handleImageUpload}
//           className="border border-gray-300 p-2 rounded"
//         />
//         {uploadedImageUrl && (
//           <CldImage width="600" height="600" src={uploadedImageUrl} alt="Uploaded image" />
//         )}
//         <input
//           type="text"
//           placeholder="Location"
//           value={formData.location}
//           onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//         />
//         <button type="submit" className=" bg-[#FF4500] text-white py-2 px-4 rounded">Add Property</button>
//       </div>
//     </form>
//   );
// }







// //  app/add-property

// 'use client';
// import { useState } from 'react';
// import { CldImage } from 'next-cloudinary';

// export default function AddProperty() {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: '',
//     discountPrice: '',
//     discountPercent: '',
//     imageUrl: '',
//     location: '',
//   });

//   const [uploadedImageUrl, setUploadedImageUrl] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleImageUpload = async (e) => {
//     setLoading(true);  // Show loading state while uploading
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', 'gzk48mwa'); // Replace with your Cloudinary preset

//     try {
//       const response = await fetch(`https://api.cloudinary.com/v1_1/dxhwiufpc/image/upload`, {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUploadedImageUrl(data.secure_url);
//         setFormData((prev) => ({ ...prev, imageUrl: data.secure_url }));
//       } else {
//         alert('Failed to upload image');
//       }
//     } catch (error) {
//       alert('An error occurred during the image upload.');
//     } finally {
//       setLoading(false);  // Hide loading state after upload
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/add-property', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Property added successfully!');
//         // Optionally, reset the form after successful submission
//         setFormData({
//           title: '',
//           description: '',
//           price: '',
//           discountPrice: '',
//           discountPercent: '',
//           imageUrl: '',
//           location: '',
//         });
//         setUploadedImageUrl('');
//       } else {
//         alert('Failed to add property.');
//       }
//     } catch (error) {
//       alert('An error occurred while adding the property.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="container max-w-[756px] mx-auto p-6">
//       <h1 className="text-2xl sm:text-4xl font-bold text-center mb-6">Add New Property</h1>
//       <div className="grid grid-cols-1 gap-4">
//         <input
//           type="text"
//           placeholder="Title"
//           value={formData.title}
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//           required
//         />
//         <textarea
//           placeholder="Description"
//           value={formData.description}
//           onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={formData.price}
//           onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Discount Price"
//           value={formData.discountPrice}
//           onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Discount Percent"
//           value={formData.discountPercent}
//           onChange={(e) => setFormData({ ...formData, discountPercent: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//           required
//         />
//         <input
//           type="file"
//           onChange={handleImageUpload}
//           className="border border-gray-300 p-2 rounded"
//           required
//         />
//         {loading && <p>Uploading image...</p>}
//         {uploadedImageUrl && (
//           <CldImage width="600" height="600" src={uploadedImageUrl} alt="Uploaded image" />
//         )}
//         <input
//           type="text"
//           placeholder="Location"
//           value={formData.location}
//           onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//           required
//         />
//         <button type="submit" className="bg-[#FF4500] text-white py-2 px-4 rounded">
//           Add Property
//         </button>
//       </div>
//     </form>
//   );
// }














// 'use client';
// import { useState, useEffect } from 'react';
// import { CldImage } from 'next-cloudinary';

// export default function AddProperty() {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: '',
//     discountPrice: '',
//     discountPercent: '',
//     imageUrl: '',
//     location: '',
//   });

//   const [uploadedImageUrl, setUploadedImageUrl] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     // Automatically calculate the discount percentage whenever price or discount price changes
//     if (formData.price && formData.discountPrice) {
//       const discountPercent = (
//         ((formData.price - formData.discountPrice) / formData.price) * 100
//       ).toFixed(2);
//       setFormData((prev) => ({ ...prev, discountPercent }));
//     }
//   }, [formData.price, formData.discountPrice]);

//   const handleImageUpload = async (e) => {
//     setLoading(true); // Show loading state while uploading
//     const file = e.target.files[0];
//     const imageData = new FormData();
//     imageData.append('file', file);
//     imageData.append('upload_preset', 'gzk48mwa'); // Replace with your Cloudinary preset

//     try {
//       const response = await fetch(`https://api.cloudinary.com/v1_1/dxhwiufpc/image/upload`, {
//         method: 'POST',
//         body: imageData,
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUploadedImageUrl(data.secure_url);
//         setFormData((prev) => ({ ...prev, imageUrl: data.secure_url }));
//       } else {
//         alert('Failed to upload image');
//       }
//     } catch (error) {
//       alert('An error occurred during the image upload.');
//     } finally {
//       setLoading(false); // Hide loading state after upload
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/add-property', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Property added successfully!');
//         // Optionally, reset the form after successful submission
//         setFormData({
//           title: '',
//           description: '',
//           price: '',
//           discountPrice: '',
//           discountPercent: '',
//           imageUrl: '',
//           location: '',
//         });
//         setUploadedImageUrl('');
//       } else {
//         alert('Failed to add property.');
//       }
//     } catch (error) {
//       alert('An error occurred while adding the property.');
//     }
//   };

//   // Function to restrict description to 30 words
//   const handleDescriptionChange = (e) => {
//     const words = e.target.value.split(/\s+/);
//     if (words.length <= 30) {
//       setFormData({ ...formData, description: e.target.value });
//     } else {
//       alert('Description cannot exceed 30 words');
//     }
//   };

//   return (
//     <div className="container max-w-[756px] mx-auto p-6">
//       <h1 className="text-2xl sm:text-4xl font-bold text-center mb-6">Add New Property</h1>

//       {/* Search bar */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Search by Location or Title"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="border border-gray-300 p-2 rounded w-full"
//         />
//       </div>

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
//         <input
//           type="text"
//           placeholder="Title"
//           value={formData.title}
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//           required
//         />
//         <textarea
//           placeholder="Description (max 30 words)"
//           value={formData.description}
//           onChange={handleDescriptionChange}
//           className="border border-gray-300 p-2 rounded"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={formData.price}
//           onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Discount Price"
//           value={formData.discountPrice}
//           onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Discount Percent"
//           value={formData.discountPercent}
//           readOnly
//           className="border border-gray-300 p-2 rounded bg-gray-100"
//         />
//         <input
//           type="file"
//           onChange={handleImageUpload}
//           className="border border-gray-300 p-2 rounded"
//           required
//         />
//         {loading && <p>Uploading image...</p>}
//         {uploadedImageUrl && (
//           <CldImage width="600" height="600" src={uploadedImageUrl} alt="Uploaded image" />
//         )}
//         <input
//           type="text"
//           placeholder="Location"
//           value={formData.location}
//           onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//           className="border border-gray-300 p-2 rounded"
//           required
//         />
//         <button type="submit" className="bg-[#FF4500] text-white py-2 px-4 rounded">
//           Add Property
//         </button>
//       </form>
//     </div>
//   );
// }












// 'use client';
// import { useState, useEffect } from 'react';
// import { CldImage } from 'next-cloudinary';

// export default function AddProperty() {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: '',
//     discountPrice: '',
//     discountPercent: '',
//     imageUrl: '',
//     location: '',
//   });

//   const [uploadedImageUrl, setUploadedImageUrl] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Automatically calculate the discount percentage whenever price or discount price changes
//     if (formData.price && formData.discountPrice) {
//       const discountPercent = (
//         ((formData.price - formData.discountPrice) / formData.price) * 100
//       ).toFixed(2);
//       setFormData((prev) => ({ ...prev, discountPercent }));
//     }
//   }, [formData.price, formData.discountPrice]);

//   const handleImageUpload = async (e) => {
//     setLoading(true); // Show loading state while uploading
//     const file = e.target.files[0];
//     const imageData = new FormData();
//     imageData.append('file', file);
//     imageData.append('upload_preset', 'gzk48mwa'); // Replace with your Cloudinary preset

//     try {
//       const response = await fetch(`https://api.cloudinary.com/v1_1/dxhwiufpc/image/upload`, {
//         method: 'POST',
//         body: imageData,
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUploadedImageUrl(data.secure_url);
//         setFormData((prev) => ({ ...prev, imageUrl: data.secure_url }));
//       } else {
//         alert('Failed to upload image');
//       }
//     } catch (error) {
//       alert('An error occurred during the image upload.');
//     } finally {
//       setLoading(false); // Hide loading state after upload
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/add-property', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Property added successfully!');
//         // Optionally, reset the form after successful submission
//         setFormData({
//           title: '',
//           description: '',
//           price: '',
//           discountPrice: '',
//           discountPercent: '',
//           imageUrl: '',
//           location: '',
//         });
//         setUploadedImageUrl('');
//       } else {
//         alert('Failed to add property.');
//       }
//     } catch (error) {
//       alert('An error occurred while adding the property.');
//     }
//   };

//   // Function to restrict description to 30 words
//   const handleDescriptionChange = (e) => {
//     const words = e.target.value.split(/\s+/);
//     if (words.length <= 30) {
//       setFormData({ ...formData, description: e.target.value });
//     } else {
//       alert('Description cannot exceed 30 words');
//     }
//   };

//   return (
//     <div className="container max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg mt-24">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Add New Property</h1>

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
//         <input
//           type="text"
//           placeholder="Title"
//           value={formData.title}
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-500 transition duration-200"
//           required
//         />
//         <textarea
//           placeholder="Description (max 30 words)"
//           value={formData.description}
//           onChange={handleDescriptionChange}
//           className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-500 transition duration-200"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={formData.price}
//           onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-500 transition duration-200"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Discount Price"
//           value={formData.discountPrice}
//           onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-500 transition duration-200"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Discount Percent"
//           value={formData.discountPercent}
//           readOnly
//           className="border border-gray-300 p-3 rounded-md bg-gray-100"
//         />
//         <input
//           type="file"
//           onChange={handleImageUpload}
//           className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-500 transition duration-200"
//           required
//         />
//         {loading && <p className="text-center text-orange-500">Uploading image...</p>}
//         {uploadedImageUrl && (
//           <CldImage width="600" height="600" src={uploadedImageUrl} alt="Uploaded image" />
//         )}
//         <input
//           type="text"
//           placeholder="Location"
//           value={formData.location}
//           onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-orange-500 transition duration-200"
//           required
//         />
//         <button
//           type="submit"
//           className="bg-gradient-to-r from-[#FF7F50] to-red-500 text-white py-3 rounded-md text-lg font-semibold hover:shadow-lg transition duration-200"
//         >
//           Add Property
//         </button>
//       </form>
//     </div>
//   );
// }












// 'use client';

// import { useState, useEffect } from 'react';
// import { CldImage } from 'next-cloudinary';
// import { FaBed, FaBath } from 'react-icons/fa';

// export default function AddProperty() {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: '',
//     discountPrice: '',
//     discountPercent: '',
//     imageUrl: '',
//     location: '',
//     bedrooms: '',  // New field for bedrooms
//     bathrooms: '', // New field for bathrooms
//     images: {
//       kitchen: '',
//       front: '',
//       compound: '',
//       sittingRoom: '',
//       specialPlace: '',
//     },  // New fields for specific images
//   });

//   const [uploadedImageUrl, setUploadedImageUrl] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (formData.price && formData.discountPrice) {
//       const discountPercent = (
//         ((formData.price - formData.discountPrice) / formData.price) * 100
//       ).toFixed(2);
//       setFormData((prev) => ({ ...prev, discountPercent }));
//     }
//   }, [formData.price, formData.discountPrice]);

//   const handleImageUpload = async (e, imageType) => {
//     setLoading(true);
//     const file = e.target.files[0];
//     const imageData = new FormData();
//     imageData.append('file', file);
//     imageData.append('upload_preset', 'gzk48mwa'); // Replace with your Cloudinary preset

//     try {
//       const response = await fetch(`https://api.cloudinary.com/v1_1/dxhwiufpc/image/upload`, {
//         method: 'POST',
//         body: imageData,
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUploadedImageUrl(data.secure_url);
//         setFormData((prev) => ({
//           ...prev,
//           images: { ...prev.images, [imageType]: data.secure_url },
//         }));
//       } else {
//         alert('Failed to upload image');
//       }
//     } catch (error) {
//       alert('An error occurred during the image upload.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/add-property', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Property added successfully!');
//         setFormData({
//           title: '',
//           description: '',
//           price: '',
//           discountPrice: '',
//           discountPercent: '',
//           imageUrl: '',
//           location: '',
//           bedrooms: '',
//           bathrooms: '',
//           images: { kitchen: '', front: '', compound: '', sittingRoom: '', specialPlace: '' },
//         });
//         setUploadedImageUrl('');
//       } else {
//         alert('Failed to add property.');
//       }
//     } catch (error) {
//       alert('An error occurred while adding the property.');
//     }
//   };

//   return (
//     <div className="container max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg mt-24">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Add New Property</h1>

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
//         <input
//           type="text"
//           placeholder="Title"
//           value={formData.title}
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <textarea
//           placeholder="Description (max 30 words)"
//           value={formData.description}
//           onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={formData.price}
//           onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Discount Price"
//           value={formData.discountPrice}
//           onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />

//         {/* Bedrooms and Bathrooms Fields */}
//         <div className="flex items-center">
//           <FaBed className="mr-2" />
//           <input
//             type="number"
//             placeholder="Number of Beds"
//             value={formData.bedrooms}
//             onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//           />
//         </div>
//         <div className="flex items-center">
//           <FaBath className="mr-2" />
//           <input
//             type="number"
//             placeholder="Number of Bathrooms"
//             value={formData.bathrooms}
//             onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//           />
//         </div>

//         {/* Image Uploads for Specific Areas */}
//         <label>Upload Kitchen Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'kitchen')} />
//         <label>Upload Front Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'front')} />
//         <label>Upload Compound Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'compound')} />
//         <label>Upload Sitting Room Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'sittingRoom')} />
//         <label>Upload Special Place Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'specialPlace')} />

//         <button
//           type="submit"
//           className="bg-gradient-to-r from-[#FF7F50] to-red-500 text-white py-3 rounded-md text-lg font-semibold hover:shadow-lg transition duration-200"
//         >
//           Add Property
//         </button>
//       </form>
//     </div>
//   );
// }















// 'use client';

// import { useState, useEffect } from 'react';
// import { FaBed, FaBath } from 'react-icons/fa';

// export default function AddProperty() {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: '',
//     discountPrice: '',
//     discountPercent: '',
//     imageUrl: '',
//     location: '',  // Location field
//     bedrooms: '',  // New field for bedrooms
//     bathrooms: '', // New field for bathrooms
//     images: {
//       kitchen: '',
//       front: '',
//       compound: '',
//       sittingRoom: '',
//       specialPlace: '',
//     },  // New fields for specific images
//   });

//   const [uploadedImageUrl, setUploadedImageUrl] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (formData.price && formData.discountPrice) {
//       const discountPercent = (
//         ((formData.price - formData.discountPrice) / formData.price) * 100
//       ).toFixed(2);
//       setFormData((prev) => ({ ...prev, discountPercent }));
//     }
//   }, [formData.price, formData.discountPrice]);

//   const handleImageUpload = async (e, imageType) => {
//     setLoading(true);
//     const file = e.target.files[0];
//     const imageData = new FormData();
//     imageData.append('file', file);
//     imageData.append('upload_preset', 'gzk48mwa'); // Replace with your Cloudinary preset

//     try {
//       const response = await fetch(`https://api.cloudinary.com/v1_1/dxhwiufpc/image/upload`, {
//         method: 'POST',
//         body: imageData,
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUploadedImageUrl(data.secure_url);
//         setFormData((prev) => ({
//           ...prev,
//           images: { ...prev.images, [imageType]: data.secure_url },
//         }));
//       } else {
//         alert('Failed to upload image');
//       }
//     } catch (error) {
//       alert('An error occurred during the image upload.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/add-property', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Property added successfully!');
//         setFormData({
//           title: '',
//           description: '',
//           price: '',
//           discountPrice: '',
//           discountPercent: '',
//           imageUrl: '',
//           location: '',
//           bedrooms: '',
//           bathrooms: '',
//           images: { kitchen: '', front: '', compound: '', sittingRoom: '', specialPlace: '' },
//         });
//         setUploadedImageUrl('');
//       } else {
//         alert('Failed to add property.');
//       }
//     } catch (error) {
//       alert('An error occurred while adding the property.');
//     }
//   };

//   return (
//     <div className="container max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg mt-24">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Add New Property</h1>

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
//         <input
//           type="text"
//           placeholder="Title"
//           value={formData.title}
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <textarea
//           placeholder="Description (max 30 words)"
//           value={formData.description}
//           onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={formData.price}
//           onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Discount Price"
//           value={formData.discountPrice}
//           onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           value={formData.location}
//           onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//         />

//         {/* Bedrooms and Bathrooms Fields */}
//         <div className="flex items-center">
//           <FaBed className="mr-2" />
//           <input
//             type="number"
//             placeholder="Number of Beds"
//             value={formData.bedrooms}
//             onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//           />
//         </div>
//         <div className="flex items-center">
//           <FaBath className="mr-2" />
//           <input
//             type="number"
//             placeholder="Number of Bathrooms"
//             value={formData.bathrooms}
//             onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//           />
//         </div>

//         {/* Image Uploads for Specific Areas */}
//         <label>Upload Main Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'imageUrl')} />
//         <label>Upload Kitchen Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'kitchen')} 
//         />
//         <label>Upload Front Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'front')} />
//         <label>Upload Compound Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'compound')} />
//         <label>Upload Sitting Room Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'sittingRoom')} />
//         <label>Upload Special Place Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'specialPlace')} />

//         <button
//           type="submit"
//           className="bg-gradient-to-r from-[#FF7F50] to-red-500 text-white py-3 rounded-md text-lg font-semibold hover:shadow-lg transition duration-200"
//         >
//           Add Property
//         </button>
//       </form>
//     </div>
//   );
// }




























// 'use client';

// import { useState, useEffect } from 'react';
// import { FaBed, FaBath } from 'react-icons/fa';

// export default function AddProperty() {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: '',
//     discountPrice: '',
//     discountPercent: '',
//     imageUrl: '',
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

//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (formData.price && formData.discountPrice) {
//       const discountPercent = (
//         ((formData.price - formData.discountPrice) / formData.price) * 100
//       ).toFixed(2);
//       setFormData((prev) => ({ ...prev, discountPercent }));
//     }
//   }, [formData.price, formData.discountPrice]);

//   const handleImageUpload = async (e, imageType) => {
//     setLoading(true);
//     const file = e.target.files[0];
//     const imageData = new FormData();
//     imageData.append('file', file);
//     imageData.append('upload_preset', 'gzk48mwa');

//     try {
//       const response = await fetch(
//         `https://api.cloudinary.com/v1_1/dxhwiufpc/image/upload`,
//         {
//           method: 'POST',
//           body: imageData,
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         setFormData((prev) => ({
//           ...prev,
//           images: { ...prev.images, [imageType]: data.secure_url },
//         }));
//       } else {
//         alert('Failed to upload image');
//       }
//     } catch (error) {
//       alert('An error occurred during the image upload.');
//     } finally {
//       setLoading(false);
//     }
//   };

  
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/add-property', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Property added successfully!');
//         // Reset form
//         setFormData({
//           title: '',
//           description: '',
//           price: '',
//           discountPrice: '',
//           discountPercent: '',
//           imageUrl: '',
//           location: '',
//           bedrooms: '',
//           bathrooms: '',
//           images: { kitchen: '', front: '', compound: '', sittingRoom: '', specialPlace: '' },
//         });
//       } else {
//         alert('Failed to add property.');
//       }
//     } catch (error) {
//       alert('An error occurred while adding the property.');
//     }
//   };

//   return (
//     <div className="container max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg mt-24">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Add New Property</h1>

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
//         <input
//           type="text"
//           placeholder="Title"
//           value={formData.title}
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <textarea
//           placeholder="Description (max 30 words)"
//           value={formData.description}
//           onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={formData.price}
//           onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Discount Price"
//           value={formData.discountPrice}
//           onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           value={formData.location}
//           onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//         />

//         <div className="flex items-center">
//           <FaBed className="mr-2" />
//           <input
//             type="number"
//             placeholder="Number of Beds"
//             value={formData.bedrooms}
//             onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//           />
//         </div>
//         <div className="flex items-center">
//           <FaBath className="mr-2" />
//           <input
//             type="number"
//             placeholder="Number of Bathrooms"
//             value={formData.bathrooms}
//             onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//           />
//         </div>

//         {/* Image Uploads */}
//         <label>Upload Main Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'imageUrl')} />
//         <label>Upload Kitchen Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'kitchen')} />
//         <label>Upload Front Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'front')} />
//         <label>Upload Compound Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'compound')} />
//         <label>Upload Sitting Room Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'sittingRoom')} />
//         <label>Upload Special Place Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'specialPlace')} />

//         <button
//           type="submit"
//           className="bg-gradient-to-r from-[#FF7F50] to-red-500 text-white py-3 rounded-md text-lg font-semibold hover:shadow-lg transition duration-200"
//         >
//           Add Property
//         </button>
//       </form>
//     </div>
//   );
// }




















// // app/add-property/page.js or equivalent component file
// 'use client';

// import { useState, useEffect } from 'react';
// import { FaBed, FaBath } from 'react-icons/fa';

// export default function AddProperty() {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: '',
//     discountPrice: '',
//     discountPercent: '',
//     imageUrl: '', // Fix here
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

//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (formData.price && formData.discountPrice) {
//       const discountPercent = (
//         ((formData.price - formData.discountPrice) / formData.price) * 100
//       ).toFixed(2);
//       setFormData((prev) => ({ ...prev, discountPercent }));
//     }
//   }, [formData.price, formData.discountPrice]);

//   const handleImageUpload = async (e, imageType) => {
//     setLoading(true);
//     const file = e.target.files[0];
//     const imageData = new FormData();
//     imageData.append('file', file);
//     imageData.append('upload_preset', 'gzk48mwa');

//     try {
//       const response = await fetch(
//         `https://api.cloudinary.com/v1_1/dxhwiufpc/image/upload`,
//         {
//           method: 'POST',
//           body: imageData,
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         // Differentiate between imageUrl and images object
//         if (imageType === 'imageUrl') {
//           setFormData((prev) => ({
//             ...prev,
//             imageUrl: data.secure_url, // Set the main image URL
//           }));
//         } else {
//           setFormData((prev) => ({
//             ...prev,
//             images: { ...prev.images, [imageType]: data.secure_url }, // Set the corresponding sub-image
//           }));
//         }
//       } else {
//         alert('Failed to upload image');
//       }
//     } catch (error) {
//       alert('An error occurred during the image upload.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/add-property', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Property added successfully!');
//         // Reset form
//         setFormData({
//           title: '',
//           description: '',
//           price: '',
//           discountPrice: '',
//           discountPercent: '',
//           imageUrl: '',
//           location: '',
//           bedrooms: '',
//           bathrooms: '',
//           images: { kitchen: '', front: '', compound: '', sittingRoom: '', specialPlace: '' },
//         });
//       } else {
//         alert('Failed to add property.');
//       }
//     } catch (error) {
//       alert('An error occurred while adding the property.');
//     }
//   };

//   return (
//     <div className="container max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg mt-24">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Add New Property</h1>

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
//         <input
//           type="text"
//           placeholder="Title"
//           value={formData.title}
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <textarea
//           placeholder="Description (max 30 words)"
//           value={formData.description}
//           onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={formData.price}
//           onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Discount Price"
//           value={formData.discountPrice}
//           onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           value={formData.location}
//           onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//         />

//         <div className="flex items-center">
//           <FaBed className="mr-2" />
//           <input
//             type="number"
//             placeholder="Number of Beds"
//             value={formData.bedrooms}
//             onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//           />
//         </div>
//         <div className="flex items-center">
//           <FaBath className="mr-2" />
//           <input
//             type="number"
//             placeholder="Number of Bathrooms"
//             value={formData.bathrooms}
//             onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//           />
//         </div>

//         {/* Image Uploads */}
//         <label>Upload Main Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'imageUrl')} />
//         <label>Upload Kitchen Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'kitchen')} />
//         <label>Upload Front Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'front')} />
//         <label>Upload Compound Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'compound')} />
//         <label>Upload Sitting Room Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'sittingRoom')} />
//         <label>Upload Special Place Picture:</label>
//         <input type="file" onChange={(e) => handleImageUpload(e, 'specialPlace')} />

//         <button
//           type="submit"
//           className="bg-gradient-to-r from-[#FF7F50] to-red-500 text-white py-3 rounded-md text-lg font-semibold hover:shadow-lg transition duration-200"
//         >
//           Add Property
//         </button>
//       </form>
//     </div>
//   );
// }































// // app/add-property/page.js or equivalent component file
// 'use client';

// import { useState, useEffect } from 'react';
// import { FaBed, FaBath } from 'react-icons/fa';

// export default function AddProperty() {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: '',
//     discountPrice: '',
//     discountPercent: '',
//     imageUrl: '',
//     location: '',
//     bedrooms: '',
//     bathrooms: '',
//     kitchenImageUrl: '', // Separate fields for each image type
//     frontImageUrl: '',
//     compoundImageUrl: '',
//     sittingRoomImageUrl: '',
//     specialPlaceImageUrl: '',
//   });

//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (formData.price && formData.discountPrice) {
//       const discountPercent = (
//         ((formData.price - formData.discountPrice) / formData.price) * 100
//       ).toFixed(2);
//       setFormData((prev) => ({ ...prev, discountPercent }));
//     }
//   }, [formData.price, formData.discountPrice]);

//   const handleImageUpload = async (e, imageType) => {
//     setLoading(true);
//     const file = e.target.files[0];
//     const imageData = new FormData();
//     imageData.append('file', file);
//     imageData.append('upload_preset', 'gzk48mwa');

//     try {
//       const response = await fetch(
//         `https://api.cloudinary.com/v1_1/dxhwiufpc/image/upload`,
//         {
//           method: 'POST',
//           body: imageData,
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         // Assign to the respective state field based on imageType
//         setFormData((prev) => ({
//           ...prev,
//           [`${imageType}ImageUrl`]: data.secure_url, // Dynamically update the correct field
//         }));
//       } else {
//         alert('Failed to upload image');
//       }
//     } catch (error) {
//       alert('An error occurred during the image upload.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/add-property', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Property added successfully!');
//         // Reset form
//         setFormData({
//           title: '',
//           description: '',
//           price: '',
//           discountPrice: '',
//           discountPercent: '',
//           imageUrl: '',
//           location: '',
//           bedrooms: '',
//           bathrooms: '',
//           kitchenImageUrl: '',
//           frontImageUrl: '',
//           compoundImageUrl: '',
//           sittingRoomImageUrl: '',
//           specialPlaceImageUrl: '',
//         });
//       } else {
//         alert('Failed to add property.');
//       }
//     } catch (error) {
//       alert('An error occurred while adding the property.');
//     }
//   };

//   return (
//     <div className="container max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg mt-24">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Add New Property</h1>

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
//         <input
//           type="text"
//           placeholder="Title"
//           value={formData.title}
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <textarea
//           placeholder="Description (max 30 words)"
//           value={formData.description}
//           onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={formData.price}
//           onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Discount Price"
//           value={formData.discountPrice}
//           onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           value={formData.location}
//           onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//         />

//         <div className="flex items-center">
//           <FaBed className="mr-2" />
//           <input
//             type="number"
//             placeholder="Number of Beds"
//             value={formData.bedrooms}
//             onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//           />
//         </div>
//         <div className="flex items-center">
//           <FaBath className="mr-2" />
//           <input
//             type="number"
//             placeholder="Number of Bathrooms"
//             value={formData.bathrooms}
//             onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//           />
//         </div>

//         <label className="flex flex-col">
//           <span className="font-bold">Main Image</span>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'image')} />
//         </label>
        
//         {/* Repeat for other image uploads */}
//         <label className="flex flex-col">
//           <span className="font-bold">Kitchen Image</span>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'kitchen')} />
//         </label>
//         {/* Similarly for 'front', 'compound', 'sittingRoom', 'specialPlace' images */}
        
//         <button
//           type="submit"
//           className="bg-orange-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-600 transition"
//         >
//           {loading ? 'Uploading...' : 'Add Property'}
//         </button>
//       </form>
//     </div>
//   );
// }






















// // app/add-property/page.js or equivalent component file
// 'use client';

// import { useState } from 'react';
// import { FaBed, FaBath } from 'react-icons/fa';

// export default function AddProperty() {
//   // Initial state with separate fields for each image
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: '',
//     discountPrice: '',
//     discountPercent: '',
//     imageUrl: '', // Main image
//     location: '',
//     bedrooms: '',
//     bathrooms: '',
//     kitchenImageUrl: '', // Separate field for kitchen image
  //   frontImageUrl: '', // Separate field for front image
  //   compoundImageUrl: '', // Separate field for compound image
  //   sittingRoomImageUrl: '', // Separate field for sitting room image
  //   specialPlaceImageUrl: '', // Separate field for special place image
  // });

  // const [loading, setLoading] = useState(false);

  // // Function to handle image upload
  // const handleImageUpload = async (e, field) => {
  //   setLoading(true);
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   formData.append('upload_preset', 'gzk48mwa');

  //   try {
  //     const response = await fetch('https://api.cloudinary.com/v1_1/dxhwiufpc/image/upload', {
  //       method: 'POST',
  //       body: formData,
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       setFormData((prev) => ({ ...prev, [field]: data.secure_url })); // Set correct image URL
  //     } else {
  //       alert('Failed to upload image');
  //     }
  //   } catch (error) {
  //     alert('An error occurred during image upload');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

//   // Function to handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/add-property', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Property added successfully!');
//         // Reset form
//         setFormData({
//           title: '',
//           description: '',
//           price: '',
//           discountPrice: '',
//           discountPercent: '',
//           imageUrl: '',
//           location: '',
//           bedrooms: '',
//           bathrooms: '',
//           kitchenImageUrl: '',
//           frontImageUrl: '',
//           compoundImageUrl: '',
//           sittingRoomImageUrl: '',
//           specialPlaceImageUrl: '',
//         });
//       } else {
//         alert('Failed to add property.');
//       }
//     } catch (error) {
//       alert('An error occurred while adding the property.');
//     }
//   };

//   return (
//     <div className="container max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg mt-24">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Add New Property</h1>

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
//         {/* Title, description, price, discountPrice, location inputs */}
//         <input
//           type="text"
//           placeholder="Title"
//           value={formData.title}
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <textarea
//           placeholder="Description (max 30 words)"
//           value={formData.description}
//           onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={formData.price}
//           onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Discount Price"
//           value={formData.discountPrice}
//           onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           value={formData.location}
//           onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//         />

//         {/* Bedrooms, bathrooms inputs */}
//         <div className="flex items-center">
//           <FaBed className="mr-2" />
//           <input
//             type="number"
//             placeholder="Number of Beds"
//             value={formData.bedrooms}
//             onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//           />
//         </div>
//         <div className="flex items-center">
//           <FaBath className="mr-2" />
//           <input
//             type="number"
//             placeholder="Number of Bathrooms"
//             value={formData.bathrooms}
//             onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//           />
//         </div>

//         {/* Main image upload */}
//         <label className="flex flex-col">
//           <span className="font-bold">Main Image</span>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'imageUrl')} />
//           {formData.imageUrl && <img src={formData.imageUrl} alt="Main" className="mt-2 h-32 w-full object-cover" />}
//         </label>

//         {/* Additional image uploads */}
//         <label className="flex flex-col">
//           <span className="font-bold">Kitchen Image</span>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'kitchenImageUrl')} />
//           {formData.kitchenImageUrl && (
//             <img  src={formData.kitchenImageUrl} alt="Kitchen" className="mt-2 h-32 w-full object-cover" />
//           )}
//         </label>
//         <label className="flex flex-col">
//           <span className="font-bold">Front Image</span>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'frontImageUrl')} />
//           {formData.frontImageUrl && (
//             <img src={formData.frontImageUrl} alt="Kitchen" className="mt-2 h-32 w-full object-cover" />
//           )}
//         </label>
//         <label className="flex flex-col">
//           <span className="font-bold">Compound Image</span>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'compoundImageUrl')} />
//           {formData.compoundImageUrl && (
//             <img src={formData.compoundImageUrl} alt="Kitchen" className="mt-2 h-32 w-full object-cover" />
//           )}
//         </label>
//         <label className="flex flex-col">
//           <span className="font-bold">Sitting Room Image</span>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'sittingRoomImageUrl')} />
//           {formData.sittingRoomImageUrl && (
//             <img src={formData.sittingRoomImageUrl} alt="Kitchen" className="mt-2 h-32 w-full object-cover" />
//           )}
//         </label>
//         <label className="flex flex-col">
//           <span className="font-bold">Special Image</span>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'specialImageUrl')} />
//           {formData.specialImageUrl && (
//             <img src={formData.specialImageUrl} alt="Kitchen" className="mt-2 h-32 w-full object-cover" />
//           )}
//         </label>
//         {/* Similar labels for front, compound, sittingRoom, specialPlace images */}

//         <button
//           type="submit"
//           className="bg-orange-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-600 transition"
//         >
//           {loading ? 'Uploading...' : 'Add Property'}
//         </button>
//       </form>
//     </div>
//   );
// }


































// // app/add-property/page.js
// 'use client';

// import { useState } from 'react';
// import { FaBed, FaBath } from 'react-icons/fa';

// export default function AddProperty() {
//   // Initial state with separate fields for each image
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: '',
//     discountPrice: '',
//     discountPercent: '',
//     imageUrl: '', // Main image
//     location: '',
//     bedrooms: '',
//     bathrooms: '',
//     kitchenImageUrl: '', // Separate field for kitchen image
//     frontImageUrl: '', // Separate field for front image
//     compoundImageUrl: '', // Separate field for compound image
//     sittingRoomImageUrl: '', // Separate field for sitting room image
//     specialPlaceImageUrl: '', // Separate field for special place image
//   });

//   const [loading, setLoading] = useState(false);

//   // Function to handle image upload
//   const handleImageUpload = async (e, field) => {
//     setLoading(true);
//     const file = e.target.files[0];
//     const uploadData = new FormData();
//     uploadData.append('file', file);
//     uploadData.append('upload_preset', 'gzk48mwa');

//     try {
//       const response = await fetch('https://api.cloudinary.com/v1_1/dxhwiufpc/image/upload', {
//         method: 'POST',
//         body: uploadData,
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setFormData((prev) => ({ ...prev, [field]: data.secure_url })); // Set correct image URL
//       } else {
//         alert('Failed to upload image');
//       }
//     } catch (error) {
//       alert('An error occurred during image upload');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Function to handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('/api/add-property', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Property added successfully!');
//         // Reset form
//         setFormData({
//           title: '',
//           description: '',
//           price: '',
//           discountPrice: '',
//           discountPercent: '',
//           imageUrl: '',
//           location: '',
//           bedrooms: '',
//           bathrooms: '',
//           kitchenImageUrl: '',
//           frontImageUrl: '',
//           compoundImageUrl: '',
//           sittingRoomImageUrl: '',
//           specialPlaceImageUrl: '',
//         });
//       } else {
//         alert('Failed to add property.');
//       }
//     } catch (error) {
//       alert('An error occurred while adding the property.');
//     }
//   };

//   return (
//     <div className="container max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg mt-24">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Add New Property</h1>

//       <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
//         {/* Title, description, price, discountPrice, location inputs */}
//         <input
//           type="text"
//           placeholder="Title"
//           value={formData.title}
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <textarea
//           placeholder="Description (max 30 words)"
//           value={formData.description}
//           onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={formData.price}
//           onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Discount Price"
//           value={formData.discountPrice}
//           onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           value={formData.location}
//           onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//           className="border border-gray-300 p-3 rounded-md"
//         />

//         {/* Bedrooms, bathrooms inputs */}
//         <div className="flex items-center">
//           <FaBed className="mr-2" />
//           <input
//             type="number"
//             placeholder="Number of Beds"
//             value={formData.bedrooms}
//             onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//           />
//         </div>
//         <div className="flex items-center">
//           <FaBath className="mr-2" />
//           <input
//             type="number"
//             placeholder="Number of Bathrooms"
//             value={formData.bathrooms}
//             onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//           />
//         </div>

//         {/* Main image upload */}
//         <label className="flex flex-col">
//           <span className="font-bold">Main Image</span>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'imageUrl')} />
//           {formData.imageUrl && <img src={formData.imageUrl} alt="Main" className="mt-2 h-32 w-full object-cover" />}
//         </label>

//         {/* Additional image uploads */}
//         <label className="flex flex-col">
//           <span className="font-bold">Kitchen Image</span>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'kitchenImageUrl')} />
//           {formData.kitchenImageUrl && (
//             <img src={formData.kitchenImageUrl} alt="Kitchen" className="mt-2 h-32 w-full object-cover" />
//           )}
//         </label>
//         <label className="flex flex-col">
//           <span className="font-bold">Front Image</span>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'frontImageUrl')} />
//           {formData.frontImageUrl && (
//             <img src={formData.frontImageUrl} alt="Front" className="mt-2 h-32 w-full object-cover" />
//           )}
//         </label>
//         <label className="flex flex-col">
//           <span className="font-bold">Compound Image</span>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'compoundImageUrl')} />
//           {formData.compoundImageUrl && (
//             <img src={formData.compoundImageUrl} alt="Compound" className="mt-2 h-32 w-full object-cover" />
//           )}
//         </label>
//         <label className="flex flex-col">
//           <span className="font-bold">Sitting Room Image</span>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'sittingRoomImageUrl')} />
//           {formData.sittingRoomImageUrl && (
//             <img src={formData.sittingRoomImageUrl} alt="Sitting Room" className="mt-2 h-32 w-full object-cover" />
//           )}
//         </label>
//         <label className="flex flex-col">
//           <span className="font-bold">Special Place Image (Optional)</span>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'specialPlaceImageUrl')} />
//           {formData.specialPlaceImageUrl && (
//             <img src={formData.specialPlaceImageUrl} alt="Special Place" className="mt-2 h-32 w-full object-cover" />
//           )}
//         </label>

//         {/* Submit button */}
//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-3 rounded-md text-white font-bold ${
//             loading ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'
//           }`}
//         >
//           {loading ? 'Uploading...' : 'Add Property'}
//         </button>
//       </form>
//     </div>
//   );
// }












































// app/add-property/page.js
'use client';

import { useState } from 'react';
import { FaBed, FaBath } from 'react-icons/fa';

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

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

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
        <input
          type="number"
          placeholder="Discount Percent"
          value={formData.discountPercent}
          onChange={(e) => setFormData({ ...formData, discountPercent: e.target.value })}
          className="border border-gray-300 p-3 rounded-md"
          required
        />
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
          {formData.imageUrl && <img src={formData.imageUrl} alt="Main" className="mt-2 h-32 w-full object-cover" />}
        </label>

        {/* Additional image uploads */}
        <label className="flex flex-col">
          <span className="font-bold">Kitchen Image</span>
          <input type="file" onChange={(e) => handleImageUpload(e, 'kitchenImageUrl')} required />
          {formData.kitchenImageUrl && (
            <img src={formData.kitchenImageUrl} alt="Kitchen" className="mt-2 h-32 w-full object-cover" />
          )}
        </label>
        <label className="flex flex-col">
          <span className="font-bold">Front Image</span>
          <input type="file" onChange={(e) => handleImageUpload(e, 'frontImageUrl')} required />
          {formData.frontImageUrl && (
            <img src={formData.frontImageUrl} alt="Front" className="mt-2 h-32 w-full object-cover" />
          )}
        </label>
        <label className="flex flex-col">
          <span className="font-bold">Compound Image</span>
          <input type="file" onChange={(e) => handleImageUpload(e, 'compoundImageUrl')} required />
          {formData.compoundImageUrl && (
            <img src={formData.compoundImageUrl} alt="Compound" className="mt-2 h-32 w-full object-cover" />
          )}
        </label>
        <label className="flex flex-col">
          <span className="font-bold">Sitting Room Image</span>
          <input type="file" onChange={(e) => handleImageUpload(e, 'sittingRoomImageUrl')} required />
          {formData.sittingRoomImageUrl && (
            <img src={formData.sittingRoomImageUrl} alt="Sitting Room" className="mt-2 h-32 w-full object-cover" />
          )}
        </label>
        <label className="flex flex-col">
          <span className="font-bold">Special Place Image (Optional)</span>
          <input type="file" onChange={(e) => handleImageUpload(e, 'specialPlaceImageUrl')} />
          {formData.specialPlaceImageUrl && (
            <img src={formData.specialPlaceImageUrl} alt="Special Place" className="mt-2 h-32 w-full object-cover" />
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
