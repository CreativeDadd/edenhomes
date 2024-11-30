// import connectToDatabase from '@/app/lib/mongodb';
// import Property from '@/app/models/Property';
// import Image from 'next/image'; // Ensure you have the `next/image` component for optimized images

// async function getProperty(id) {
//   await connectToDatabase();
//   const property = await Property.findById(id).exec();
//   if (!property) {
//     return null; // Return null if property is not found
//   }
//   return property;
// }

// export default async function PropertyPage({ params }) {
//   const { id } = params;
//   const property = await getProperty(id);

//   if (!property) {
//     return <div>Property not found</div>; // Handle the case where the property is not found
//   }

//   return (
//     <div className="container mx-auto p-6 mt-16">
//       <div className="flex flex-col md:flex-row md:gap-6">
//         <div className="flex-1">
//           <div className="relative w-full h-60 md:h-80">
//             <Image
//               src={property.imageUrl}
//               alt={property.title}
//               layout="fill"
//               objectFit="cover"
//               className="rounded-lg"
//             />
//           </div>
//           <div className="mt-4">
//             <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
//             <p className="text-lg font-semibold text-gray-700 mb-4">${property.price}</p>
//             <p className="text-gray-800 mb-6">{property.description}</p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               {property.images && property.images.map((imgUrl, index) => (
//                 <div key={index} className="relative w-full h-40">
//                   <Image
//                     src={imgUrl}
//                     alt={`Property Image ${index + 1}`}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-lg cursor-pointer hover:opacity-80"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="md:w-1/3 mt-6 md:mt-0">
//           <div className="p-6 bg-white shadow-lg rounded-lg">
//             <h3 className="text-xl font-semibold mb-4">Property Details</h3>
//             <ul className="space-y-2">
//               <li><strong>Address:</strong> {property.address}</li>
//               <li><strong>Price:</strong> ${property.price}</li>
//               <li><strong>Bedrooms:</strong> {property.bedrooms}</li>
//               <li><strong>Bathrooms:</strong> {property.bathrooms}</li>
//               <li><strong>Square Feet:</strong> {property.squareFeet} sq ft</li>
//               <li><strong>Year Built:</strong> {property.yearBuilt}</li>
//             </ul>
//             <button
//               className="mt-4 bg-[#FF7F50] hover:bg-[#FF6A35] text-white font-semibold py-2 px-4 rounded-md transition-all"
//             >
//               Contact Agent
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


















// import  connectToDatabase  from '../../lib/mongodb';
// import Property from '../../models/Property';
// import Image from 'next/image';

// // Fetch property data based on property ID
// export async function fetchProperty(id) {

//   await connectToDatabase();
//   const property = await Property.findById(id).exec();
//   if (!property) {
//     throw new Error('Property not found');
//   }
//   return property;
// }

// // Generate static paths for the property pages
// export async function generateStaticParams() {
//   await connectToDatabase();
//   const properties = await Property.find({}).select('_id').exec();
//   return properties.map((property) => ({
//     id: property._id.toString()
//   }));
// }

// // The page component
// export default async function ViewProperty({ params }) {
//   const { id } = params;
//   const property = await fetchProperty(id);

//   // Ensure property.images is an array
//   const images = Array.isArray(property.images) ? property.images : [property.images];

//   return (
//     <main className="container mx-auto p-6">
//       <div className="relative w-full h-64 mb-4">
//         <Image
//           src={property.imageUrl}
//           alt={property.title}
//           layout="fill"
//           objectFit="cover"
//           className="rounded-lg"
//         />
//       </div>
//       <h1 className="text-4xl font-bold">{property.title}</h1>
//       <p className="text-gray-500">{property.description}</p>
//       <p className="text-gray-400 line-through">₦{property.price}</p>
//       <p className="text-orange-500 font-bold">₦{property.discountPrice} ({property.discountPercent}% OFF)</p>
//       <p className="text-gray-700 mt-4">Location: {property.location}</p>
      
//       {/* Display additional images */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
//         {images.map((imgUrl, index) => (
//           <div key={index} className="relative w-full h-40">
//             <Image
//               src={imgUrl}
//               alt={`Image ${index + 1}`}
//               layout="fill"
//               objectFit="cover"
//               className="rounded-lg"
//             />
//           </div>
//         ))}
//       </div>

//       <div className="mt-6 flex justify-between">
//         <button className="bg-[#ff7f50] text-white py-2 px-4 rounded">Contact Agent</button>
//         <button className="bg-blue-500 text-white py-2 px-4 rounded">Call Now</button>
//       </div>
//     </main>
//   );
// }




















































// // app/properties/[id]/page.js
// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import { FaBed, FaBath } from 'react-icons/fa';


// const PropertyDetail = () => {
//   const { id } = useParams();
//   const [property, setProperty] = useState(null);
//   const [mainImage, setMainImage] = useState('');
//   const [details, setDetails] = useState({kit:"Kichen", front:"Frontage", comp:"Compound", sit:"Sitting Room", spec:"Special Place"});

