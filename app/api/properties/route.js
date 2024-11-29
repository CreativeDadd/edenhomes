// app/api/properties/route.js
// app/api/agent/properties/route.js
import connectToDatabase from '@/app/lib/mongodb';
import Property from '@/app/models/Property';
import { getSession } from 'next-auth/react';
import { NextResponse } from 'next/server';

// export async function GET() {
//   await connectToDatabase();
//   const properties = await Property.find({}).lean();
//   return NextResponse.json(properties);
// }

export async function GET() {
  await connectToDatabase();
  const properties = await Property.find({}).lean();
  
  // Serialize the documents by converting _id to string and handling dates
  const serializedProperties = properties.map(property => ({
    ...property,
    _id: property._id.toString(),
    createdAt: property.createdAt.toISOString(),
    agentId: property.agentId ? property.agentId.toString() : null
  }));

  return NextResponse.json(serializedProperties);
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


// export async function GET(req) {
//   const session = await getSession({ req });
//   if (!session || session.user.role !== 'agent') {
//     return new Response('Unauthorized', { status: 401 });
//   }

//   await connectToDatabase();
//   const properties = await Property.find({ agentId: session.user.id });
  
//   return new Response(JSON.stringify(properties), {
//     headers: { 'Content-Type': 'application/json' },
//   });
// }
