// app/api/properties/[id]/route.js
import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/lib/mongodb'; // Update path as necessary
import Property from '@/app/models/Property'; // Update path as necessary

// Connect to the database
connectToDatabase();

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    const property = await Property.findByIdAndDelete(id);

    if (!property) {
      return NextResponse.json({ message: 'Property not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Property deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to delete property' }, { status: 500 });
  }
}
