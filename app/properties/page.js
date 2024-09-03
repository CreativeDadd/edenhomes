// app/properties/page.js
import PropertyCard from '../components/PropertyCard';

const properties = [
  // Hardcoded properties for now
  {
    id: 1,
    title: 'Luxury Villa in Lagos',
    description: 'A beautiful luxury villa with a stunning view of the city.',
    imageUrl: '/images/villa.jpg',
    mainPrice: '₦45,000,000',
    discountedPrice: '₦50,000,000',
    discountPercent: 10,
  },
  // Add more properties here
];

export default function PropertiesPage() {
  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-end mb-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md" onClick={() => alert('Login Modal')}>
          Log In
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
