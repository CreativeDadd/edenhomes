


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
