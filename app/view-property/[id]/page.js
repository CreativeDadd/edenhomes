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


















import  connectToDatabase  from '../../lib/mongodb';
import Property from '../../models/Property';
import Image from 'next/image';

// Fetch property data based on property ID
export async function fetchProperty(id) {

  await connectToDatabase();
  const property = await Property.findById(id).exec();
  if (!property) {
    throw new Error('Property not found');
  }
  return property;
}

// Generate static paths for the property pages
export async function generateStaticParams() {
  await connectToDatabase();
  const properties = await Property.find({}).select('_id').exec();
  return properties.map((property) => ({
    id: property._id.toString()
  }));
}

// The page component
export default async function ViewProperty({ params }) {
  const { id } = params;
  const property = await fetchProperty(id);

  // Ensure property.images is an array
  const images = Array.isArray(property.images) ? property.images : [property.images];

  return (
    <main className="container mx-auto p-6">
      <div className="relative w-full h-64 mb-4">
        <Image
          src={property.imageUrl}
          alt={property.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h1 className="text-4xl font-bold">{property.title}</h1>
      <p className="text-gray-500">{property.description}</p>
      <p className="text-gray-400 line-through">₦{property.price}</p>
      <p className="text-orange-500 font-bold">₦{property.discountPrice} ({property.discountPercent}% OFF)</p>
      <p className="text-gray-700 mt-4">Location: {property.location}</p>
      
      {/* Display additional images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {images.map((imgUrl, index) => (
          <div key={index} className="relative w-full h-40">
            <Image
              src={imgUrl}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        <button className="bg-[#ff7f50] text-white py-2 px-4 rounded">Contact Agent</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Call Now</button>
      </div>
    </main>
  );
}

