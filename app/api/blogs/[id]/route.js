
import connectToDatabase from '@/app/lib/mongodb';
import Blog from '@/app/models/Blog';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { id } = params;
  await connectToDatabase();

  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  const { id } = params;
  await connectToDatabase();

  const { title, content, imageUrl } = await req.json();

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, { title, content, imageUrl }, { new: true });

    if (!updatedBlog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(updatedBlog);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;
  await connectToDatabase();

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}
