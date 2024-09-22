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










// // components/AddProperty.jsx
// 'use client';

// import { useState, useEffect } from 'react';
// import { FaBed, FaBath } from 'react-icons/fa';

// export default function AddProperty({ closeModal, agentId }) {
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
//     imageData.append('upload_preset', 'gzk48mwa'); // Cloudinary preset

//     try {
//       const response = await fetch(`https://api.cloudinary.com/v1_1/dxhwiufpc/image/upload`, {
//         method: 'POST',
//         body: imageData,
//       });

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
//       const response = await fetch(`/api/agents/${agentId}/properties`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Property submitted for approval!');
//         closeModal();
//       } else {
//         alert('Failed to  submit property.');
//       }
//     } catch (error) {
//       alert('An error occurred while submitting the property.');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg overflow-hidden mt-24">
//       <h1 className="text-3xl font-bold text-center mb-8">Add New Property</h1>

//       {/* Scrollable container */}
//       <div className="overflow-y-auto max-h-[500px]">
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
//           {/* Title */}
//           <input
//             type="text"
//             placeholder="Title"
//             value={formData.title}
//             onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//             required
//           />

//           {/* Description */}
//           <textarea
//             placeholder="Description (max 30 words)"
//             value={formData.description}
//             onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//             maxLength={30}
//             required
//           />

//           {/* Price */}
//           <input
//             type="number"
//             placeholder="Price"
//             value={formData.price}
//             onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//             required
//           />

//           {/* Discount Price */}
//           <input
//             type="number"
//             placeholder="Discount Price"
//             value={formData.discountPrice}
//             onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//           />

//           {/* Display calculated discount percentage */}
//           {formData.discountPercent && (
//             <div className="text-green-500">
//               Discount: {formData.discountPercent}%
//             </div>
//           )}

//           {/* Location */}
//           <input
//             type="text"
//             placeholder="Location"
//             value={formData.location}
//             onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//           />

//           {/* Bedrooms */}
//           <div className="flex items-center">
//             <FaBed className="mr-2" />
//             <input
//               type="number"
//               placeholder="Number of Beds"
//               value={formData.bedrooms}
//               onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
//               className="border border-gray-300 p-3 rounded-md"
//             />
//           </div>

//           {/* Bathrooms */}
//           <div className="flex items-center">
//             <FaBath className="mr-2" />
//             <input
//               type="number"
//               placeholder="Number of Bathrooms"
//               value={formData.bathrooms}
//               onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
//               className="border border-gray-300 p-3 rounded-md"
//             />
//           </div>

//           {/* Image Uploads
//           <label>Upload Kitchen Picture:</label>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'kitchen')} />
          
//           <label>Upload Front Picture:</label>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'front')} />

//           <label>Upload Compound Picture:</label>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'compound')} />

//           <label>Upload Sitting Room Picture:</label>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'sittingRoom')} />

//           <label>Upload Special Place Picture:</label>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'specialPlace')} /> */}



//  {/* Main image upload */}
//  <label className="flex flex-col">
//           <span className="font-bold">Main Image</span>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'imageUrl')} required />
//           {formData.imageUrl && <img src={formData.imageUrl} alt="Main" className="mt-2 h-32 w-full object-cover" />}
//         </label>

//         {/* Additional image uploads */}
//         <label className="flex flex-col">
//           <span className="font-bold">Kitchen Image</span>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'kitchenImageUrl')} required />
//           {formData.kitchenImageUrl && (
//             <img src={formData.kitchenImageUrl} alt="Kitchen" className="mt-2 h-32 w-full object-cover" />
//           )}
//         </label>
//         <label className="flex flex-col">
//           <span className="font-bold">Front Image</span>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'frontImageUrl')} required />
//           {formData.frontImageUrl && (
//             <img src={formData.frontImageUrl} alt="Front" className="mt-2 h-32 w-full object-cover" />
//           )}
//         </label>
//         <label className="flex flex-col">
//           <span className="font-bold">Compound Image</span>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'compoundImageUrl')} required />
//           {formData.compoundImageUrl && (
//             <img src={formData.compoundImageUrl} alt="Compound" className="mt-2 h-32 w-full object-cover" />
//           )}
//         </label>
//         <label className="flex flex-col">
//           <span className="font-bold">Sitting Room Image</span>
//           <input type="file" onChange={(e) => handleImageUpload(e, 'sittingRoomImageUrl')} required />
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

