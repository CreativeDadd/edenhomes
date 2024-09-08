// import Link from 'next/link';
// import Image from 'next/image';

// export default function AboutSection() {
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
//               Our goal is to make the home rental process as smooth and enjoyable as possible. We pride ourselves on our extensive knowledge of the real estate market and our personalized approach to meet each client's unique needs.
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










import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-gray-700 mb-6">
              At Orange-Sun Homes, we are dedicated to helping you find your perfect home. With a wide range of properties available, from luxury homes to cozy apartments, our team is committed to providing exceptional service and expert advice.
            </p>
            <p className="text-gray-700 mb-6">
              Our goal is to make the home rental process as smooth and enjoyable as possible. We pride ourselves on our extensive knowledge of the real estate market and our personalized approach to meet each client&#39;s unique needs.
            </p>
            <Link href="/contact" passHref>
              <button className="bg-[#FF4500] text-white py-2 px-6 rounded-lg hover:bg-[#FF6F40] transition-colors">
                Get in Touch
              </button>
            </Link>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <Image
              src="/images/property_1.jpg" // Make sure to add an appropriate image
              alt="About Us" width={450} height={450}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
