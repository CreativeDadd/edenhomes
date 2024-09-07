// import { connectToDatabase } from '../../lib/mongodb';
// import Property from '../../models/Property';

// export default function ViewProperty({ property }) {
//   return (
//     <main className="container mx-auto p-6">
//       <img src={property.imageUrl} alt={property.title} className="w-full h-64 object-cover rounded-lg mb-4" />
//       <h1 className="text-4xl font-bold">{property.title}</h1>
//       <p className="text-gray-500">{property.description}</p>
//       <p className="text-gray-400 line-through">₦{property.price}</p>
//       <p className="text-orange-500 font-bold">₦{property.discountPrice} ({property.discountPercent}% OFF)</p>
//       <p className="text-gray-700 mt-4">Location: {property.location}</p>
//       <div className="mt-6 flex justify-between">
//         <button className="bg-orange-500 text-white py-2 px-4 rounded">Contact Agent</button>
//         <button className="bg-blue-500 text-white py-2 px-4 rounded">Call Now</button>
//       </div>
//     </main>
//   );
// }

// export async function getServerSideProps(context) {
//   const { id } = context.params;
//   await connectToDatabase();
//   const property = await Property.findById(id);
//   return {
//     props: {
//       property: JSON.parse(JSON.stringify(property)),
//     },
//   };
// }






// app/view-property/[id]/page.js

import Link from 'next/link';
import  connectToDatabase  from '../../lib/mongodb';
import Property from '../../models/Property';
// import Image from 'next/image';


export default async function PropertyDetailsPage({ params }) {
  const { id } = params;  // Destructure the id from the params

  // Fetch the property data from the database
  await connectToDatabase();
  const property = await Property.findById(id).lean();

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-black mb-6">{property.title}</h1>
      <img src={property.imageUrl} alt={property.title} className="w-full h-96 object-cover mb-6 rounded-lg" />
      <p className="text-gray-600 mb-4">{property.description}</p>
      <p className="text-gray-400 line-through text-lg">₦{property.price}</p>
      <p className="text-orange-500 font-bold text-2xl mb-4">₦{property.discountPrice} ({property.discountPercent}% OFF)</p>
      <p className="text-gray-700 text-lg mb-4">Location: {property.location}</p>
      <div className="flex gap-5 mt-7">
      <Link href="/contact" className="bg-blue-500 text-white py-2 px-4 rounded">Contact Agent</Link>
      <button className="bg-[orange] text-white py-2 px-4 rounded">Book A Tour</button>
      <button className="bg-[#ff4500] text-white py-2 px-4 rounded">Add To Cart</button>
      </div>
    </div>
  );
}

// No need for getServerSideProps. The `params` are automatically provided in server components.
