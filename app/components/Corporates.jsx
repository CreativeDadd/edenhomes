"use client";

import React from 'react';
import Link from 'next/link';

const Corporates = () => {
  return (
    <div className="container mx-auto px-4 py-12 mt-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Corporate Solutions</h1>
        <p className="text-lg text-gray-600 mt-4">Tailored Accommodations & Office Apartments for Businesses</p>
      </div>

      {/* B2B Accommodations Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Flexible Corporate Accommodations</h2>
          <p className="text-gray-600 mb-6">
            At Orange-Sun Homes Limited, we provide corporate clients with exclusive accommodations for business travel, retreats, and short or long-term stays. Our properties are strategically located in key business areas and leisure destinations to meet the unique needs of your organization.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Tailored housing options for employees and executives</li>
            <li>Premium locations near business districts and airports</li>
            <li>Flexible leasing options (short-term & long-term)</li>
            <li>Furnished apartments with modern amenities</li>
            <li>Seamless booking and property management</li>
          </ul>
        </div>

        {/* Office Space Section */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Office Apartments & Spaces</h2>
          <p className="text-gray-600 mb-6">
            We help corporate organizations secure prime office apartments and spaces for rent, perfect for expanding teams or temporary project locations. We ensure that your work environment is conducive to productivity, with modern office layouts and the best amenities.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Spacious office layouts and customizable spaces</li>
            <li>Short-term and long-term office rental agreements</li>
            <li>Professional environments with all essential amenities</li>
            <li>Proximity to major business hubs and city centers</li>
            <li>Support with lease negotiations and management</li>
          </ul>
        </div>
      </div>

      {/* Benefits for Corporates */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Orange-Sun Homes for Your Corporate Needs?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We understand the demands of corporate clients and offer personalized solutions that go beyond standard rental services. Our dedicated team works closely with your business to ensure seamless and hassle-free experiences, from property selection to lease management.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <Link href="/properties" className="bg-[#FF7F50] text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-600">
          Explore Our Corporate Property Listings
        </Link>
      </div>
    </div>
  );
};

export default Corporates;
