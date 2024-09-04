// // app/api/contact/getcontact/route.js
// import { nextResponse } from 'next/server';
// import connectToDatabase from '../../lib/mongodb';
// import Contact from '../../models/Contact';

// export async function GET() {
//   try {
//     await connectToDatabase();
//     const contacts = await Contact.find().sort({ createdAt: -1 }).lean();
//     return new nextResponse(JSON.stringify(contacts), { status: 200 });
//   } catch (error) {
//     console.error('Error fetching contacts:', error);
//     return new nextResponse('Failed to fetch contacts', { status: 500 });
//   }
// }



import { NextResponse } from 'next/server'; // Correct import
import connectToDatabase from '../../../lib/mongodb'; // Adjust path if needed
import Contact from '../../../models/Contact'; // Adjust path if needed

export async function GET() {
  try {
    await connectToDatabase();
    const contacts = await Contact.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json(contacts); // Use NextResponse.json for JSON responses
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json({ message: 'Failed to fetch contacts' }, { status: 500 });
  }
}
