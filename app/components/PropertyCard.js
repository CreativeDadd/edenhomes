// // app/components/PropertyCard.js
// import Link from 'next/link';

// export default function PropertyCard({ property }) {
//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden">
//       <img src={property.imageUrl} alt={property.title} className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h3 className="text-lg font-bold text-gray-900">{property.title}</h3>
//         <p className="text-sm text-gray-600">{property.description}</p>
//         <div className="flex justify-between items-center mt-4">
//           <span className="text-orange-500 font-bold text-lg">{property.mainPrice}</span>
//           <span className="text-gray-500 line-through">{property.discountedPrice}</span>
//         </div>
//         <p className="text-orange-400">{property.discountPercent}% OFF</p>
//         <div className="flex space-x-4 mt-4">
//           <Link href={`/properties/${property.id}`} className="bg-orange-500 text-white px-4 py-2 rounded-md">View Details</Link>
//           <button className="bg-gray-700 text-white px-4 py-2 rounded-md">Contact Agent</button>
//         </div>
//       </div>
//     </div>
//   );
// }




// import Link from 'next/link';

// export default function PropertyCard({ property }) {
//   return (
//     <div className="bg-white shadow-lg rounded-lg p-4 max-w-sm">
//       <img src={property.imageUrl} alt={property.title} className="rounded-lg h-40 w-full object-cover" />
//       <h3 className="text-xl font-bold mt-4">{property.title}</h3>
//       <p className="text-gray-500">{property.description}</p>
//       <p className="text-gray-400 line-through">₦{property.price}</p>
//       <p className="text-orange-500 font-bold">₦{property.discountPrice} ({property.discountPercent}% OFF)</p>
//       <div className="mt-4 flex justify-between">
//         <Link href={`/view-property/${property._id}`}>
//           <button className="bg-orange-500 text-white py-2 px-4 rounded">View Details</button>
//         </Link>
//         <button className="bg-blue-500 text-white py-2 px-4 rounded">Contact Agent</button>
//       </div>
//     </div>
//   );
// }

// import Link from 'next/link';
// // import Image from 'next/image';

// export default function PropertyCard({ property }) {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm transform transition-transform hover:scale-105">
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
//         <p className="text-gray-600 mb-4">{property.description}</p>
//         <p className="text-gray-400 line-through">₦{property.price}</p>
//         <p className="text-orange-500 font-bold text-lg mb-4">₦{property.discountPrice}</p>
//         <div className="flex justify-between mt-4">
//           <Link href={`/view-property/${property._id}`}>
//             <button className="bg-[#FF4500] text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors">
//               View Details
//             </button>
//           </Link>
//           <Link href="/contact" className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors">
//             Contact Agent
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }








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
//         <p className="text-gray-600 mb-4">{property.description}</p>
//         <p className="text-gray-400 line-through">₦{property.price}</p>
//         <p className="text-orange-500 font-bold text-lg mb-4">₦{property.discountPrice}</p>
//         <div className="flex justify-between mt-4 space-x-2">
//           <Link href={`/view-property/${property._id}`}>
//             <button className="bg-[#FF4500] text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors">
//               Details
//             </button>
//           </Link>
//           <Link href="/contact">
//             <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors">
//                Agent
//             </button>
//           </Link>
//           {/* WhatsApp Button */}
//           <Link href={`https://wa.me/2348102555210?text=${encodeURIComponent(whatsappMessage)}`} target="_blank">
//             <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">
//               WhatsApp
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }











// import Link from 'next/link';
// import Image from 'next/image';

// export default function PropertyCard({ property }) {
//   // Predefined WhatsApp message
//   const whatsappMessage = `Hello, I'm interested in the property titled "${property.title}". Could you please provide more details?`;

