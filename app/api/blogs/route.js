// // app/api/blogs/route.js

// import connectToDatabase from '../../lib/mongodb';
// import Blog from '../../models/Blog';

// export default async function handler(req, res) {
//   await connectToDatabase();

//   if (req.method === 'GET') {
//     try {
//       const blogs = await Blog.find({});
//       res.status(200).json(blogs);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to fetch blogs' });
//     }
//   } else if (req.method === 'POST') {
//     try {
//       const { title, content, imageUrl } = req.body;
//       const blog = new Blog({ title, content, imageUrl });
//       await blog.save();
//       res.status(201).json(blog);
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to add blog' });
//     }
//   }
// }







import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/lib/database';
import Blog from '@/app/models/Blog';

export async function GET() {
  await connectToDatabase();
  try {
    const blogs = await Blog.find();
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(req) {
  await connectToDatabase();
  try {
    const { title, content, imageUrl } = await req.json();
    const blog = await Blog.create({ title, content, imageUrl });
    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add blog' }, { status: 500 });
  }
}
