

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

