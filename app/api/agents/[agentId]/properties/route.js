// app/api/agents/[agentId]/properties/route.js

import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/lib/mongodb'; // Your database connection

export async function POST(req, { params }) {
  const { agentId } = params;

  if (!agentId) {
    return NextResponse.json({ error: 'Agent ID is required' }, { status: 400 });
  }

  try {
    const body = await req.json();

    // Example of property structure
    const newProperty = {
      agentId,
      title: body.title,
      description: body.description,
      price: body.price,
      discountPrice: body.discountPrice,
      discountPercent: body.discountPercent,
      location: body.location,
      bedrooms: body.bedrooms,
      bathrooms: body.bathrooms,
      images: body.images,
      status: 'pending', // By default, the property is pending approval
      createdAt: new Date(),
    };

    // Insert the new property into the database
    const result = await connectToDatabase.collection('properties').insertOne(newProperty);

    return NextResponse.json({ success: true, propertyId: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error('Error submitting property:', error);
    return NextResponse.json({ error: 'Failed to submit property' }, { status: 500 });
  }
}
