import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="container mx-auto p-8 mt-12 max-w-4xl">
      <h2 className="text-4xl font-bold text-black mb-6">Admin Dashboard</h2>
      <div className="grid grid-cols-2 gap-6">
        <Link href="/admin/add-property">
          <a className="p-6 bg-gradient-to-r from-[#FF7F50] to-[#FF4500] text-white font-semibold rounded-md shadow-md hover:shadow-lg transition">
            Add New Property
          </a>
        </Link>
        <Link href="/admin/add-blog">
          <a className="p-6 bg-gradient-to-r from-[#FF7F50] to-[#FF4500] text-white font-semibold rounded-md shadow-md hover:shadow-lg transition">
            Add New Blog
          </a>
        </Link>
        {/* Additional buttons as needed */}
      </div>
    </div>
  );
}
