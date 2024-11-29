

// // 'use client'; // This tells Next.js to render this component on the client side
// // import { useSession, signOut } from "next-auth/react";
// // import Link from "next/link";

// // export default function AgentPage() {
// //   const { data: session } = useSession(); // Client-side session handling

// //   return (
// //     <section className="bg-white py-16 px-8 mt-10">
// //       <div className="max-w-4xl mx-auto text-center">
// //         <h2 className="text-4xl font-bold text-gray-800">
// //           Are You an Experienced Property Agent?
// //         </h2>
// //         <p className="text-lg text-green-500 pt-4">
// //           We partner with agents who have properties that we can onboard into
// //           our accommodation services. We see our agents as partners of progress
// //           and we ensure the relationship is mutually beneficial. If you need a
// //           reliable relocations company to work with, then you can signup below.
// //         </p>

// //         <div className="mt-8 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
// //           {session ? (
// //             <>
// //               <span className="text-lg font-semibold text-gray-700">
// //                 {session.user.email}
// //               </span>
// //               <Link
// //                 href="/admin/admin-dashboard"
// //                 className="underline text-[#FF7F69] font-medium hover:text-[#FF4B0A] transition-colors"
// //               >
// //                 Admin DashBoard
// //               </Link>
// //               <button
// //                 onClick={() => signOut()}
// //                 className="text-gray-800 hover:text-[#FF7F50] font-medium transition-colors"
// //               >
// //                 Logout
// //               </button>
// //             </>
// //           ) : (
// //             <>
// //               {/* SignUp Button */}
// //               <Link
// //                 href="/auth/signup"
// //                 className="font-medium bg-[#FF7F50] hover:bg-[#FF6A35] text-white py-3 px-6 transition-all rounded-full"
// //               >
// //                  SignUp
// //               </Link>

// //               {/* SignIn Button */}
// //               <Link
// //                 href="/auth/signin"
// //                 className="border border-[#ff5e24] text-gray-800 font-medium py-3 px-6 rounded-full hover:text-[#ff5e24] transition-colors"
// //               >
// //                 Login
// //               </Link>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }




















// 'use client'; // This tells Next.js to render this component on the client side
// import { useSession, signOut } from "next-auth/react";
// import Link from "next/link";

// export default function AgentPage() {
//   const { data: session } = useSession(); // Client-side session handling

//   return (
//     <section className="bg-white py-16 px-8 mt-10">
//       <div className="max-w-6xl mx-auto">
//         {/* Hero Section */}
//         <div className="text-center">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">
//             Are You an Experienced Property Agent?
//           </h2>
//           <p className="text-lg text-green-500 mb-6">
//             We partner with agents who have properties that we can onboard into our accommodation services. 
//             We see our agents as partners of progress and ensure the relationship is mutually beneficial.
//           </p>
//           <p className="text-gray-600 text-lg">
//             If you need a reliable relocations company to work with, sign up below to join us today.
//           </p>
//         </div>

//         {/* Buttons Section */}
//         <div className="mt-8 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
//           {session ? (
//             <>
//               <span className="text-lg font-semibold text-gray-700">
//                 Welcome, {session.user.email}
//               </span>
//               <Link
//                 href="/admin/admin-dashboard"
//                 className="underline text-[#FF7F69] font-medium hover:text-[#FF4B0A] transition-colors"
//               >
//                 Admin Dashboard
//               </Link>
//               <button
//                 onClick={() => signOut()}
//                 className="text-gray-800 hover:text-[#FF7F50] font-medium transition-colors"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link
//                 href="/auth/signup"
//                 className="font-medium bg-[#FF7F50] hover:bg-[#FF6A35] text-white py-3 px-6 transition-all rounded-full"
//               >
//                 Sign Up
//               </Link>
//               <Link
//                 href="/auth/signin"
//                 className="border border-[#ff5e24] text-gray-800 font-medium py-3 px-6 rounded-full hover:text-[#ff5e24] transition-colors"
//               >
//                 Login
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Additional Content Section */}
//         <div className="mt-16 bg-gray-100 p-8 rounded-lg shadow-md">
//           <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
//             Why Partner with Us?
//           </h3>
//           <ul className="space-y-6 text-gray-700">
//             <li>
//               <h4 className="font-semibold text-lg text-gray-800">
//                 1. We Partner with Lettings and Estate Agents
//               </h4>
//               <p className="text-gray-600">
//                 We actively seek partnerships with Lettings and Estate Agents to establish mutually beneficial arrangements for renting properties on a long-term basis.
//               </p>
//             </li>
//             <li>
//               <h4 className="font-semibold text-lg text-gray-800">
//                 2. Building Long-Term Relationships
//               </h4>
//               <p className="text-gray-600">
//                 Our goal is to foster enduring relationships with agents, ensuring consistent collaboration and shared success.
//               </p>
//             </li>
//             <li>
//               <h4 className="font-semibold text-lg text-gray-800">
//                 3. Supplying Properties for Professional and Corporate Tenants
//               </h4>
//               <p className="text-gray-600">
//                 Agents connect us with properties ideal for corporate tenants, including IT contractors, project managers, medical professionals, and other skilled contractors such as site managers, engineers, and quantity surveyors, who require accommodations for extended projects.
//               </p>
//             </li>
//             <li>
//               <h4 className="font-semibold text-lg text-gray-800">
//                 4. Attractive Benefits for Agents
//               </h4>
//               <p className="text-gray-600">
//                 Agents enjoy the advantage of receiving steady, long-term management fees without the responsibility of managing properties or handling tenant-related concerns.
//               </p>
//             </li>
//             <li>
//               <h4 className="font-semibold text-lg text-gray-800">
//                 5. Flexible Rental Periods
//               </h4>
//               <p className="text-gray-600">
//                 We seek rental agreements ranging from 12 to 36 months and are open to longer durations, depending on the specific contract requirements.
//               </p>
//             </li>
//             <li>
//               <h4 className="font-semibold text-lg text-gray-800">
//                 6. Opportunities with Specialized Properties
//               </h4>
//               <p className="text-gray-600">
//                 Agents can also benefit by involving us with multi-let/HMO properties, as well as probate or distressed properties, which we are open to refurbishing for optimal use.
//               </p>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }



















