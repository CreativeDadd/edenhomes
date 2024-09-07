// pages/api/blogs/index.js

import dbConnect from '../../lib/mongodb';
import Blog from '../../models/Blog';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const blogs = await Blog.find({});
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch blogs' });
    }
  } else if (req.method === 'POST') {
    try {
      const { title, content, imageUrl } = req.body;
      const blog = new Blog({ title, content, imageUrl });
      await blog.save();
      res.status(201).json(blog);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add blog' });
    }
  }
}
