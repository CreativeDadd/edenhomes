'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DisplayPropertyLists() {
  const [propertyitems, setProperty] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/testin');
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Serviced Properties</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {propertyitems.map((propertyitem) => (
          <div
            key={propertyitem._id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src={propertyitem.imageUrl}
                alt={propertyitem.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              {propertyitem.discountPercent && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-lg">
                  {propertyitem.discountPercent}% OFF
                </div>
              )}
            </div>

            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{propertyitem.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{propertyitem.description.slice(0, 100)}...</p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-orange-600 font-bold text-lg">
                  ${propertyitem.discountPrice ? propertyitem.discountPrice : propertyitem.price}
                </span>
                {propertyitem.discountPercent && (
                  <span className="text-green-500 text-sm font-medium">
                    Save {propertyitem.discountPercent}%
                  </span>
                )}
              </div>

              <div className="flex justify-between items-center">
                <Link
                  href={`/view-property/${propertyitem._id}`}
                  className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors duration-300"
                >
                  View Details
                </Link>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