'use client';
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function AgentPage() {
  const { data: session } = useSession();

  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Are You an Experienced Property Agent?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-4">
            We partner with agents to onboard properties into our services. Our partnerships are mutually beneficial, ensuring consistent collaboration and success.
          </p>
          <p className="text-gray-600 text-lg sm:text-xl">
            If you're ready to work with a reliable relocations company, join us today!
          </p>
        </div>

        {/* Call-to-Actions */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          {session ? (
            <>
              <span className="text-lg font-semibold text-gray-800">
                Welcome, {session.user.email}
              </span>
              <Link
                href="/admin/admin-dashboard"
                className="text-[#FF7F69] font-medium underline hover:text-[#FF4B0A] transition-colors"
              >
                Admin Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="font-medium text-gray-800 hover:text-[#FF7F50] transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/signup"
                className="font-medium bg-[#FF7F50] hover:bg-[#FF6A35] text-white py-3 px-8 rounded-lg shadow-md transition-all"
              >
                Sign Up
              </Link>
              <Link
                href="/auth/signin"
                className="font-medium border border-[#ff5e24] text-gray-800 py-3 px-8 rounded-lg hover:border-[#FF7F50] hover:text-[#ff5e24] transition-all"
              >
                Login
              </Link>
            </>
          )}
        </div>

        {/* Why Partner with Us Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 lg:p-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 text-center">
            Why Partner with Us?
          </h3>
          <ul className="space-y-6 text-gray-700">
            {[
              "We Partner with Lettings and Estate Agents",
              "Building Long-Term Relationships",
              "Supplying Properties for Professional and Corporate Tenants",
              "Attractive Benefits for Agents",
              "Flexible Rental Periods",
              "Opportunities with Specialized Properties",
            ].map((title, idx) => (
              <li key={idx}>
                <h4 className="font-semibold text-lg text-gray-800">
                  {idx + 1}. {title}
                </h4>
                <p className="text-gray-600">
                  {
                    [
                      "We actively seek partnerships with Lettings and Estate Agents to establish mutually beneficial arrangements for renting properties on a long-term basis.",
                      "Our goal is to foster enduring relationships with agents, ensuring consistent collaboration and shared success.",
                      "Agents connect us with properties ideal for corporate tenants, including IT contractors, project managers, medical professionals, and other skilled contractors such as site managers, engineers, and quantity surveyors, who require accommodations for extended projects.",
                      "Agents enjoy the advantage of receiving steady, long-term management fees without the responsibility of managing properties or handling tenant-related concerns.",
                      "We seek rental agreements ranging from 12 to 36 months and are open to longer durations, depending on the specific contract requirements.",
                      "Agents can also benefit by involving us with multi-let/HMO properties, as well as probate or distressed properties, which we are open to refurbishing for optimal use.",
                    ][idx]
                  }
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits for Agents Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg shadow-lg p-8 lg:p-12">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 text-center">
            The Benefits for Agents
          </h3>
          <ul className="space-y-6 text-gray-700">
            {[
              "Generate Income from Previously Overlooked Properties",
              "Minimal Time and Resource Commitment",
              "Tenant Placement Handled for You",
              "Complete Property Management Services",
              "Maintain Your Landlord Fees",
              "Preserve Management Fees",
            ].map((title, idx) => (
              <li key={idx}>
                <h4 className="font-semibold text-lg text-gray-800">
                  {idx + 1}. {title}
                </h4>
                <p className="text-gray-600">
                  {
                    [
                      "Unlock revenue opportunities by leveraging properties you might have previously disregarded.",
                      "Create an additional income stream without significant investment of time or resources.",
                      "We take full responsibility for sourcing and managing tenants, eliminating the need for your involvement.",
                      "We handle all aspects of property management, ensuring you can focus on other priorities.",
                      "Continue to receive the tenant placement fee directly from the landlord.",
                      "If you manage the property, you retain your management fee without the effort of day-to-day administration.",
                    ][idx]
                  }
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
