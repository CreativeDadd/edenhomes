
import connectToDatabase from '@/app/lib/mongodb';
import Properis from '@/app/models/Blog';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { id } = params;
  await connectToDatabase();

  try {
    const properi = await Properis.findById(id);

    if (!properi) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(properi);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  const { id } = params;
  await connectToDatabase();

  const { title, content, imageUrl } = await req.json();

  try {
    const updatedProperis = await Blog.findByIdAndUpdate(id, { title, content, imageUrl }, { new: true });

    if (!updatedProperis) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(updatedProperis);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;
  await connectToDatabase();

  try {
    const deletedProperis = await Properis.findByIdAndDelete(id);

    if (!deletedProperis) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}
