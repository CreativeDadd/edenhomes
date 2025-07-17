// import { NextResponse } from 'next/server'; // Correct import
// import connectToDatabase from '@/app/lib/mongodb';
// import Contact from '@/app/models/Contact';


// export async function GET() {
//   try {
//     await connectToDatabase();
//     const contacts = await Contact.find().sort({ createdAt: -1 }).lean();
//     return new Response(JSON.stringify(contacts), { status: 200 });
//   } catch (error) {
//     console.error('Error fetching contacts:', error);
//     return new Response('Failed to fetch contacts', { status: 500 });
//   }
// }



// export async function POST(req) {
//   try {
//     await connectToDatabase(); // Connect to MongoDB

//     const data = await req.json(); // Parse request body

//     // Save the contact data to MongoDB
//     const newContact = new Contact(data);
//     await newContact.save();

//     return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 201 });
//   } catch (error) {
//     return new Response(JSON.stringify({ message: 'Failed to send message', error: error.message }), { status: 500 });
//   }
// }


// // // app/api/contact/getcontact/route.js
// // import { nextResponse } from 'next/server';
// // import connectToDatabase from '../../lib/mongodb';
// // import Contact from '../../models/Contact';

// // export async function GET() {
// //   try {
// //     await connectToDatabase();
// //     const contacts = await Contact.find().sort({ createdAt: -1 }).lean();
// //     return new nextResponse(JSON.stringify(contacts), { status: 200 });
// //   } catch (error) {
// //     console.error('Error fetching contacts:', error);
// //     return new nextResponse('Failed to fetch contacts', { status: 500 });
// //   }
// // }




// // export async function GET() {
// //   try {
// //     await connectToDatabase();
// //     const contacts = await Contact.find().sort({ createdAt: -1 }).lean();
// //     return NextResponse.json(contacts); // Use NextResponse.json for JSON responses
// //   } catch (error) {
// //     console.error('Error fetching contacts:', error);
// //     return NextResponse.json({ message: 'Failed to fetch contacts' }, { status: 500 });
// //   }
// // }




import { NextResponse } from 'next/server';
import connectToDatabase from '../../lib/database'; // Updated path
import Contact from '../../models/Contact'; // Adjust path if needed

export async function GET() {
  try {
    await connectToDatabase();
    const contacts = await Contact.find(); // PostgreSQL doesn't need .lean()
    return NextResponse.json(contacts); // Use NextResponse.json for JSON responses
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json( { message: 'Failed to fetch contacts' }, { status: 500 } );
  }
}

export async function POST(req) {
  try {
    await connectToDatabase(); // Connect to PostgreSQL

    const data = await req.json(); // Parse request body

    // Save the contact data to PostgreSQL
    const newContact = await Contact.create(data);

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to send message', error: error.message }, { status: 500 });
  }
}