//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm transform transition-transform hover:scale-105 hover:shadow-2xl">
//       <div className="relative">
//         <Image
//           src={property.imageUrl}
//           alt={property.title}
//           width={600}
//           height={400}
//           className="w-full h-48 object-cover"
//         />
//         {property.discountPercent && (
//           <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
//             {property.discountPercent}% OFF
//           </span>
//         )}
//       </div>
//       <div className="p-6">
//         <h3 className="text-2xl font-semibold text-gray-900 mb-2">{property.title}</h3>
//         <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>
//         <div className="flex justify-between items-center mb-4">
//           <p className="text-gray-400 line-through">₦{property.price}</p>
//           <p className="text-orange-500 font-bold text-lg">₦{property.discountPrice}</p>
//         </div>
//         <div className="flex justify-between mt-4 space-x-2">
//           <Link href={`/view-property/${property._id}`}>
//             <button className="bg-[#FF4500] text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors">
//               Details
//             </button>
//           </Link>
//           <Link href="/contact">
//             <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors">
//               Agent
//             </button>
//           </Link>
//           {/* WhatsApp Button */}
//           <Link href={`https://wa.me/2348102555210?text=${encodeURIComponent(whatsappMessage)}`} target="_blank">
//             <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">
//               WhatsApp
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }







// import Link from 'next/link';
// import Image from 'next/image';
// import { FaBed, FaBath } from 'react-icons/fa';
// import Property from '@/app/models/Property';

// export default function PropertyCard({ property }) {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm transform transition-transform hover:scale-105">
//       <div className="relative">
//         <Image
//           width={400}
//           height={400}
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
//         <p className=" border border-solid border-[#FF7F50]  italic mb-4 py-1.5 px-4 rounded-full">{property.location}</p>
//         <p className="text-gray-400 line-through">₦{property.price}</p>
//         <p className="text-orange-500 font-bold text-lg mb-4">₦{property.discountPrice}</p>

//         <div className="flex items-center space-x-4 mb-4">
//           <div className="flex items-center space-x-1">
//             <FaBed className="text-orange-500" />
//             <span>{property.bedrooms} Beds</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <FaBath className="text-orange-500" />
//             <span>{property.bathrooms} Baths</span>
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <Link href={`/view-property/${property._id}`} legacyBehavior>
//             <a className="bg-[#FF7F50] text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-600 transition">
//               View Details
//             </a>
//           </Link>
//           <Link href={`/contact`} legacyBehavior>
//             <a className="text-[#FF7F50] font-semibold hover:bg-orange-600 transition">
//               Contact Us
//                       </a>
//           </Link>
//           <Link href={`mailto:info@example.com?subject=Enquiry about ${property.title}`} legacyBehavior>
//             <a className="bg-black text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-800 transition">
//               Drop a mail
//             </a>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }













































// import Link from 'next/link';
// import Image from 'next/image';
// import { FaBed, FaBath } from 'react-icons/fa';

// export default function PropertyCard({ property }) {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm transform transition-transform hover:scale-105">
//       <div className="relative">
//         <Image
//           width={100}
//           height={100}
//           src={property.imageUrl}  // Ensure the correct image field is used
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
//         <p className="border border-solid border-[#FF7F50] italic mb-4 py-1.5 px-4 rounded-full">{property.location}</p>
//         <p className="text-gray-400 line-through">₦{property.price}</p>
//         <p className="text-orange-500 font-bold text-lg mb-4">₦{property.discountPrice}</p>

//         <div className="flex items-center space-x-4 mb-4">
//           <div className="flex items-center space-x-1">
//             <FaBed className="text-orange-500" />
//             <span>{property.bedrooms} Beds</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <FaBath className="text-orange-500" />
//             <span>{property.bathrooms} Baths</span>
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <Link href={`/view-property/${property._id}`} legacyBehavior>
//             <a className="bg-[#FF7F50] text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-600 transition">
//               View Details
//             </a>
//           </Link>
//           <Link href={`/contact`} legacyBehavior>
//             <a className="text-[#FF7F50] font-semibold hover:bg-orange-600 transition">
//               Contact Us
//             </a>
//           </Link>
//           <Link href={`mailto:info@example.com?subject=Enquiry`} legacyBehavior>
//             <a className="text-[#FF7F50] font-semibold hover:bg-orange-600 transition">
//               Drop a mail
//             </a>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


























