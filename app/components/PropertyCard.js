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

import Link from 'next/link';
import Image from 'next/image';

export default function PropertyCard({ property }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm transform transition-transform hover:scale-105">
      <div className="relative">
        <Image
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
        <p className="text-gray-600 mb-4">{property.description}</p>
        <p className="text-gray-400 line-through">₦{property.price}</p>
        <p className="text-orange-500 font-bold text-lg mb-4">₦{property.discountPrice}</p>
        <div className="flex justify-between mt-4">
          <Link href={`/view-property/${property._id}`}>
            <button className="bg-[#FF4500] text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors">
              View Details
            </button>
          </Link>
          <Link href="/contact" className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors">
            Contact Agent
          </Link>
        </div>
      </div>
    </div>
  );
}
