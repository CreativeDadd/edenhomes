import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/lib/mongodb';
import Property from '@/app/models/Property';

export async function DELETE(req, { params }) {
  const { id } = params;  // Extract the ID from the URL params
  try {
    await connectToDatabase();
    const deletedProperty = await Property.findByIdAndDelete(id);

    if (!deletedProperty) {
      return new NextResponse('Property not found', { status: 404 });
    }

    return new NextResponse('Property deleted successfully', { status: 200 });
  } catch (error) {
    console.error('Error deleting property:', error);
    return new NextResponse('Failed to delete property', { status: 500 });
  }
}
