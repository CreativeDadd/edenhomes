'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CldImage } from 'next-cloudinary';

export default function EditBlog({ params }) {
  const { id } = params;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Fetch the existing blog data
    const fetchBlog = async () => {
      const response = await fetch(`/api/blogs/${id}`);
      const blog = await response.json();

      setTitle(blog.title);
      setContent(blog.content);
      setImageUrl(blog.imageUrl);
    };

    fetchBlog();
  }, [id]);

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'gzk48mwa'); // Replace with your Cloudinary preset

    const response = await fetch('https://api.cloudinary.com/v1_1/dxhwiufpc/image/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    return data.secure_url; // Return the URL of the uploaded image
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload image to Cloudinary if a new image is selected
    let updatedImageUrl = imageUrl;
    if (image) {
      updatedImageUrl = await handleImageUpload();
    }

    // Update the blog via API
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, imageUrl: updatedImageUrl }),
    });

    if (response.ok) {
      alert('Blog updated successfully!');
      router.push(`/blogs/${id}`);
    } else {
      alert('Failed to update blog.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 md:mt-16">
      <h1 className="text-4xl font-bold mb-6 text-center text-orange-600">Edit Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Blog Title"
          className="w-full p-3 border border-gray-300 rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Blog Content"
          className="w-full p-3 border border-gray-300 rounded-md"
          rows="6"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          className="w-full p-3 border border-gray-300 rounded-md"
          onChange={(e) => setImage(e.target.files[0])}
        />
        {imageUrl && (
          <div className="w-full max-h-96 overflow-hidden rounded-lg mb-4">
            <CldImage width="600" height="600" src={imageUrl} alt={title} className="w-full h-auto" />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#FF7F50] to-red-500 text-white py-3 rounded-md text-lg font-semibold hover:shadow-lg transition duration-200"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
}
