// import { connectToDatabase } from '../../lib/mongodb';
// import Property from '../../models/Property';

// export async function POST(req) {
//   await connectToDatabase();
//   const data = await req.json();

//   try {
//     const property = new Property(data);
//     await property.save();
//     return new Response(JSON.stringify(property), { status: 201 });
//   } catch (error) {
//     return new Response(JSON.stringify({ message: 'Failed to add property' }), { status: 500 });
//   }
// }

import connectToDatabase from '../../lib/mongodb';
import Property from '@/app/models/Property';

export async function POST(req) {
  try {
    await connectToDatabase(); // Ensure the database is connected

    const data = await req.json();
    const newProperty = new Property(data);
    await newProperty.save();

    return new Response(JSON.stringify({ message: 'Property added successfully!' }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Failed to add property', error: error.message }), { status: 500 });
  }
}



