


// //  app/admin/admin-dashboard/page.js
// 'use client';
// import Link from 'next/link';
// import { signOut } from 'next-auth/react';

// export default function AdminDashboard() {
//   const handleLogout = () => {
//     signOut({ callbackUrl: '/' });
//   };

//   return (
//     <div className="container mx-auto mt-16 p-6">
//       <h1 className="text-4xl font-bold text-center mb-10 text-black">
//         Admin Dashboard
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <Link href="/view-property">
//           <button className="bg-gradient-to-r from-[#090a37] to-[#FF4500] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-md transition duration-200 w-full">
//             View ALL Serviced Properties List
//           </button>
//         </Link>
//         <Link href="/add-property">
//           <button className="bg-gradient-to-r from-[#FF7F50] to-[#FF4500] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-md transition duration-200 w-full">
//             Add New Property
//           </button>
//         </Link>

//         <Link href="/blog-nav">
//           <button className="bg-gradient-to-r from-[#194217] to-[#FF4500] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-md transition duration-200 w-full">
//             View ALL Blogs Posted
//           </button>
//         </Link>
//         <Link href="/add-blog">
//           <button className="bg-gradient-to-r from-[#FF7F50] to-[#FF4500] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-md transition duration-200 w-full">
//             Add New Blog
//           </button>
//         </Link>

//         <Link href="/admin/blogs">
//           <button className="bg-gradient-to-r from-[#FF7F50] to-[#FF4500] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-md transition duration-200 w-full">
//             Update Blog Posts
//           </button>
//         </Link>

//         <Link href="/admin/contacts">
//           <button className="bg-gradient-to-r from-[#FF7F50] to-[#FF4500] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-md transition duration-200 w-full">
//             View Messages
//           </button>
//         </Link>

//         <Link href="/admin/update-property">
//           <button className="bg-gradient-to-r from-[#FF7F50] to-[#FF4500] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-md transition duration-200 w-full">
//             Update Listed Serviced Properties
//           </button>
//         </Link>

//         <Link href="/admin/approve-signups">
//           <button className="bg-gradient-to-r from-[#FF7F50] to-[#FF4500] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-md transition duration-200 w-full">
//             Approve Agents Signups
//           </button>
//         </Link>

//         <Link href="/admin/properties">
//           <button className="bg-gradient-to-r from-[#FF7F50] to-[#FF4500] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-md transition duration-200 w-full">
//             Approve Agents' Property Posts
//           </button>
//         </Link>

//         <button
//           onClick={handleLogout}
//           className="bg-black text-white py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-md transition duration-200 w-full"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }























// app/admin/admin-dashboard/page.js
'use client';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

export default function AdminDashboard() {
  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-900 via-gray-900 to-black bg-opacity-90 p-8">
      <div className="max-w-6xl mx-auto mt-16 p-6 rounded-xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/20">
        <h1 className="text-5xl font-extrabold text-center mb-10 text-white">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/view-property">
            <button className="glass-button">
              View ALL Serviced Properties List
            </button>
          </Link>
          <Link href="/add-property">
            <button className="glass-button">
              Add New Property
            </button>
          </Link>
          <Link href="/blog-nav">
            <button className="glass-button">
              View ALL Blogs Posted
            </button>
          </Link>
          <Link href="/add-blog">
            <button className="glass-button">
              Add New Blog
            </button>
          </Link>
          <Link href="/admin/blogs">
            <button className="glass-button">
              Update Blog Posts
            </button>
          </Link>
          <Link href="/admin/contacts">
            <button className="glass-button">
              View Messages
            </button>
          </Link>
          <Link href="/admin/update-property">
            <button className="glass-button">
              Update Listed Serviced Properties
            </button>
          </Link>
          <Link href="/admin/approve-signups">
            <button className="glass-button">
              Approve Agents Signups
            </button>
          </Link>
          <Link href="/admin/properties">
            <button className="glass-button">
              Approve Agents' Property Posts
            </button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-black/70 hover:bg-black/90 text-white py-4 px-6 rounded-lg text-lg font-semibold shadow-lg transition duration-200 w-full border border-gray-700 backdrop-blur-lg">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

