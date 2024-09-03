// app/api/properties/route.js
import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../lib/mongodb';
import Property from '../../models/Property';

export async function GET() {
  await connectToDatabase();
  const properties = await Property.find({});
  return NextResponse.json(properties);
}
