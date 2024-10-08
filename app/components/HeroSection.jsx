

// import Image from "next/image";
// import Link from "next/link";

// export default function HeroSection() {
//     return (
//       <section className="bg-white flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-16 mt-12">
//         {/* Left Column - Text Content */}
//         <div className="lg:w-1/2 flex flex-col space-y-6 text-center lg:text-left">
//           <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 leading-snug">
//             Discover Your Dream Home with Orange-Sun Homes Limited
//           </h1>
//           <p className="text-gray-600 text-lg">
//             Explore our wide range of properties designed to meet your needs, whether you&apos;re looking for a relocation, vacation, or getaway accommodation.
//           </p>
//           {/* CTA Buttons */}
//           <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center lg:justify-start">
//             <Link href="/view-property">
//               <button className="bg-[#FF6A35] hover:bg-[#ff4b0a] text-white font-semibold py-3 px-6 rounded-md transition-all">
//                 View Serviced Appartments
//               </button>
//             </Link>
//             <Link href="/contact">
//               <button className="border border-[#FF7F50] hover:bg-[#FF7F50] text-[#FF7F50] hover:text-white font-semibold py-3 px-6 rounded-md transition-all">
//                 Book Accommodation
//               </button>
//             </Link>
//           </div>
//         </div>
  
//         {/* Right Column - Image */}
//         <div className="lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
//           <Image
//             width={1100}
//             height={1100}
//             src="/images/orangesunHEROimg.jpg"
//             alt="Luxury home"
//             className="rounded-lg max-w-full h-auto"
//           />
//         </div>
//       </section>
//     );
// }































import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-white flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-16 mt-12 lg:mt-24">
      {/* Left Column - Text Content */}
      <div className="lg:w-1/2 flex flex-col space-y-8 text-center lg:text-left">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Discover Your Dream Home with 
          <span className="text-[#FF6A35]"> Orange-Sun Homes Limited</span>
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
          Explore our curated selection of premium properties that cater to your 
          relocation, vacation, or getaway needs, designed with luxury and comfort in mind.
        </p>

        {/* CTA Buttons */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row justify-center lg:justify-start">
          <Link href="/view-property">
            <button className="bg-[#FF6A35] hover:bg-[#ff4b0a] text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              View Serviced Apartments
            </button>
          </Link>
          <Link href="/contact">
            <button className="border border-[#FF6A35] hover:bg-[#FF6A35] text-[#FF6A35] hover:text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Book Accommodation
            </button>
          </Link>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end mb-12 lg:mb-0">
        <Image
          width={1000}
          height={1000}
          src="/images/orangesunHEROimg.jpg"
          alt="Luxury home"
          className="rounded-lg shadow-xl max-w-full h-auto transform hover:scale-105 transition-all duration-500 ease-in-out"
        />
      </div>
    </section>
  );
}
