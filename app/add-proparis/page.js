

'use client';

import React, { useState } from 'react';
import { CldImage } from 'next-cloudinary';

export default function AddBlog() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async () => {
    setLoading(true); // Show loading state while uploading
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'gzk48mwa'); // Replace with your Cloudinary preset

    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/dxhwiufpc/image/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setUploadedImageUrl(data.secure_url);
        setLoading(false);
        return data.secure_url; // Return the URL of the uploaded image
      } else {
        setLoading(false);
        alert('Failed to upload image');
        return null;
      }
    } catch (error) {
      setLoading(false);
      alert('An error occurred during the image upload.');
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Upload image to Cloudinary
    const imageUrl = await handleImageUpload();

    if (!imageUrl) return;

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
      setUploadedImageUrl('');
    } else {
      alert('Failed to add blog.');
    }
  };

  return (
    <div className="p-8 mt-16 max-w-4xl mx-auto">
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
        {loading && <p className="text-center text-orange-500">Uploading image...</p>}
        {uploadedImageUrl && (
          <CldImage width="400" height="250" src={uploadedImageUrl} alt="Uploaded image" />
        )}
        <button type="submit" className="w-full bg-gradient-to-r from-[#FF7F50] to-red-500 text-white py-2 rounded">
          Add Blog
        </button>
      </form>
    </div>
  );
}
