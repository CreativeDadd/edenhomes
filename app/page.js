// import connectToDatabase from './lib/mongodb';
// import Property from './models/Property';
// import PropertyCard from './components/PropertyCard';
// import HeroSection from './components/HeroSection';
// import About from './components/About';
// import TestimonialSection from './components/Testimonials';
// import BlogPage from './components/BlogPage';
// import FAQ from './components/FAQ';


// export default async function HomePage() {
//   // Fetch data directly inside the server component
  
//   await connectToDatabase();
//   let properties = await Property.find({}).lean();

//   // Convert MongoDB objects to plain JSON
//   properties = JSON.parse(JSON.stringify(properties));

//   return (
//     <main className="container mx-auto p-6">
//       <HeroSection />
//       <h1 className="text-5xl font-bold text-center mb-10 text-black">Our List of Serviced Homes</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
//       <FAQ />

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

export default async function HomePage() {
  // Connect to the database and fetch properties
  await connectToDatabase();
  let properties = await Property.find({}).lean();

  // Transform properties for use in Client Components
  properties = properties.map((property) => ({
    ...property,
    _id: property._id.toString(), // Convert MongoDB ObjectId to string
    agentId: property.agentId?.toString() || null, // Convert agentId if present
    createdAt: property.createdAt?.toISOString() || null, // Convert Date to ISO string
  }));

  return (
    <main className="container mx-auto p-6">
      <HeroSection />
      <h1 className="text-5xl font-bold text-center mb-10 text-black">Our List of Serviced Homes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
