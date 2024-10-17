//app/api/agents/[agentId]/properties/route.js
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/lib/mongodb';
import Property from '@/app/models/Property';

export async function POST(req, { params }) {
  try {
    // Connect to the database
    await connectToDatabase();
    console.log("Database connected");

    // Extract agentId from the URL params
    const { agentId } = params;
    console.log("Received agentId:", agentId);

    // Validate agentId format
    if (!agentId) {
      return NextResponse.json({ error: 'Agent ID is required' }, { status: 400 });
    }

    if (!mongoose.Types.ObjectId.isValid(agentId)) {
      return NextResponse.json({ error: 'Invalid agentId format' }, { status: 400 });
    }

    // Parse the request body
    const body = await req.json();
    console.log("Property details received:", body);

    // Ensure all required fields are present
    const requiredFields = ['title', 'description', 'price', 'imageUrl', 'location', 'bedrooms', 'bathrooms'];
    for (let field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `${field} is required` }, { status: 400 });
      }
    }

    // Create a new property document
    const newProperty = new Property({
      title: body.title,
      description: body.description,
      price: body.price,
      discountPrice: body.discountPrice,
      discountPercent: body.discountPercent,
      imageUrl: body.imageUrl,
      location: body.location,
      bedrooms: body.bedrooms,
      bathrooms: body.bathrooms,
      kitchenImageUrl: body.kitchenImageUrl,
      frontImageUrl: body.frontImageUrl,
      compoundImageUrl: body.compoundImageUrl,
      sittingRoomImageUrl: body.sittingRoomImageUrl,
      specialPlaceImageUrl: body.specialPlaceImageUrl,
      agentId: new mongoose.Types.ObjectId(agentId), // Correct the usage of ObjectId here
      status: 'pending',
      createdAt: new Date(),
    });

    // Save the property to the database
    const savedProperty = await newProperty.save();
    console.log("Property saved successfully:", savedProperty);

    // Return a success response
    return NextResponse.json({ success: true, propertyId: savedProperty._id }, { status: 201 });
  } catch (error) {
    console.error('Error submitting property:', error);
    return NextResponse.json({ error: 'Failed to submit property' }, { status: 500 });
  }
} 






















// app/api/agents/[agentId]/properties/route.js

// GET - Fetch all properties for a specific agent (pending/approved)
export async function GET(req, { params }) {
  try {
    await connectToDatabase();
    const { agentId } = params;

    if (!mongoose.Types.ObjectId.isValid(agentId)) {
      return NextResponse.json({ error: 'Invalid agentId format' }, { status: 400 });
    }

    const properties = await Property.find({ agentId: agentId }); // Fetch properties for the agent
    return NextResponse.json(properties, { status: 200 });
  } catch (error) {
    console.error('Error fetching properties:', error);
    return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 });
  }
}

// // POST - Add a new property (already exists, just included for completeness)
// export async function POST(req, { params }) {
//   try {
//     await connectToDatabase();
//     const { agentId } = params;
    
//     if (!mongoose.Types.ObjectId.isValid(agentId)) {
//       return NextResponse.json({ error: 'Invalid agentId format' }, { status: 400 });
//     }

//     const body = await req.json();
//     const newProperty = new Property({
//       ...body,
//       agentId: new mongoose.Types.ObjectId(agentId),
//       status: 'pending',
//       createdAt: new Date(),
//     });

//     const savedProperty = await newProperty.save();
//     return NextResponse.json({ success: true, propertyId: savedProperty._id }, { status: 201 });
//   } catch (error) {
//     console.error('Error submitting property:', error);
//     return NextResponse.json({ error: 'Failed to submit property' }, { status: 500 });
//   }
// }



// // Don't forget a get request here for agent dashboard to show properties approved and those yet to be approved.









