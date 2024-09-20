import Property from '@/app/models/Property';
import connectToDatabase from '@/app/lib/mongodb';

export default async function HomeList() {
  await connectToDatabase();

  // Fetch only approved properties
  const properties = await Property.find({ isApproved: true });

  return (
    <div>
      <h1>Featured Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {properties.map((property) => (
          <div key={property._id} className="bg-gray-100 p-4 rounded-lg shadow-lg">
            {/* Display property details */}
            <h3 className="text-xl font-bold text-gray-800 mt-4">{property.title}</h3>
            <p className="text-gray-600">{property.description}</p>
            <p className="text-gray-700 font-semibold">Price: ${property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
