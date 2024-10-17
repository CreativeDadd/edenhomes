// import { NextResponse } from 'next/server';
// import connectToDatabase from '@/app/lib/mongodb';
// import Property from '@/app/models/Property';

// // GET all properties for admin approval
// export async function GET() {
//   try {
//     await connectToDatabase(); // Ensure the database is connected

//     // Fetch all properties where status is 'pending'
//     const pendingProperties = await Property.find({ status: 'pending' }).populate('agentId'); // Assuming agentId references an Agent model

//     return NextResponse.json(pendingProperties, { status: 200 });
//   } catch (error) {
//     console.error('Error fetching properties for admin:', error);
//     return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 });
//   }
// }




















// app/api/admin/properties/route.js
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/lib/mongodb';
import Property from '@/app/models/Property';

// GET - Fetch all pending properties (for Admin approval)
export async function GET() {
  try {
    await connectToDatabase();
    
    const pendingProperties = await Property.find({ status: 'pending' }).populate('agentId', 'name email'); // Fetch pending properties with agent info
    return NextResponse.json(pendingProperties, { status: 200 });
  } catch (error) {
    console.error('Error fetching properties:', error);
    return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 });
  }
}