//   useEffect(() => {
//     // Fetch property details from the API
//     const fetchProperty = async () => {
//       try {
//         const response = await fetch(`/api/properties/view-details/${id}`);
//         const data = await response.json();
//         setProperty(data.property);
//         setMainImage(data.property.imageUrl); // Set initial main image
//       } catch (error) {
//         console.error('Failed to load property details:', error);
//       }
//     };

//     fetchProperty();
//   }, [id]);

  

//   if (!property) return <div>Loading...</div>;

//   return (
//     <div className="container mx-auto p-8 mt-16">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Image Gallery Section */}
//         <div>
//           <div className="border rounded-lg overflow-hidden mb-4">
//             <Image
//               src={mainImage}
//               alt={property.title}
//               width={800}
//               height={600}
//               className="object-cover w-full"
//             />
//           </div>
//           <div className="grid grid-cols-5 gap-2">
//             {/* Thumbnail images */}
//             {['imageUrl', 'kitchenImageUrl', 'frontImageUrl', 'compoundImageUrl', 'sittingRoomImageUrl', 'specialPlaceImageUrl']
//               .filter((key) => property[key]) // Only include images that are present
//               .map((key) => (
//                 <div
//                   key={key}
//                   className="cursor-pointer border rounded-md"
//                   onClick={() => setMainImage(property[key])}
//                 >
//                   <Image
//                     src={property[key]}
//                     alt={`${key} thumbnail`}
//                     width={150}
//                     height={100}
//                     className="object-cover"
//                   />
//                   {details.map((detail)=>(
//                     <p key={k} >{detail.k}</p>
//                   ))
//                   }
//                 </div>
//               ))}
//           </div>
//         </div>

//         {/* Property Details Section */}
//         <div className="space-y-6">
//           <h1 className="text-3xl font-bold">{property.title}</h1>
//           <p className="text-gray-700">{property.description}</p>
//           {/* <div className="flex space-x-4">
//             <span className="font-bold">Beds:</span>
//             <span>{property.beds}</span>
//             <span className="font-bold">Baths:</span>
//             <span>{property.baths}</span>
//           </div> */}

// <div className="flex justify-between items-center mt-4 text-gray-600">
//           <div className="flex items-center">
//             <FaBed className="mr-1 text-black" />
//             <span>{property.bedrooms} Beds</span>
//           </div>
//           <div className="flex items-center">
//             <FaBath className="mr-1 text-black" />
//             <span>{property.bathrooms} Baths</span>
//           </div>
//         </div>


//           {/* Contact and Action Buttons */}
//           <div className="space-y-4">
//             <Link href="/contact" className="bg-orange-500 block text-center text-white py-2 px-4 rounded-md w-full">
//               Book This Space
//             </Link>
//             <Link href={`mailto:info@orangesunhomes.com?subject=Inquiry about ${property.title}`} className="bg-black block text-white text-center py-2 px-4 rounded-md w-full">
//                 Drop a Mail
//             </Link>
//             <Link href={`https://wa.me/2348102555210?text=${encodeURIComponent(`Hello, I'm interested in the property titled "${property.title}" "${`https://newestateprj.vercel.app/view-property/${property._id}`}". Could you please provide more details?`)}` }  target="_blank" className="bg-green-500 mt-3 block text-center text-white py-2 px-4 rounded hover:bg-green-600 transition-colors w-full">
            
//                WhatsApp
       
//           </Link>
//             {/* <button className="bg-white border border-black text-black py-2 px-4 rounded-md w-full">
//               Add to Cart
//             </button> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetail;




















// // app/view-property/[id]/page.js


// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import { FaBed, FaBath } from 'react-icons/fa';

// const PropertyDetail = () => {
//   const { id } = useParams();
//   const [property, setProperty] = useState(null);
//   const [mainImage, setMainImage] = useState('');
//   const [details, setDetails] = useState({
//     kitchenImageUrl: "Kitchen", 
//     frontImageUrl: "Frontage", 
//     compoundImageUrl: "Compound", 
//     sittingRoomImageUrl: "Sitting Room", 
//     specialPlaceImageUrl: "Special Place"
//   });

//   useEffect(() => {
//     // Fetch property details from the API
//     const fetchProperty = async () => {
//       try {
//         const response = await fetch(`/api/properties/view-details/${id}`);
//         const data = await response.json();
//         setProperty(data.property);
//         setMainImage(data.property.imageUrl); // Set initial main image
//       } catch (error) {
//         console.error('Failed to load property details:', error);
//       }
//     };

//     fetchProperty();
//   }, [id]);

//   if (!property) return <div>Loading...</div>;

