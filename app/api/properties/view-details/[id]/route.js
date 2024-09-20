// app/api/properties/[id]/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/mongodb'; // Update the path as necessary
import Property from '@/app/models/Property'; // Update the path as necessary

// Connect to the database
connectDB();

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const property = await Property.findById(id);
    if (!property) {
      return NextResponse.json({ message: 'Property not found' }, { status: 404 });
    }

    return NextResponse.json({ property }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch property' }, { status: 500 });
  }
}