//         {/* Submit button
//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-3 rounded-md text-white font-bold ${
//             loading ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'
//           }`} */}


//           {/* Submit Button */}
//           <button type="submit" className="bg-gradient-to-r from-[#FF7F50] to-red-500 text-white py-3 rounded-md text-lg font-semibold hover:shadow-lg transition duration-200"
//             disabled={loading} >
//             {loading ? 'Uploading...' : 'Submit Property'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }







































// 'use client';

// import { useState, useEffect } from 'react';
// import { FaBed, FaBath } from 'react-icons/fa';

// export default function AddProperty({ closeModal, agentId }) {
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
//     kitchenImageUrl: '',
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
//     imageData.append('upload_preset', 'gzk48mwa'); // Cloudinary preset

//     try {
//       const response = await fetch(`https://api.cloudinary.com/v1_1/dxhwiufpc/image/upload`, {
//         method: 'POST',
//         body: imageData,
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setFormData((prev) => ({
//           ...prev,
//           [imageType]: data.secure_url, // Set the uploaded image URL to the corresponding field
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
//       console.log('Submitting property for agent:', agentId); // Log before fetch call

//       const response = await fetch(`/api/agents/${agentId}/properties`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Property submitted for approval!');
//         closeModal();
//       } else {
//         alert('Failed to submit property.');
//       }
//     } catch (error) {
//       alert('An error occurred while submitting the property.');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg overflow-hidden mt-24">
//       <h1 className="text-3xl font-bold text-center mb-8">Add New Property</h1>

//       <div className="overflow-y-auto max-h-[500px]">
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
//           {/* Title */}
//           <input
//             type="text"
//             placeholder="Title"
//             value={formData.title}
//             onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//             required
//           />

//           {/* Description */}
//           <textarea
//             placeholder="Description (max 30 words)"
//             value={formData.description}
//             onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//             maxLength={30}
//             required
//           />

//           {/* Price */}
//           <input
//             type="number"
//             placeholder="Price"
//             value={formData.price}
//             onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//             required
//           />

//           {/* Discount Price */}
//           <input
//             type="number"
//             placeholder="Discount Price"
//             value={formData.discountPrice}
//             onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//           />

//           {/* Display calculated discount percentage */}
//           {formData.discountPercent && (
//             <div className="text-green-500">
//               Discount: {formData.discountPercent}%
//             </div>
//           )}

//           {/* Location */}
//           <input
//             type="text"
//             placeholder="Location"
//             value={formData.location}
//             onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//           />

//           {/* Bedrooms */}
//           <div className="flex items-center">
//             <FaBed className="mr-2" />
//             <input
//               type="number"
//               placeholder="Number of Beds"
//               value={formData.bedrooms}
//               onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
//               className="border border-gray-300 p-3 rounded-md"
//             />
//           </div>

//           {/* Bathrooms */}
//           <div className="flex items-center">
//             <FaBath className="mr-2" />
//             <input
//               type="number"
//               placeholder="Number of Bathrooms"
//               value={formData.bathrooms}
//               onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
//               className="border border-gray-300 p-3 rounded-md"
//             />
//           </div>

//           {/* Main Image Upload */}
//           <label className="flex flex-col">
//             <span className="font-bold">Main Image</span>
//             <input type="file" onChange={(e) => handleImageUpload(e, 'imageUrl')} required />
//             {formData.imageUrl && <img src={formData.imageUrl} alt="Main" className="mt-2 h-32 w-full object-cover" />}
//           </label>

//           {/* Additional Image Uploads */}
//           <label className="flex flex-col">
//             <span className="font-bold">Kitchen Image</span>
//             <input type="file" onChange={(e) => handleImageUpload(e, 'kitchenImageUrl')} required />
//             {formData.kitchenImageUrl && (
//               <img src={formData.kitchenImageUrl} alt="Kitchen" className="mt-2 h-32 w-full object-cover" />
//             )}
//           </label>
//           <label className="flex flex-col">
//             <span className="font-bold">Front Image</span>
//             <input type="file" onChange={(e) => handleImageUpload(e, 'frontImageUrl')} required />
//             {formData.frontImageUrl && (
//               <img src={formData.frontImageUrl} alt="Front" className="mt-2 h-32 w-full object-cover" />
//             )}
//           </label>
//           <label className="flex flex-col">
//             <span className="font-bold">Compound Image</span>
//             <input type="file" onChange={(e) => handleImageUpload(e, 'compoundImageUrl')} required />
//             {formData.compoundImageUrl && (
//               <img src={formData.compoundImageUrl} alt="Compound" className="mt-2 h-32 w-full object-cover" />
//             )}
//           </label>
//           <label className="flex flex-col">
//             <span className="font-bold">Sitting Room Image</span>
//             <input type="file" onChange={(e) => handleImageUpload(e, 'sittingRoomImageUrl')} required />
//             {formData.sittingRoomImageUrl && (
//               <img src={formData.sittingRoomImageUrl} alt="Sitting Room" className="mt-2 h-32 w-full object-cover" />
//             )}
//           </label>
//           <label className="flex flex-col">
//             <span className="font-bold">Special Place Image</span>
//             <input type="file" onChange={(e) => handleImageUpload(e, 'specialPlaceImageUrl')} required />
//             {formData.specialPlaceImageUrl && (
//               <img src={formData.specialPlaceImageUrl} alt="Special Place" className="mt-2 h-32 w-full object-cover" />
//             )}
//           </label>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
//             disabled={loading}
//           >
//             {loading ? 'Uploading...' : 'Add Property'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }














































// // AddProperty Component
// import { useState, useEffect } from 'react';
// import { FaBed, FaBath } from 'react-icons/fa';

// export default function AddProperty({ closeModal, agentId }) {
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
//     kitchenImageUrl: '',
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
//     imageData.append('upload_preset', 'gzk48mwa'); // Cloudinary preset

//     try {
//       const response = await fetch(`https://api.cloudinary.com/v1_1/dxhwiufpc/image/upload`, {
//         method: 'POST',
//         body: imageData,
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setFormData((prev) => ({
//           ...prev,
//           [imageType]: data.secure_url, // Set the uploaded image URL to the corresponding field
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
//       console.log('Submitting property for agent:', agentId); // Log before fetch call

//       const response = await fetch(`/api/agents/${agentId}/properties`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Property submitted for approval!');
//         closeModal();
//       } else {
//         const errorData = await response.json();
//         alert(`Failed to submit property. Error: ${errorData.error}`);
//       }
//     } catch (error) {
//       alert('An error occurred while submitting the property.');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg overflow-hidden mt-6">
//       <h1 className="text-3xl font-bold text-center mb-8">Add New Serviced Property</h1>

//       <div className="overflow-y-auto max-h-[500px]">
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
//           {/* Title */}
//           <input
//             type="text"
//             placeholder="Title"
//             value={formData.title}
//             onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//             required
//           />

//           {/* Description */}
//           <textarea
//             placeholder="Description (max 30 words)"
//             value={formData.description}
//             onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//             maxLength={30}
//             required
//           />

//           {/* Price */}
//           <input
//             type="number"
//             placeholder="Price"
//             value={formData.price}
//             onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//             required
//           />

//           {/* Discount Price */}
//           <input
//             type="number"
//             placeholder="Discount Price"
//             value={formData.discountPrice}
//             onChange={(e) => setFormData({ ...formData, discountPrice: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//           />

//           {/* Display calculated discount percentage */}
//           {formData.discountPercent && (
//             <div className="text-green-500">
//               Discount: {formData.discountPercent}%
//             </div>
//           )}

//           {/* Location */}
//           <input
//             type="text"
//             placeholder="Location"
//             value={formData.location}
//             onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//             className="border border-gray-300 p-3 rounded-md"
//             required
//           />

//           {/* Bedrooms */}
//           <div className="flex items-center">
//             <FaBed className="mr-2 text-xl" />
//             <input
//               type="number"
//               placeholder="Bedrooms"
//               value={formData.bedrooms}
//               onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
//               className="border border-gray-300 p-3 rounded-md flex-1"
//               required
//             />
//           </div>

//           {/* Bathrooms */}
//           <div className="flex items-center">
//             <FaBath className="mr-2 text-xl" />
//             <input
//               type="number"
//               placeholder="Bathrooms"
//               value={formData.bathrooms}
//               onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
//               className="border border-gray-300 p-3 rounded-md flex-1"
//               required
//             />
//           </div>

//           {/* Image Uploads */}
//           <div>
//             <input
//               type="file"
//               onChange={(e) => handleImageUpload(e, 'imageUrl')}
//               className="border border-gray-300 p-3 rounded-md"
//               required
//             />
//             {loading && <p>Uploading main image...</p>}
//           </div>
//           <div>
//             <input
//               type="file"
//               onChange={(e) => handleImageUpload(e, 'kitchenImageUrl')}
//               className="border border-gray-300 p-3 rounded-md"
//             />
//             {loading && <p>Uploading kitchen image...</p>}
//           </div>
//           <label className="flex flex-col">
//              <span className="font-bold">Front Image</span>
//              <input type="file" onChange={(e) => handleImageUpload(e, 'frontImageUrl')} required />
//              {formData.frontImageUrl && (
//               <img src={formData.frontImageUrl} alt="Front" className="mt-2 h-32 w-full object-cover" />
//             )}
//           </label>
//           <label className="flex flex-col">
//             <span className="font-bold">Compound Image</span>
//             <input type="file" onChange={(e) => handleImageUpload(e, 'compoundImageUrl')} required />
//             {formData.compoundImageUrl && (
//               <img src={formData.compoundImageUrl} alt="Compound" className="mt-2 h-32 w-full object-cover" />
//             )}
//           </label>
//           <label className="flex flex-col">
//             <span className="font-bold">Sitting Room Image</span>
//             <input type="file" onChange={(e) => handleImageUpload(e, 'sittingRoomImageUrl')} required />
//             {formData.sittingRoomImageUrl && (
//               <img src={formData.sittingRoomImageUrl} alt="Sitting Room" className="mt-2 h-32 w-full object-cover" />
//             )}
//           </label>
//           <label className="flex flex-col">
//             <span className="font-bold">Special Place Image</span>
//             <input type="file" onChange={(e) => handleImageUpload(e, 'specialPlaceImageUrl')} required />
//             {formData.specialPlaceImageUrl && (
//               <img src={formData.specialPlaceImageUrl} alt="Special Place" className="mt-2 h-32 w-full object-cover" />
//             )}
//           </label>

//           {/* Repeat above block for other images: frontImageUrl, compoundImageUrl, etc. */}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-700 transition"
//           >
//             Submit Property
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


































// app/components/AddProperty.js
import { useState, useEffect } from 'react';
import { FaBed, FaBath } from 'react-icons/fa';

export default function AddProperty({ closeModal, agentId }) {
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
      console.log('Submitting property for agent:', agentId); // Log before fetch call

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
        const errorData = await response.json();
        alert(`Failed to submit property. Error: ${errorData.error}`);
      }
    } catch (error) {
      alert('An error occurred while submitting the property.');
    }
  };

  
  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg overflow-hidden mt-24">
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

          {/* Main Image Upload */}
          <label className="flex flex-col">
            <span className="font-bold">Main Image</span>
            <input type="file" onChange={(e) => handleImageUpload(e, 'imageUrl')} required />
            {formData.imageUrl && <img src={formData.imageUrl} alt="Main" className="mt-2 h-32 w-full object-cover" />}
          </label>

          {/* Additional Image Uploads */}
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
            <span className="font-bold">Special Place Image</span>
            <input type="file" onChange={(e) => handleImageUpload(e, 'specialPlaceImageUrl')} required />
            {formData.specialPlaceImageUrl && (
              <img src={formData.specialPlaceImageUrl} alt="Special Place" className="mt-2 h-32 w-full object-cover" />
            )}
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md"
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Add Property'}
          </button>
        </form>
      </div>
    </div>
  );
}