//   return (
//     <div className="container mx-auto p-8 mt-16">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Image Gallery Section */}
//         <div>
//           <div className="border rounded-lg overflow-hidden mb-4">
//             <Image
//               src={mainImage}
//               alt={property.title}
//               width={800}
//               height={600}
//               className="object-cover w-full"
//             />
//           </div>
//           <div className="grid grid-cols-5 gap-2">
//             {/* Thumbnail images */}
//             {['imageUrl', 'kitchenImageUrl', 'frontImageUrl', 'compoundImageUrl', 'sittingRoomImageUrl', 'specialPlaceImageUrl']
//               .filter((key) => property[key]) // Only include images that are present
//               .map((key) => (
//                 <div
//                   key={key}
//                   className="cursor-pointer border rounded-md"
//                   onClick={() => setMainImage(property[key])}
//                 >
//                   <Image
//                     src={property[key]}
//                     alt={`${key} thumbnail`}
//                     width={150}
//                     height={100}
//                     className="object-cover"
//                   />
//                   <p className="text-center mt-1">{details[key]}</p> {/* Match name to image */}
//                 </div>
//               ))}
//           </div>
//         </div>

//         {/* Property Details Section */}
//         <div className="space-y-6">
//           <h1 className="text-3xl font-bold">{property.title}</h1>
//           <p className="text-gray-700">{property.description}</p>

//           <div className="flex justify-between items-center mt-4 text-gray-600">
//             <div className="flex items-center">
//               <FaBed className="mr-1 text-black" />
//               <span>{property.bedrooms} Beds</span>
//             </div>
//             <div className="flex items-center">
//               <FaBath className="mr-1 text-black" />
//               <span>{property.bathrooms} Baths</span>
//             </div>
//           </div>

//           {/* Contact and Action Buttons */}
//           <div className="space-y-4">
//             <Link href="/contact" className="bg-orange-500 block text-center text-white py-2 px-4 rounded-md w-full">
//               Book This Space
//             </Link>
//             <Link href={`mailto:info@orangesunhomes.com?subject=Inquiry about ${property.title}`} className="bg-black block text-white text-center py-2 px-4 rounded-md w-full">
//               Drop a Mail
//             </Link>
//             <Link href={`https://wa.me/2348102555210?text=${encodeURIComponent(`Hello, I'm interested in the property titled "${property.title}" "${`https://newestateprj.vercel.app/view-property/${property._id}`}". Could you please provide more details?`)}`} target="_blank" className="bg-green-500 mt-3 block text-center text-white py-2 px-4 rounded hover:bg-green-600 transition-colors w-full">
//               WhatsApp
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetail;





'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaBath } from 'react-icons/fa';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [details, setDetails] = useState({
    kitchenImageUrl: 'Kitchen',
    frontImageUrl: 'Frontage',
    compoundImageUrl: 'Compound',
    sittingRoomImageUrl: 'Sitting Room',
    specialPlaceImageUrl: 'Special Place',
  });

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`/api/properties/view-details/${id}`);
        const data = await response.json();

        // Ensure proper serialization
        setProperty({
          ...data.property,
          _id: data.property._id.toString(),
          createdAt: data.property.createdAt.toISOString(),
          agentId: data.property.agentId ? data.property.agentId.toString() : null,
        });
        setMainImage(data.property.imageUrl);
      } catch (error) {
        console.error('Failed to load property details:', error);
      }
    };

    fetchProperty();
  }, [id]);

  if (!property) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-8 mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="border rounded-lg overflow-hidden mb-4">
            <Image
              src={mainImage}
              alt={property.title}
              width={800}
              height={600}
              className="object-cover w-full"
            />
          </div>
          <div className="grid grid-cols-5 gap-2">
            {['imageUrl', 'kitchenImageUrl', 'frontImageUrl', 'compoundImageUrl', 'sittingRoomImageUrl', 'specialPlaceImageUrl']
              .filter((key) => property[key])
              .map((key) => (
                <div
                  key={key}
                  className="cursor-pointer border rounded-md"
                  onClick={() => setMainImage(property[key])}
                >
                  <Image
                    src={property[key]}
                    alt={`${key} thumbnail`}
                    width={150}
                    height={100}
                    className="object-cover"
                  />
                  <p className="text-center mt-1">{details[key]}</p>
                </div>
              ))}
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{property.title}</h1>
          <p className="text-gray-700">{property.description}</p>
          <div className="flex justify-between items-center mt-4 text-gray-600">
            <div className="flex items-center">
              <FaBed className="mr-1 text-black" />
              <span>{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center">
              <FaBath className="mr-1 text-black" />
              <span>{property.bathrooms} Baths</span>
            </div>
          </div>
          <div className="space-y-4">
            <Link href="/contact" className="bg-orange-500 block text-center text-white py-2 px-4 rounded-md w-full">
              Book This Space
            </Link>
            <Link href={`mailto:info@orangesunhomes.com?subject=Inquiry about ${property.title}`} className="bg-black block text-white text-center py-2 px-4 rounded-md w-full">
              Drop a Mail
            </Link>
            <Link href={`https://wa.me/2348102555210?text=${encodeURIComponent(`Hello, I'm interested in the property titled "${property.title}". Could you please provide more details?`)}`} target="_blank" className="bg-green-500 mt-3 block text-center text-white py-2 px-4 rounded hover:bg-green-600 transition-colors w-full">
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
