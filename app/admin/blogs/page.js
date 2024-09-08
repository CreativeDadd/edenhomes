'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch all blogs
    const fetchBlogs = async () => {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  const handleDelete = async () => {
    if (!blogToDelete) return;

    const response = await fetch(`/api/blogs/${blogToDelete._id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setBlogs(blogs.filter(blog => blog._id !== blogToDelete._id));
      setShowDeleteModal(false);
    } else {
      alert('Failed to delete blog.');
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8 mt-16">
      <h1 className="text-4xl font-bold mb-8 text-orange-600 text-center">Manage Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white shadow-lg rounded-lg p-4">
            <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
              <CldImage width="600" height="600" src={blog.imageUrl} alt={blog.title} className="w-full h-auto" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">{blog.title}</h2>
            <div className="flex justify-between items-center">
              <Link href={`/bogs/${blog._id}/edit`} className="text-blue-600 hover:underline">
                Edit
              </Link>
              <button
                onClick={() => {
                  setShowDeleteModal(true);
                  setBlogToDelete(blog);
                }}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-red-600">Are you sure you want to delete this blog?</h3>
            <p className="mb-6">This action cannot be undone.</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                No
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
