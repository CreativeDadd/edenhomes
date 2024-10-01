// import  connectToDatabase  from '@/app/lib/mongodb';
// import Property from '@/app/models/Property';
// import PropertyCard from '@/app/components/PropertyCard';
// import SearchablePropertyList from '../components/SearchablePropertyList';



// export default async function HomePage() {
//   await connectToDatabase();
//   const properties = await Property.find({}).lean();

//   return (
//     <section className="container mx-auto p-6 mt-12">
  
//       <h1 className="text-5xl font-bold text-center mb-10 text-black">Available Properties</h1>
//       <div className="container mx-auto p-8 mt-12">
//       <SearchablePropertyList properties={properties} />
//     </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {properties.length === 0 ? (
//           <p className="text-center text-gray-500">No properties available.</p>
//         ) : (
//           properties.map((property) => (
//             <PropertyCard key={property._id} property={property} />
//           ))
//         )}
//       </div>
//     </section>
//   );
// }
















// import connectToDatabase from '@/app/lib/mongodb';
// import Property from '@/app/models/Property';
// import PropertyCard from '@/app/components/PropertyCard';
// import SearchablePropertyList from '../components/SearchablePropertyList';

// export default async function HomePage() {
//   await connectToDatabase();
  
//   // Fetch properties as plain JavaScript objects
//   const properties = await Property.find({}).lean();

//   // Manually convert the _id and other non-serializable fields
//   const serializedProperties = properties.map((property) => ({
//     id: String(property._id), // Convert ObjectId to string and assign to `id`
//     name: property.name,      // Example field
//     description: property.description, // Example field
//     price: property.price,    // Example field
//     createdAt: property.createdAt ? property.createdAt.toISOString() : null, // Convert Date to ISO string
//     updatedAt: property.updatedAt ? property.updatedAt.toISOString() : null, // Convert Date to ISO string
//     // Add any other fields as necessary
//   }));

//   return (
//     <section className="container mx-auto p-6 mt-12">
//       <h1 className="text-5xl font-bold text-center mb-10 text-black">Available Properties</h1>
      
//       <div className="container mx-auto p-8 mt-12">
//         <SearchablePropertyList properties={serializedProperties} />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {serializedProperties.length === 0 ? (
//           <p className="text-center text-gray-500">No properties available.</p>
//         ) : (
//           serializedProperties.map((property) => (
//             <PropertyCard key={property.id} property={property} />
//           ))
//         )}
//       </div>
//     </section>
//   );
// }











// 'use client'
// import { useState } from 'react';

// export default function SearchablePropertyList({ properties }) {
//   const [searchQuery, setSearchQuery] = useState('');

//   const filteredProperties = properties.filter((property) => {
//     const title = property.title || ''; // Default to an empty string if title is undefined
//     const location = property.location || ''; // Default to an empty string if location is undefined

//     return (
//       title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       location.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   });

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search properties..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="p-2 border border-gray-300 rounded mb-4"
//       />
      
//       {filteredProperties.length === 0 ? (
//         <p>No properties found.</p>
//       ) : (
//         <ul>
//           {filteredProperties.map((property) => (
//             <li key={property.id}>
//               {property.title} - {property.location}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }










// 'use client'
// import { useState } from 'react';

// export default function SearchablePropertyList({ properties = [] }) { // Default to an empty array if properties is undefined
//   const [searchQuery, setSearchQuery] = useState('');

//   const filteredProperties = properties?.filter((property) => {
//     const title = property?.title || ''; // Default to an empty string if title is undefined
//     const location = property?.location || ''; // Default to an empty string if location is undefined

//     return (
//       title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       location.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   });

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search properties..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="p-2 border border-gray-300 rounded mb-4"
//       />

//       {filteredProperties.length === 0 ? (
//         <p>No properties found.</p>
//       ) : (
//         <ul>
//           {filteredProperties.map((property) => (
//             <li key={property._id}>
//               {property.title} - {property.location}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }




































// import connectToDatabase from '@/app/lib/mongodb';
// import Property from '@/app/models/Property';
// import PropertyCard from '@/app/components/PropertyCard';
// import SearchablePropertyList from '../components/SearchablePropertyList';

// export default async function HomePage() {
//   await connectToDatabase();
  
//   // Fetch properties as plain JavaScript objects
//   const properties = await Property.find({}).lean();

//   // Convert _id to a string for each property
//   const serializedProperties = properties.map((property) => ({
//     ...property,
//     _id: property._id.toString(),
//   }));

//   return (
//     <section className="container mx-auto p-6 mt-12">
//       <h1 className="text-5xl font-bold text-center mb-10 text-black">Available Properties</h1>
      
//       <div className="container mx-auto p-8 mt-12">
//         <SearchablePropertyList properties={serializedProperties} />
//       </div>






//       {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {serializedProperties.length === 0 ? (
//           <p className="text-center text-gray-500">No properties available.</p>
//         ) : (
//           serializedProperties.map((property) => (
//             <PropertyCard key={property._id} property={property} />
//           ))
//         )}
//       </div> */}
//     </section>
//   );
// }
















//app/view-property/page.js

import connectToDatabase from '@/app/lib/mongodb';
import Property from '@/app/models/Property';
import SearchablePropertyList from '../components/SearchablePropertyList';

export default async function HomePage() {
  await connectToDatabase();

  // Fetch properties as plain JavaScript objects
  const properties = await Property.find({}).lean();

  // Convert _id to a string for each property
  const serializedProperties = properties.map((property) => ({
    ...property,
    _id: property._id.toString(),
  }));

  return (
    <section className="min-h-screen bg-gradient-to-tr from-blue-900 via-gray-900 to-black bg-opacity-90 p-8">
      <div className="max-w-6xl mx-auto p-8 mt-16 rounded-xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/20">
        <h1 className="text-5xl font-extrabold text-center mb-10 text-white">
          Available Properties
        </h1>
        
        <div className="glass-container p-6 rounded-xl">
          <SearchablePropertyList properties={serializedProperties} />
        </div>

        {/* If you want to use the PropertyCard component, uncomment the following */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {serializedProperties.length === 0 ? (
            <p className="text-center text-gray-500">No properties available.</p>
          ) : (
            serializedProperties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))
          )}
        </div> */}
      </div>
    </section>
  );
}
