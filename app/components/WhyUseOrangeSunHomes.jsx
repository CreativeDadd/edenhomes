"use client";

import Link from "next/link";

export default function WhyUseOrangeSunHomes() {
  return (
    <div className="container mx-auto py-16 px-6 mt-5">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Why Use Orange-Sun Homes Limited?
        </h1>
        <p className="text-xl text-gray-600">
          Your trusted partner for resorts, getaways, and business stays.
        </p>
      </header>

      {/* Section 1: Perfect Properties */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          We Connect You to the Perfect Property
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          At <span className="font-semibold">Orange-Sun Homes</span>, we pride
          ourselves on offering a wide selection of properties that suit every
          need, from short-term stays to luxurious getaways. Our platform allows{" "}
          <span className="font-semibold">certified agents</span> to upload and
          manage their own listings, ensuring a constantly updated catalog of
          premium properties.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-lg text-gray-600">
            <strong>Tailored for Individuals & Corporates:</strong> Find a
            peaceful retreat or the perfect resort during your travels.
          </li>
          <li className="text-lg text-gray-600">
            <strong>Hassle-Free Getaway Homes:</strong> Discover beautiful
            getaway homes to unwind in style, no matter the location.
          </li>
        </ul>
      </section>

      {/* Section 2: Access Properties */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Access Properties Anytime, Anywhere
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          We make it easy to explore, compare, and book properties across the
          country. Whether you're at home or on the go, our platform ensures you
          have everything you need at your fingertips.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-lg text-gray-600">
            <strong>Flexible Search Options:</strong> Filter properties by
            location, price, and type.
          </li>
          <li className="text-lg text-gray-600">
            <strong>Seamless Property Listings:</strong> Daily updates by agents
            ensure you get the best offers.
          </li>
        </ul>
      </section>

      {/* Section 3: Corporate and Private Clients */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Trusted by Corporate & Private Clients
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          From vacation planners to busy professionals, we are trusted by
          clients looking for tailored property solutions.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-lg text-gray-600">
            <strong>Resorts & Business Stays:</strong> Enjoy exclusive rates and
            premium service at top resorts.
          </li>
        </ul>
      </section>

      {/* Section 4: Sortable Property Page */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Sort and Choose Properties with Ease
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Finding the right property is important. Use our{" "}
          <Link href="/view-property" passHref>
            <span className="text-blue-500 font-semibold cursor-pointer hover:underline">
              Sortable Property Page
            </span>
          </Link>{" "}
          to filter properties by price, location, type, and availability.
        </p>
      </section>

      {/* Section 5: Why Orange-Sun Homes */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Why Choose Orange-Sun Homes?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-lg text-gray-600">
            <strong>Wide Range of Options:</strong> Resorts, getaways, corporate
            stays, and more.
          </li>
          <li className="text-lg text-gray-600">
            <strong>Agent-Driven Listings:</strong> Certified agents ensure the
            properties are always up-to-date.
          </li>
          <li className="text-lg text-gray-600">
            <strong>Tailored Solutions:</strong> Serving both individuals and
            businesses.
          </li>
          <li className="text-lg text-gray-600">
            <strong>Client Satisfaction:</strong> We are dedicated to making
            your experience seamless and enjoyable.
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <Link href="/view-property" passHref>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-md font-semibold text-lg hover:bg-blue-500 transition duration-300">
            Explore Our Property Listings
          </button>
        </Link>
      </div>
    </div>
  );
}
