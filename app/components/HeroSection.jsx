
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-white flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-16 mt-12 lg:mt-24">
      {/* Left Column - Text Content */}
      <div className="lg:w-1/2 flex flex-col space-y-8 text-center lg:text-left">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Discover Your Dream Home with 
          <span className="text-[#FF6A35]"> EdenHomes Limited</span>
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
        Discover your dream home away from home for vacation, staycation, get away or short visit.
        </p>

        {/* CTA Buttons */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row justify-center lg:justify-start">
          <Link href="/view-property">
            <button className="bg-[#FF6A35] hover:bg-[#ff4b0a] text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              View Availavle Appartments
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
          src="/images/home3.jpg"
          alt="Luxury home"
          className="rounded-lg shadow-xl max-w-full h-auto transform hover:scale-105 transition-all duration-500 ease-in-out"
        />
      </div>
    </section>
  );
}
