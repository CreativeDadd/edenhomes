// import Link from 'next/link';
// import Image from 'next/image';

// export default function PropertyCard({ property }) {
//   // Predefined WhatsApp message
//   const whatsappMessage = `Hello, I'm interested in the property titled "${property.title}". Could you please provide more details?`;

//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm transform transition-transform hover:scale-105">
//       <div className="relative">
//         <Image width={80} height={80}
//           src={property.imageUrl}
//           alt={property.title}
//           className="w-full h-48 object-cover"
//         />
//         <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
//           {property.discountPercent}% OFF
//         </span>
//       </div>
//       <div className="p-6">
//         <h3 className="text-2xl font-semibold text-black mb-2">{property.title}</h3>
//         <p className="text-gray-600 mb-2">{property.description}</p>
//         <p className="text-white bg-[#FF4500] italic mb-4 py-1.5 px-4 rounded-full">{property.location}</p>
//         <p className="text-gray-400 line-through">₦{property.price}</p>
//         <p className="text-orange-500 font-bold text-lg mb-4">₦{property.discountPrice}</p>
//         <div className="flex justify-between mt-4 space-x-2">
//           <Link href={`/view-property/${property._id}`}>
//             <span className="text-[#FF4500] cursor-pointer hover:underline transition">Details</span>
//           </Link>
//           <Link href="/contact">
//             <span className="text-black cursor-pointer hover:underline transition">Agent</span>
//           </Link>
//           <Link href={`https://wa.me/2348102555210?text=${encodeURIComponent(whatsappMessage)}`} target="_blank">
//             <span className="text-green-500 cursor-pointer hover:underline transition">WhatsApp</span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }









// // components/PropertyCard.js
// export default function PropertyCard({ property }) {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
//       <div className="relative">
//         <img
//           src={property.imageUrl}
//           alt={property.title}
//           className="w-full h-48 object-cover"
//         />
//         <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
//           {property.discountPercent}% OFF
//         </span>
//       </div>
//       <div className="p-6">
//         <h3 className="text-2xl font-semibold text-black mb-2">{property.title}</h3>
//         <p className="text-gray-600 mb-2">{property.description}</p>
//         <p className="text-gray-600 mb-2">Beds: {property.bedrooms} | Baths: {property.bathrooms}</p>
//         <p className="text-white bg-[#FF4500] italic mb-4 py-1.5 px-4 rounded-full">{property.location}</p>
//         <p className="text-gray-400 line-through">₦{property.price}</p>
//         <p className="text-orange-500 font-bold text-lg mb-4">₦{property.discountPrice}</p>
//       </div>
//     </div>
//   );
// }











import Link from 'next/link';
import Image from 'next/image';

export default function PropertyCard({ property }) {
  // Predefined WhatsApp message
  const whatsappMessage = `Hello, I'm interested in the property titled "${property.title}". Could you please provide more details?`;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm transform transition-transform hover:scale-105">
      <div className="relative">
        <Image
          width={80}
          height={80}
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
          {property.discountPercent}% OFF
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-black mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-2">{property.description}</p>
        <p className="text-gray-600 mb-2">Beds: {property.bedrooms} | Baths: {property.bathrooms}</p>
        <p className="text-white bg-[#FF4500] italic mb-4 py-1.5 px-4 rounded-full">{property.location}</p>
        <p className="text-gray-400 line-through">₦{property.price}</p>
        <p className="text-orange-500 font-bold text-lg mb-4">₦{property.discountPrice}</p>
        <div className="flex justify-between mt-4 space-x-2">
          <Link href={`/view-property/${property._id}`}>
            <span className="text-[#FF4500] cursor-pointer hover:underline transition">Details</span>
          </Link>
          <Link href="/contact">
            <span className="text-black cursor-pointer hover:underline transition">Agent</span>
          </Link>
          <Link href={`https://wa.me/2348102555210?text=${encodeURIComponent(whatsappMessage)}`} target="_blank">
            <span className="text-green-500 cursor-pointer hover:underline transition">WhatsApp</span>
          </Link>
        </div>
      </div>
    </div>
  );
}



// 'use client'
// import { useState } from 'react';
// import Image from 'next/image';

// export default function PropertyCard({ property }) {
//   const [primaryImage, setPrimaryImage] = useState(property.imageUrl);

//   const handleImageChange = (newImage) => {
//     setPrimaryImage(newImage);
//   };

//   console.log(property)

//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
//       <div className="relative">
//         {/* Primary Image */}
//         <Image
//           src={primaryImage}
//           alt={property.title}
//           width={500}
//           height={300}
//           className="w-full h-48 object-cover"
//         />
//         <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
//           {property.discountPercent}% OFF
//         </span>
//       </div>
      
//       {/* Image Thumbnails */}
//       <div className="flex justify-around mt-4">
//         <button onClick={() => handleImageChange(property.imageUrl)}>
//           <Image
//             src={property.imageUrl}
//             alt="Main Image"
//             width={50}
//             height={50}
//             className="w-12 h-12 object-cover rounded-full"
//           />
//         </button>
//         {property.images.kitchen && (
//           <button onClick={() => handleImageChange(property.images.kitchen)}>
//             <Image
//               src={property.images.kitchen}
//               alt="Kitchen"
//               width={50}
//               height={50}
//               className="w-12 h-12 object-cover rounded-full"
//             />
//           </button>
//         )}
//         {property.images.front && (
//           <button onClick={() => handleImageChange(property.images.front)}>
//             <Image
//               src={property.images.front}
//               alt="Front View"
//               width={50}
//               height={50}
//               className="w-12 h-12 object-cover rounded-full"
//             />
//           </button>
//         )}
//         {property.images.compound && (
//           <button onClick={() => handleImageChange(property.images.compound)}>
//             <Image
//               src={property.images.compound}
//               alt="Compound"
//               width={50}
//               height={50}
//               className="w-12 h-12 object-cover rounded-full"
//             />
//           </button>
//         )}
//         {property.images.sittingRoom && (
//           <button onClick={() => handleImageChange(property.images.sittingRoom)}>
//             <Image
//               src={property.images.sittingRoom}
//               alt="Sitting Room"
//               width={50}
//               height={50}
//               className="w-12 h-12 object-cover rounded-full"
//             />
//           </button>
//         )}
//         {property.images.specialPlace && (
//           <button onClick={() => handleImageChange(property.images.specialPlace)}>
//             <Image
//               src={property.images.specialPlace}
//               alt="Special Place"
//               width={50}
//               height={50}
//               className="w-12 h-12 object-cover rounded-full"
//             />
//           </button>
//         )}
//       </div>

//       <div className="p-6">
//         <h3 className="text-2xl font-semibold text-black mb-2">{property.title}</h3>
//         <p className="text-gray-600 mb-2">{property.description}</p>
//         <p className="text-white bg-[#FF4500] italic mb-4 py-1.5 px-4 rounded-full">{property.location}</p>
//         <p className="text-gray-400 line-through">₦{property.price}</p>
//         <p className="text-orange-500 font-bold text-lg mb-4">₦{property.discountPrice}</p>
//       </div>
//     </div>
//   );
// }
