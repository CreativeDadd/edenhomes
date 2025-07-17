// app/components/PropertyCard.js
import Link from 'next/link';
import Image from 'next/image';
import { FaBed, FaBath } from 'react-icons/fa';

export default function PropertyCard({ property }) {
  const { 
    title, 
    description, 
    price, 
    discountPrice, 
    discountPercent, 
    imageUrl, 
    location, 
    bedrooms, 
    bathrooms 
  } = property; // Destructure property

  return (
    <div className=" bg-white shadow-xl rounded-lg overflow-hidden max-w-sm transform transition-transform hover:scale-105 hover:shadow-xl">
      <div className="relative">
        {imageUrl && (
          <Image
            width={100}
            height={100}
            src={imageUrl} // Correct image field
            alt={title}
            className="w-full h-48 object-cover"
          />
        )}
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
          {discountPercent}% OFF
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-black">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        
        <p className="text-xl font-bold text-orange-500 mt-2">
          ${discountPrice} 
          <span className="line-through text-gray-500 ml-2">${price}</span>
        </p>
        <div className="flex justify-between items-center mt-4 text-gray-600">
          <div className="flex items-center">
            <FaBed className="mr-1 text-black" />
            <span>{bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <FaBath className="mr-1 text-black" />
            <span>{bathrooms} Baths</span>
          </div>
        </div>
        <p className="text-center py-2 px-3 rounded hover:bg-orange-600 text-sm mt-1" >Location: {location}</p>
        <div className="mt-4 flex flex-col space-y-2">
          <Link href={`/view-property/${property.id}`} className="bg-black text-white text-center py-2 px-3 rounded hover:bg-gray-800">
              View Details
          </Link>
          {/* <Link href="mailto:info@orangesunhomes.com?subject=Enquiry about property"  className="bg-orange-500 text-white text-center py-2 px-3 rounded hover:bg-orange-600">
              Drop a Mail
          </Link> */}
          <Link href="contact"  className="bg-white text-[#FF4533] text-center border border-black py-2 px-3 rounded hover:bg-gray-100">
              Book 
          </Link>
        </div>
      </div>
    </div>
  );
}





























