'use client';

import React, { useState } from 'react';

export default function AddBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'your_cloudinary_preset'); // Replace with your Cloudinary preset

    const response = await fetch('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    return data.secure_url; // Return the URL of the uploaded image
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Upload image to Cloudinary
    const imageUrl = await handleImageUpload();

    // Send blog data to the API
    const response = await fetch('/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, imageUrl }),
    });

    if (response.ok) {
      alert('Blog added successfully!');
      setTitle('');
      setContent('');
      setImage(null);
    } else {
      alert('Failed to add blog.');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-orange-600">Add New Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Blog Title"
          className="w-full p-2 border border-gray-300 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Blog Content"
          className="w-full p-2 border border-gray-300 rounded"
          rows="6"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          className="w-full p-2"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded">
          Add Blog
        </button>
      </form>
    </div>
  );
}
