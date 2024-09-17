// // import Property from '@/app/models/Property';
// // import connectToDatabase from '@/app/lib/mongodb';
// // import { getSession } from 'next-auth/react';

// // export async function POST(req) {
// //   try {
// //     await connectToDatabase();
// //     const session = await getSession({ req });

// //     if (!session || !session.user) {
// //       return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
// //     }

// //     const agentId = session.user.id;
// //     const { title, description, imageUrl, price, location } = await req.json();

// //     const newProperty = new Property({
// //       agentId,
// //       title,
// //       description,
// //       imageUrl,
// //       price,
// //       location,
// //       isApproved: false, // Property needs admin approval
// //     });

// //     await newProperty.save();

// //     return new Response(JSON.stringify({ message: 'Property submitted for approval' }), { status: 201 });
// //   } catch (error) {
// //     console.error('Error adding property:', error);
// //     return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
// //   }
// // }






// import Property from '@/app/models/Property';
// import connectToDatabase from '@/app/lib/mongodb';
// import { getSession } from 'next-auth/react';

// export async function POST(req) {
//   try {
//     // Connect to the database
//     await connectToDatabase();

//     // Retrieve session to identify the agent submitting the property
//     const session = await getSession({ req });

//     if (!session || !session.user) {
//       return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
//     }

//     // Extract agentId from the session and property details from the request body
//     const agentId = session.user.id;
//     const { title, description, imageUrl, price, location } = await req.json();

//     // Create a new property entry in the database
//     const newProperty = new Property({
//       agentId,
//       title,
//       description,
//       imageUrl,
//       price,
//       location,
//       isApproved: false, // Mark as pending admin approval
//     });

//     // Save the property to the database
//     await newProperty.save();

//     // Return success response
//     return new Response(
//       JSON.stringify({ message: 'Property submitted for approval' }),
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error('Error submitting property:', error);
//     return new Response(
//       JSON.stringify({ message: 'Internal Server Error' }),
//       { status: 500 }
//     );
//   }
// }




// File: app/api/agents/submit-property/route.js
import Property from '@/app/models/Property';
import connectToDatabase from '@/app/lib/mongodb';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function POST(req) {
  try {
    await connectToDatabase();

    // Get session using next-auth to verify agent
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
    }

    const agentId = session.user.id; // Get agent ID from the session
    const { title, description, imageUrl, price, location } = await req.json(); // Get property details

    // Create new property object with pending admin approval
    const newProperty = new Property({
      agentId,
      title,
      description,
      imageUrl,
      price,
      location,
      isApproved: false, // Requires admin approval before being live
    });

    // Save property to the database
    await newProperty.save();

    return new Response(JSON.stringify({ message: 'Property submitted for approval' }), { status: 201 });
  } catch (error) {
    console.error('Error adding property:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}
