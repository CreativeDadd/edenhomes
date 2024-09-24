
// import Link from 'next/link';
// import Image from 'next/image';

// export default function About() {
//   return (
//     <section className="bg-gray-100 py-16">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row items-center">
//           <div className="lg:w-1/2 lg:pr-8">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
//             <p className="text-gray-700 mb-6">
//               At Orange-Sun Homes, we are dedicated to helping you find your perfect home. With a wide range of properties available, from luxury homes to cozy apartments, our team is committed to providing exceptional service and expert advice.
//             </p>
//             <p className="text-gray-700 mb-6">
//               Our goal is to make the home rental process as smooth and enjoyable as possible. We pride ourselves on our extensive knowledge of the real estate market and our personalized approach to meet each client&#39;s unique needs.
//             </p>
//             <Link href="/contact" passHref>
//               <button className="bg-[#FF4500] text-white py-2 px-6 rounded-lg hover:bg-[#FF6F40] transition-colors">
//                 Get in Touch
//               </button>
//             </Link>
//           </div>
//           <div className="lg:w-1/2 mt-8 lg:mt-0">
//             <Image
//               src="/images/property_1.jpg" // Make sure to add an appropriate image
//               alt="About Us" width={450} height={450}
//               className="w-full h-auto rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }










































// import Link from 'next/link';
// import Image from 'next/image';

// export default function About() {
//   return (
//     <section className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] py-20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-12">
//         <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
//           {/* Text Section */}
//           <div className="lg:w-1/2 text-center lg:text-left lg:pr-8">
//             <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
//               About Orange-Sun Homes Limited
//             </h2>
//             <p className="text-gray-600 text-lg leading-relaxed mb-6">
//               Welcome to Orange-Sun Homes Limited, where your real estate dreams come true. We offer a broad range of services, including property rentals, development, land purchase, and more. Our initial focus is on providing exceptional relocation, vacation, and getaway accommodations.
//             </p>
//             <p className="text-gray-600 text-lg leading-relaxed mb-6">
//               Our mission is to make the process of finding, renting, or owning a property as seamless and stress-free as possible. With a team of experienced professionals, we are committed to offering personalized solutions that cater to your unique needs.
//             </p>
//             <Link href="/contact" passHref>
//               <button className="bg-[#FF4500] text-white py-3 px-8 rounded-full text-lg font-medium shadow-lg hover:bg-[#FF6F40] transition-transform transform hover:scale-105">
//                 Get in Touch
//               </button>
//             </Link>
//           </div>
          
//           {/* Image Section */}
//           <div className="lg:w-1/2 mt-12 lg:mt-0">
//             <div className="relative w-full h-96 lg:h-full rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
//               <Image
//                 src="/images/property_1.jpg" // Replace with your actual image path
//                 alt="About Us"
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }























import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-10">
          About Us
        </h2>
        <div className="flex flex-col justify-center items-center border border-solid border-[#4e4e4e] p-4 max-w-70 rounded-lg mx-auto">
            <Link href="/">
              <Image src="/images/logo.svg" alt="brandlogo" width={60} height={60} className="border-2 border-[#ff7F50] rounded-[100%]" />
            </Link>
            <Link href="/" className="text-xl font-bold text-[#FF7F50]">
              Orange-Sun Homes Ltd.
            </Link>
          </div>

        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          {/* Text Section */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Welcome to Orange-Sun Homes Limited, where your real estate dreams come to life. We are a comprehensive real estate company dedicated to providing exceptional services that cater to all your property needs. Whether you&apos;re looking to rent a home, buy land, develop property, or find the perfect getaway accommodation, we're here to help.
            </p>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our mission is to make the process of finding, renting, or owning a property as seamless and stress-free as possible. We believe that everyone deserves a place to call home, whether it&apos;s a long-term residence, a temporary relocation, or a luxurious vacation spot. We strive to offer top-notch services that meet the diverse needs of our clients.
            </p>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">What We Do</h3>
            <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed mb-6">
              <li><strong>Property Rentals:</strong> A variety of rental options, from cozy apartments to spacious family homes, carefully selected for comfort and style.</li>
              <li><strong>Relocation Services:</strong> Tailored services to make your move smooth, including finding the right home and logistics support.</li>
              <li><strong>Vacation & Getaway Accommodation:</strong> Handpicked rentals for the perfect escape, from beachside villas to mountain retreats.</li>
              <li><strong>Land Purchase & Development:</strong> Expert guidance on land acquisition and property development to help realize your vision.</li>
            </ul>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Orange-Sun Homes, we are driven by a commitment to excellence, integrity, and customer satisfaction. We believe in building lasting relationships based on trust and transparency. Our team is passionate about real estate and dedicated to helping you find the perfect property, whether it&apos;s for living, investing, or vacationing.
            </p>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
            <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed mb-6">
              <li><strong>Personalized Service:</strong> Customized solutions that match your lifestyle and goals.</li>
              <li><strong>Expertise & Experience:</strong> A team of seasoned professionals providing the best advice and support.</li>
              <li><strong>Comprehensive Support:</strong> Assistance from the first consultation to the final transaction, ensuring a positive experience.</li>
            </ul>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Whether you&apos;re looking for a new place to call home, a vacation spot to unwind, or an investment opportunity, Orange-Sun Homes is here to help you achieve your real estate dreams. Contact us today to find out how we can assist you.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
              <Image
                src="/images/about_us.jpg" // Replace with your actual image path
                alt="About Us"
               width={600}
               height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
