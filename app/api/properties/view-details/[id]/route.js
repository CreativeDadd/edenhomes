// // app/api/properties/[id]/route.js
// import { NextResponse } from 'next/server';
// import connectToDatabase from '@/app/lib/mongodb'; // Update the path as necessary
// import Property from '@/app/models/Property'; // Update the path as necessary

// // Connect to the database
// connectToDatabase();

// export async function GET(req, { params }) {
//   const { id } = params;

//   try {
//     const property = await Property.findById(id);
//     if (!property) {
//       return NextResponse.json({ message: 'Property not found' }, { status: 404 });
//     }

//     return NextResponse.json({ property }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: 'Failed to fetch property' }, { status: 500 });
//   }
// }

















import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/lib/mongodb';
import Property from '@/app/models/Property';

export async function GET(req, { params }) {
  await connectToDatabase();
  const { id } = params;

  try {
    const property = await Property.findById(id).lean(); // .lean() returns plain JS object

    if (!property) {
      return NextResponse.json({ message: 'Property not found' }, { status: 404 });
    }

    // Ensure proper date serialization
    const serializedProperty = {
      ...property,
      _id: property._id.toString(),
      createdAt: property.createdAt ? new Date(property.createdAt).toISOString() : null,
      agentId: property.agentId ? property.agentId.toString() : null,
    };

    return NextResponse.json({ property: serializedProperty }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch property', error: error.message }, { status: 500 });
  }
}
