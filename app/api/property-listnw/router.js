// // // /app/api/property-list-api/route.js
// // import { NextResponse } from 'next/server';
// // import connectToDatabase from '@/app/lib/mongodb';
// // import Property from '@/app/models/Property';

// // export async function GET(req) {
// //   try {
// //     // Attempt to connect to MongoDB
// //     await connectToDatabase();

// //     // Fetch properties from the database
// //     const propertis = await Property.find();

// //     console.log('Properties fetched successfully:', propertis);

// //     // Return the fetched properties as JSON
// //     return NextResponse.json(propertis, { status: 200 });
// //   } catch (error) {
// //     console.error('Error fetching properties:', error);

// //     // Check for specific errors (e.g., connection or query errors)
// //     let errorMessage = 'Failed to fetch properties';
    
// //     if (error.name === 'MongoNetworkError') {
// //       errorMessage = 'Database connection failed. Please check your MongoDB server.';
// //     } else if (error.name === 'CastError') {
// //       errorMessage = 'Invalid data format in database.';
// //     } else if (error.message.includes('timeout')) {
// //       errorMessage = 'Database request timeout. Please try again later.';
// //     }

// //     // Log detailed error to the console
// //     console.error('Detailed Error:', error);

// //     // Return a more detailed error response
// //     return NextResponse.json({ error: errorMessage }, { status: 500 });
// //   }
// // }




























// import connectToDatabase from '@/app/lib/mongodb';
// import Property from '@/app/models/Property';
// import { NextResponse } from 'next/server';

// export async function GET(req) {
//   try {
//     // Connect to MongoDB
//     await connectToDatabase();

//     // Fetch properties from the database
//     const properties = await Property.find();

//     // Log the fetched properties for debugging
//     console.log(properties);

//     // Respond with the list of properties in JSON format
//     return NextResponse.json(properties, { status: 200 });
//   } catch (error) {
//     console.error('Error fetching properties:', error);

//     // Respond with an error message if the fetch fails
//     return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 });
//   }
// }


























import connectToDatabase from '@/app/lib/mongodb';
import Property from '@/app/models/Property';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Connect to MongoDB
    await connectToDatabase();

    // Fetch properties from the database
    const properties = await Property.find();

    // Log the fetched properties for debugging
    console.log(properties);

    // Respond with the list of properties in JSON format
    return NextResponse.json(properties, { status: 200 });
  } catch (error) {
    console.error('Error fetching properties:', error);

    // Respond with an error message if the fetch fails
    return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 });
  }
}

