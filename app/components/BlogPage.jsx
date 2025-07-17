'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from the API
    const fetchBlogs = async () => {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      // Ensure that we always have an array
      if (Array.isArray(data)) {
        setBlogs(data);
      } else {
        setBlogs([]);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="p-8 mt-16">
      <h1 className="text-4xl font-bold mb-8 text-orange-600">Our Latest Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.id} className="border rounded-lg shadow-md overflow-hidden">
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-bold text-orange-600 mb-2">{blog.title}</h2>
                <p className="text-gray-700 mb-4">{blog.content.slice(0, 100)}...</p>
                <a href={`/blog/${blog.id}`} className="text-orange-500 hover:text-[#FF7F50]">
                  Read More
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500 text-lg">No blogs available at the moment.</p>
            <p className="text-gray-400 text-sm mt-2">Database connection required to display blogs.</p>
          </div>
        )}
      </div>
    </div>
  );
}

