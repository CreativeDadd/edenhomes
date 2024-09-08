// app/api/properties/route.js
import { NextResponse } from 'next/server';
import  connectToDatabase  from '../../lib/mongodb';
import Property from '../../models/Property';

export async function GET() {
  await connectToDatabase();
  const properties = await Property.find({}).lean();
  return NextResponse.json(properties);
}





export async function DELETE(req, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;

    const result = await Property.findByIdAndDelete(id);

    if (!result) {
      return new NextResponse('Property not found', { status: 404 });
    }

    return new NextResponse('Property deleted successfully', { status: 200 } );
  } catch (error) {
    console.error('Error deleting property:', error);
    return new NextResponse('Failed to delete property', { status: 500 } );
  }
}
