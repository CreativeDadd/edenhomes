import  connectToDatabase  from '@/app/lib/mongodb';
import Property from '@/app/models/Property';
import PropertyCard from '@/app/components/PropertyCard';



export default async function HomePage() {
  await connectToDatabase();
  const properties = await Property.find({}).lean();

  return (
    <section className="container mx-auto p-6">
  
      <h1 className="text-5xl font-bold text-center mb-10 text-black">Available Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.length === 0 ? (
          <p className="text-center text-gray-500">No properties available.</p>
        ) : (
          properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))
        )}
      </div>
    </section>
  );
}








