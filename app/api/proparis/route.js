import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/lib/mongodb';
import Blog from '@/app/models/Blog';

export async function GET() {
  await connectToDatabase();
  try {
    const blogs = await Blog.find({});
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(req) {
  await connectToDatabase();
  try {
    const { title, content, imageUrl } = await req.json();
    const blog = new Blog({ title, content, imageUrl });
    await blog.save();
    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add blog' }, { status: 500 });
  }
}