// // app/components/PropertyCard.js
// import Link from 'next/link';
// import Image from 'next/image';
// import { FaBed, FaBath } from 'react-icons/fa';

// export default function PropertyCard({ property }) {
//   const { 
//     title, 
//     description, 
//     price, 
//     discountPrice, 
//     discountPercent, 
//     imageUrl, 
//     location, 
//     bedrooms, 
//     bathrooms 
//   } = property; // Destructure property to only include required values

//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm transform transition-transform hover:scale-105">
//       <div className="relative">
//         <Image
//           width={100}
//           height={100}
//           src={imageUrl}  // Correct image field
//           alt={title}
//           className="w-full h-48 object-cover"
//         />
//         <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
//           {discountPercent}% OFF
//         </span>
//       </div>
//       <div className="p-6">
//         <h3 className="text-2xl font-semibold text-black mb-2">{title}</h3>
//         <p className="text-gray-600 mb-2">{description}</p>
//         <p className="border border-solid border-[#FF7F50] italic mb-4 py-1.5 px-4 rounded-full">{location}</p>
//         <p className="text-gray-400 line-through">₦{price}</p>
//         <p className="text-orange-500 font-bold text-lg mb-4">₦{discountPrice}</p>

//         <div className="flex items-center space-x-4 mb-4">
//           <div className="flex items-center space-x-1">
//             <FaBed className="text-orange-500" />
//             <span>{bedrooms} Beds</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <FaBath className="text-orange-500" />
//             <span>{bathrooms} Baths</span>
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <Link href={`/view-property/${property._id}`} legacyBehavior>
//             <a className="bg-[#FF7F50] text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-600 transition">
//               View Details
//             </a>
//           </Link>
//           <Link href={`/contact`} legacyBehavior>
//             <a className="text-[#FF7F50] font-semibold hover:bg-orange-600 transition">
//               Contact Us
//             </a>
//           </Link>
//           <Link href={`mailto:info@example.com?subject=Enquiry`} legacyBehavior>
//             <a className="text-[#FF7F50] font-semibold hover:bg-orange-600 transition">
//               Drop a mail
//             </a>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }











































// app/components/PropertyCard.js
import Link from 'next/link';
import Image from 'next/image';
import { FaBed, FaBath } from 'react-icons/fa';

export default function PropertyCard({ property }) {
  const { 
    title, 
    description, 
    price, 
    discountPrice, 
    discountPercent, 
    imageUrl, 
    location, 
    bedrooms, 
    bathrooms 
  } = property; // Destructure property

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm transform transition-transform hover:scale-105 hover:shadow-xl">
      <div className="relative">
        {imageUrl && (
          <Image
            width={100}
            height={100}
            src={imageUrl} // Correct image field
            alt={title}
            className="w-full h-48 object-cover"
          />
        )}
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
          {discountPercent}% OFF
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-black">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <p className=" text-gray-700 border-[#FF4500] border-solid border text-center py-2 px-3 rounded hover:bg-orange-600 text-sm mt-1" >Location: {location}</p>
        <p className="text-xl font-bold text-orange-500 mt-2">
          ${discountPrice} 
          <span className="line-through text-gray-500 ml-2">${price}</span>
        </p>
        <div className="flex justify-between items-center mt-4 text-gray-600">
          <div className="flex items-center">
            <FaBed className="mr-1 text-black" />
            <span>{bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <FaBath className="mr-1 text-black" />
            <span>{bathrooms} Baths</span>
          </div>
        </div>
        <div className="mt-4 flex flex-col space-y-2">
          <Link href={`/property/${property.id}`} className="bg-black text-white text-center py-2 px-3 rounded hover:bg-gray-800">
              View Details
          </Link>
          <Link href="mailto:info@orangesunhomes.com?subject=Enquiry about property"  className="bg-orange-500 text-white text-center py-2 px-3 rounded hover:bg-orange-600">
              Drop a Mail
          </Link>
          <Link href="contact"  className="bg-white text-black text-center border border-black py-2 px-3 rounded hover:bg-gray-100">
              Enquire/Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}





























