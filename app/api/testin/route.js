import Property from "@/app/models/Property";
import connectToDatabase from "@/app/lib/mongodb";
import { NextResponse } from 'next/server';

export async function GET() {
  await connectToDatabase();
  try {
    const propertyitems = await Property.find({});
    return NextResponse.json(propertyitems);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}