// app/api/admin/properties/[propertyId]/route.js

import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/lib/mongodb'; // Your database connection

export async function PATCH(req, { params }) {
  const { propertyId } = params;

  if (!propertyId) {
    return NextResponse.json({ error: 'Property ID is required' }, { status: 400 });
  }

  try {
    const { status } = await req.json(); // Expecting 'approved' or 'rejected'

    if (!['approved', 'rejected'].includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    // Update the property status in the database
    const result = await connectToDatabase.collection('properties').updateOne(
      { _id: new ObjectId(propertyId) }, // Assuming you're using MongoDB
      { $set: { status } }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ error: 'Failed to update property status' }, { status: 404 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error updating property status:', error);
    return NextResponse.json({ error: 'Failed to update property status' }, { status: 500 });
  }
}
