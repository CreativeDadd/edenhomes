


// app/dashboard/admin.js
'use client';

import Link from 'next/link';
import { signOut } from 'next-auth/react';

export default function AdminDashboard() {
  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <div className="container mx-auto mt-16 p-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-black">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/view-property">
          <button className="bg-gradient-to-r from-[#090a37] to-[#FF4500] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-md transition duration-200 w-full">
            View ALL Serviced Properties List
          </button>
        </Link>
        <Link href="/add-property">
          <button className="bg-gradient-to-r from-[#FF7F50] to-[#FF4500] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-md transition duration-200 w-full">
            Add New Property
          </button>
        </Link>

        <Link href="/blog-nav">
          <button className="bg-gradient-to-r from-[#194217] to-[#FF4500] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-md transition duration-200 w-full">
            View ALL Blogs Posted
          </button>
        </Link>
        <Link href="/add-blog">
          <button className="bg-gradient-to-r from-[#FF7F50] to-[#FF4500] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-md transition duration-200 w-full">
            Add New Blog
          </button>
        </Link>

        <Link href="/admin/blogs">
          <button className="bg-gradient-to-r from-[#FF7F50] to-[#FF4500] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-md transition duration-200 w-full">
            Update Blog Posts
          </button>
        </Link>

        <Link href="/admin/contacts">
          <button className="bg-gradient-to-r from-[#FF7F50] to-[#FF4500] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-md transition duration-200 w-full">
            View Messages
          </button>
        </Link>

        <Link href="/admin/update-properties">
          <button className="bg-gradient-to-r from-[#FF7F50] to-[#FF4500] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-md transition duration-200 w-full">
            Update Listed Properties
          </button>
        </Link>

        <Link href="/admin/approve-signups">
          <button className="bg-gradient-to-r from-[#FF7F50] to-[#FF4500] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-md transition duration-200 w-full">
            Approve Agents Signups
          </button>
        </Link>

        <Link href="/admin/properties">
          <button className="bg-gradient-to-r from-[#FF7F50] to-[#FF4500] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-md transition duration-200 w-full">
            Approve Agents' Property Posts
          </button>
        </Link>

        <button
          onClick={handleLogout}
          className="bg-black text-white py-4 px-6 rounded-lg text-lg font-semibold hover:shadow-md transition duration-200 w-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
