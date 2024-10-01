// // import { connectToDatabase } from './lib/mongodb';
// // import Property from './models/Property';

// // export default async function HomePage() {
// //   // Fetch the properties directly in the component
// //   await connectToDatabase();
// //   const properties = await Property.find({}).lean();

// //   return (
// //     <main className="container mx-auto p-6">
// //       <h1 className="text-4xl font-bold text-center mb-6">Available Properties</h1>
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {properties.map((property) => (
// //           <div key={property._id} className="bg-white p-4 shadow-lg rounded-lg">
// //             <img src={property.imageUrl} alt={property.title} className="w-full h-48 object-cover rounded-lg mb-4" />
// //             <h3 className="text-xl font-bold">{property.title}</h3>
// //             <p className="text-gray-500">{property.description}</p>
// //             <p className="text-gray-400 line-through">₦{property.price}</p>
// //             <p className="text-orange-500 font-bold">₦{property.discountPrice} ({property.discountPercent}% OFF)</p>
// //             <p className="text-gray-700 mt-4">Location: {property.location}</p>
// //             <div className="mt-6 flex justify-between">
// //               <button className="bg-orange-500 text-white py-2 px-4 rounded">View Details</button>
// //               <button className="bg-blue-500 text-white py-2 px-4 rounded">Contact Agent</button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </main>
// //   );
// // }




// export default async function HomePage() {
//   // Fetch the properties directly in the component
//   await connectToDatabase();
//   const properties = await Property.find({}).lean();

//   console.log('Fetched properties:', properties); // Log the properties to see the fetched data

//   return (
//     <main className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center mb-6">Available Properties</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {properties.length === 0 ? (
//           <p className="text-center text-gray-500">No properties available.</p>
//         ) : (
//           properties.map((property) => (
//             <div key={property._id} className="bg-white p-4 shadow-lg rounded-lg">
//               <img src={property.imageUrl} alt={property.title} className="w-full h-48 object-cover rounded-lg mb-4" />
//               <h3 className="text-xl font-bold">{property.title}</h3>
//               <p className="text-gray-500">{property.description}</p>
//               <p className="text-gray-400 line-through">₦{property.price}</p>
//               <p className="text-orange-500 font-bold">₦{property.discountPrice} ({property.discountPercent}% OFF)</p>
//               <p className="text-gray-700 mt-4">Location: {property.location}</p>
//               <div className="mt-6 flex justify-between">
//                 <button className="bg-orange-500 text-white py-2 px-4 rounded">View Details</button>
//                 <button className="bg-blue-500 text-white py-2 px-4 rounded">Contact Agent</button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </main>
//   );
// }



// // app/page.js
// import { connectToDatabase } from './lib/mongodb'; // Adjust path if needed
// import Property from './models/Property'; // Adjust path if needed

// export default async function HomePage() {
//   // Fetch the properties directly in the component
//   await connectToDatabase();
//   const properties = await Property.find({}).lean();

//   console.log('Fetched properties:', properties); // Log the properties to see the fetched data

//   return (
//     <main className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center mb-6">Available Properties</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {properties.length === 0 ? (
//           <p className="text-center text-gray-500">No properties available.</p>
//         ) : (
//           properties.map((property) => (
//             <div key={property._id} className="bg-white p-4 shadow-lg rounded-lg">
//               <img src={property.imageUrl} alt={property.title} className="w-full h-48 object-cover rounded-lg mb-4" />
//               <h3 className="text-xl font-bold">{property.title}</h3>
//               <p className="text-gray-500">{property.description}</p>
//               <p className="text-gray-400 line-through">₦{property.price}</p>
//               <p className="text-orange-500 font-bold">₦{property.discountPrice} ({property.discountPercent}% OFF)</p>
//               <p className="text-gray-700 mt-4">Location: {property.location}</p>
//               <div className="mt-6 flex justify-between">
//                 <button className="bg-orange-500 text-white py-2 px-4 rounded">View Details</button>
//                 <button className="bg-blue-500 text-white py-2 px-4 rounded">Contact Agent</button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </main>
//   );
// }



// import  connectToDatabase  from './lib/mongodb';
// import Property from './models/Property';
// import PropertyCard from './components/PropertyCard';
// import HeroSection from './components/HeroSection';
// import About from './components/About'
// import TestimonialSection from './components/Testimonials';
// import BlogPage from './components/BlogPage';



// export default async function HomePage() {
//   await connectToDatabase();
//   const properties = await Property.find({}).lean();

//   return (
//     <main className="container mx-auto p-6">
//       <HeroSection  />
  
//       <h1 className="text-5xl font-bold text-center mb-10 text-black">Available Properties</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {properties.length === 0 ? (
//           <p className="text-center text-gray-500">No properties available.</p>
//         ) : (
//           properties.map((property) => (
//             <PropertyCard key={property._id}  property={property} />
//           ))
//         )}
//       </div>
//       <About />
//       <TestimonialSection  />
//       <BlogPage  />
      
      
//     </main>
//   );
// }















// import connectToDatabase from './lib/mongodb';
// import Property from './models/Property';
// import PropertyCard from './components/PropertyCard';
// import HeroSection from './components/HeroSection';
// import About from './components/About';
// import TestimonialSection from './components/Testimonials';
// import BlogPage from './components/BlogPage';

// export default async function HomePage() {
//   await connectToDatabase();
  
//   // Fetch properties as plain JavaScript objects
//   const properties = await Property.find({}).lean();

//   // Serialize the properties, especially the `_id` field
//   const serializedProperties = properties.map((property) => ({
//     ...property,
//     _id: property._id.toString(),  // Convert `_id` to string
//   }));

//   return (
//     <main className="container mx-auto p-6">
//       <HeroSection />

//       <h1 className="text-5xl font-bold text-center mb-10 text-black">Available Properties</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {serializedProperties.length === 0 ? (
//           <p className="text-center text-gray-500">No properties available.</p>
//         ) : (
//           serializedProperties.map((property) => (
//             <PropertyCard key={property._id} property={property} />
//           ))
//         )}
//       </div>

//       <About />
//       <TestimonialSection />
//       <BlogPage />
//     </main>
//   );
// }



// import useSWR from 'swr';
// import connectToDatabase from './lib/mongodb';
// import Property from './models/Property';
// import PropertyCard from './components/PropertyCard';
// import HeroSection from './components/HeroSection';
// import About from './components/About';
// import TestimonialSection from './components/Testimonials';
// import BlogPage from './components/BlogPage';
// import FAQ from './components/FAQ';
// import HomeList from './components/HomeList';

// const fetcher = (url) => fetch(url).then((res) => res.json());


// export default async function HomePage() {
//   await connectToDatabase();
//   let properties = await Property.find({}).lean();

//   // Convert MongoDB objects to plain JSON
//   properties = JSON.parse(JSON.stringify(properties));
//   const { data, error } = useSWR('/api/properties', fetcher);


//   return (
//     <main className="container mx-auto p-6">
//       <HeroSection />
//       <HomeList />
//       <h1 className="text-5xl font-bold text-center mb-10 text-black">Our List of Serviced Homes</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {properties.length === 0 ? (
//           <p className="text-center text-gray-500">No properties available.</p>
//         ) : (
//           properties.map((property) => (
//             <PropertyCard key={property._id} property={property} />
//           ))
//         )}
//       </div>
//       <About />
//       <TestimonialSection />
//       <BlogPage />
//       <FAQ  />

//     </main>
//   );
// }











































import connectToDatabase from './lib/mongodb';
import Property from './models/Property';
import PropertyCard from './components/PropertyCard';
import HeroSection from './components/HeroSection';
import About from './components/About';
import TestimonialSection from './components/Testimonials';
import BlogPage from './components/BlogPage';
import FAQ from './components/FAQ';
import HomeList from './components/HomeList';

export default async function HomePage() {
  // Fetch data directly inside the server component
  console.log("before");
  
  await connectToDatabase();
  let properties = await Property.find({}).lean();
  console.log("after")

  // Convert MongoDB objects to plain JSON
  properties = JSON.parse(JSON.stringify(properties));

  return (
    <main className="container mx-auto p-6">
      <HeroSection />
      <HomeList />
      <h1 className="text-5xl font-bold text-center mb-10 text-black">Our List of Serviced Homes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.length === 0 ? (
          <p className="text-center text-gray-500">No properties available.</p>
        ) : (
          properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))
        )}
      </div>
      <About />
      <TestimonialSection />
      <BlogPage />
      <FAQ />
    </main>
  );
}











// import connectToDatabase from '@/app/lib/mongodb';
// import Property from '@/app/models/Property';
// import PropertyCard from '@/app/components/PropertyCard';
// import SearchablePropertyList from '@/app/components/SearchablePropertyList';

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
