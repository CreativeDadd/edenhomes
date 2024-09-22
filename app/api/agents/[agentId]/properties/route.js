// // app/api/agents/[agentId]/properties/route.js

// import { NextResponse } from 'next/server';
// import connectToDatabase from '@/app/lib/mongodb'; // Your database connection
// import Property from '@/app/models/Property';

// export async function POST(req, { params }) {
//   const { agentId } = params;

//   if (!agentId) {
//     return NextResponse.json({ error: 'Agent ID is required' }, { status: 400 });
//   }

//   try {
//     // connect database
//     await connectToDatabase();

//     const body = await req.json();

//     // Example of property structure
//     const newProperty = {
//       agentId,
//       title: body.title,
//       description: body.description,
//       price: body.price,
//       discountPrice: body.discountPrice,
//       discountPercent: body.discountPercent,
//       imageUrl:body.imageUrl,
//       location: body.location,
//       bedrooms: body.bedrooms,
//       bathrooms: body.bathrooms,
//       kitchenImageUrl:body.kitchenImageUrl,
//       frontImageUrl: body.frontImageUrl,
//       compoundImageUrl: body.compoundImageUrl,
//       sittingRoomImageUrl: body.sittingRoomImageUrl,
//       specialPlaceImageUrl: body.specialPlaceImageUrl,
//       status: 'pending', // By default, the property is pending approval
//       createdAt: new Date(),
//     };



//     // Insert the new property into the database
//     const result = await connectToDatabase.collection('properties').insertOne(newProperty);

//     return NextResponse.json({ success: true, propertyId: result.insertedId }, { status: 201 });
//   } catch (error) {
//     console.error('Error submitting property:', error);
//     return NextResponse.json({ error: 'Failed to submit property' }, { status: 500 });
//   }
// }






























// // app/api/agents/[agentId]/properties/route.js
// import mongoose from 'mongoose';
// import { NextResponse } from 'next/server';
// import connectToDatabase from '@/app/lib/mongodb';
// import Property from '@/app/models/Property';

// export async function POST(req, { params }) {
  

//   try {
//     // Connect to the database
//     await connectToDatabase();
//     console.log("Already connected HERE BRO!!!");
//     const { agentId } = params;
//   // const agentId = params.agentId;
//   console.log("Received agentId:", agentId);

//   if (!mongoose.Types.ObjectId.isValid(agentId)) {
//     throw new Error('Invalid agentId format');
//   }
//   if (!agentId) {
//     return NextResponse.json({ error: 'Agent ID is required' }, { status: 400 });
//   }


//     const body = await req.json();

//     // Property structure
//     const newProperty = {
//       title: body.title,
//       description: body.description,
//       price: body.price,
//       discountPrice: body.discountPrice,
//       discountPercent: body.discountPercent,
//       imageUrl: body.imageUrl,
//       location: body.location,
//       bedrooms: body.bedrooms,
//       bathrooms: body.bathrooms,
//       kitchenImageUrl: body.kitchenImageUrl,
//       frontImageUrl: body.frontImageUrl,
//       compoundImageUrl: body.compoundImageUrl,
//       sittingRoomImageUrl: body.sittingRoomImageUrl,
//       specialPlaceImageUrl: body.specialPlaceImageUrl,
//       agentId: agentId || null,
//       status: 'pending', // Default status is pending approval
//       createdAt: new Date(),
//     };

//     // Insert the new property into the database using the Property model
//     const result = await Property.create(newProperty);

//     return NextResponse.json({ success: true, propertyId: result._id }, { status: 201 });
//   } catch (error) {
//     console.error('Error submitting property:', error);
//     return NextResponse.json({ error: 'Failed to submit property' }, { status: 500 });
//   }
// }





















// // app/api/agents/[agentId]/properties/route.js
// import mongoose from 'mongoose';
// import { NextResponse } from 'next/server';
// import connectToDatabase from '@/app/lib/mongodb';
// import Property from '@/app/models/Property';

// export async function POST(req, { params }) {
//   try {
//     // Connect to the database
//     await connectToDatabase();
//     console.log("Database connected");

//     // Extract agentId from the URL params
//     const { agentId } = params;
//     console.log("Received agentId:", agentId);

//     // Validate agentId format
//     if (!agentId) {
//       return NextResponse.json({ error: 'Agent ID is required' }, { status: 400 });
//     }

//     if (!mongoose.Types.ObjectId.isValid(agentId)) {
//       return NextResponse.json({ error: 'Invalid agentId format' }, { status: 400 });
//     }

//     // Parse the request body
//     const body = await req.json();
//     console.log("Property details received:", body);

//     // Ensure all required fields are present
//     const requiredFields = ['title', 'description', 'price', 'imageUrl', 'location', 'bedrooms', 'bathrooms'];
//     for (let field of requiredFields) {
//       if (!body[field]) {
//         return NextResponse.json({ error: `${field} is required` }, { status: 400 });
//       }
//     }

//     // Create a new property document
//     const newProperty = new Property({
//       title: body.title,
//       description: body.description,
//       price: body.price,
//       discountPrice: body.discountPrice,
//       discountPercent: body.discountPercent,
//       imageUrl: body.imageUrl,
//       location: body.location,
//       bedrooms: body.bedrooms,
//       bathrooms: body.bathrooms,
//       kitchenImageUrl: body.kitchenImageUrl,
//       frontImageUrl: body.frontImageUrl,
//       compoundImageUrl: body.compoundImageUrl,
//       sittingRoomImageUrl: body.sittingRoomImageUrl,
//       specialPlaceImageUrl: body.specialPlaceImageUrl,
//       agentId: mongoose.Types.ObjectId(agentId), // Correctly assign agentId
//       status: 'pending',
//       createdAt: new Date(),
//     });

//     // Save the property to the database
//     const savedProperty = await newProperty.save();
//     console.log("Property saved successfully:", savedProperty);

//     // Return a success response
//     return NextResponse.json({ success: true, propertyId: savedProperty._id }, { status: 201 });
//   } catch (error) {
//     console.error('Error submitting property:', error);
//     return NextResponse.json({ error: 'Failed to submit property' }, { status: 500 });
//   }
// }
































// app/api/agents/[agentId]/properties/route.js
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
      agentId: mongoose.Types.ObjectId(agentId), // Correctly assign agentId
      agentId: agent._id,
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
