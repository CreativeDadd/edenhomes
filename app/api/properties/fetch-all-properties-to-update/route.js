// app/api/properties/route.js
import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/lib/mongodb'; // Update path as necessary
import Property from '@/app/models/Property'; // Update path as necessary

// Connect to the database
connectToDatabase();

export async function GET() {
  try {
    const properties = await Property.find({});
    return NextResponse.json({ properties }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch properties' }, { status: 500 });
  }
}

