// // app/components/HeroSection.js


// export default function HeroSection() {
//     return (
//       <section className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-white py-20">
//         <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
//           {/* Left Column: Text and CTA */}
//           <div className="w-full md:w-1/2 mb-12 md:mb-0">
//             <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
//               Find Your Dream Home with{' '}
//               <span className="text-black">Orange-Sun Homes</span>
//             </h1>
//             <p className="mt-6 text-lg leading-relaxed">
//               Discover luxurious properties across prime locations. Whether you're looking for a rental, relocation, or vacation getaway, we've got you covered.
//             </p>
//             <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//               <button className="bg-black text-white hover:bg-white hover:text-black transition py-3 px-6 rounded-lg">
//                 Browse Listings
//               </button>
//               <button className="bg-white text-orange-600 hover:bg-black hover:text-white transition py-3 px-6 rounded-lg">
//                 Contact Us
//               </button>
//             </div>
//           </div>
  
//           {/* Right Column: Image */}
//           <div className="w-full md:w-1/2">
//             <img
//               src="/path-to-your-image.jpg"
//               alt="Luxurious Home"
//               className="rounded-lg shadow-lg object-cover w-full h-full"
//             />
//           </div>
//         </div>
//       </section>
//     );
//   }
  
// import Image from "next/image";
// import Link from "next/link";


// export default function HeroSection() {
//     return (
//       <section className=" bg-white flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-16  mt-12">
//         {/* Left Column - Text Content */}
//         <div className="lg:w-1/2 flex flex-col space-y-6 text-center lg:text-left">
//           <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 leading-snug">
//             Discover Your Dream Home with Orange-Sun Homes Limited
//           </h1>
//           <p className="text-gray-600 text-lg">
//             Explore our wide range of properties designed to meet your needs, whether you're looking for a relocation, vacation, or getaway accommodation.
//           </p>
//           {/* CTA Buttons */}
//           <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center lg:justify-start">
//             <Link href="/view-property">
//             <button className="bg-[#FF6A35] hover:bg-[#FF7F50] text-white font-semibold py-3 px-6 rounded-md transition-all">
//               View Listings
//             </button></Link>
//             <Link href="/contact">
//             <button className="border border-[#FF7F50] hover:bg-[#FF7F50] text-[#FF7F50] hover:text-white font-semibold py-3 px-6 rounded-md transition-all">
//               Contact Us
//             </button></Link>
//           </div>
//         </div>
  
//         {/* Right Column - Image */}
//         <div className="lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
//           <Image width={1100}  height={1100}
//             src="/images/hero.png"
//             alt="Luxury home"
//             className="rounded-lg max-w-full h-auto"
//           />
//         </div>
//       </section>
//     );
//   }
  




import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
      <section className="bg-white flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-16 mt-12">
        {/* Left Column - Text Content */}
        <div className="lg:w-1/2 flex flex-col space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 leading-snug">
            Discover Your Dream Home with Orange-Sun Homes Limited
          </h1>
          <p className="text-gray-600 text-lg">
            Explore our wide range of properties designed to meet your needs, whether you&apos;re looking for a relocation, vacation, or getaway accommodation.
          </p>
          {/* CTA Buttons */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center lg:justify-start">
            <Link href="/view-property">
              <button className="bg-[#FF6A35] hover:bg-[#FF7F50] text-white font-semibold py-3 px-6 rounded-md transition-all">
                View Listings
              </button>
            </Link>
            <Link href="/contact">
              <button className="border border-[#FF7F50] hover:bg-[#FF7F50] text-[#FF7F50] hover:text-white font-semibold py-3 px-6 rounded-md transition-all">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
  
        {/* Right Column - Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
          <Image
            width={1100}
            height={1100}
            src="/images/orangsunNWlogo.jpg"
            alt="Luxury home"
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </section>
    );
}
