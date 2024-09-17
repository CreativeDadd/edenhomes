// // import NwUser from '@/app/models/NwUser';
// // import connectToDatabase from '@/app/lib/mongodb';
// // import { isAdmin } from '@/app/lib/auth'; // Assuming you have a function to check if the user is admin

// // export async function GET(req) {
// //   await connectToDatabase();

// //   // Check if the user is an admin
// //   const session = await isAdmin(req);
// //   if (!session || !session.user.isAdmin) {
// //     return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
// //   }

// //   // Fetch unapproved agents
// //   const agents = await NwUser.find({ role: 'agent', isApproved: false });

// //   return new Response(JSON.stringify({ agents }), { status: 200 });
// // }














// import NwUser from '@/app/models/NwUser'; // Use the correct User model
// import connectToDatabase from '@/app/lib/mongodb';
// import { isAdmin } from '@/app/lib/auth'; // Assuming this exists and checks admin role

// // export async function GET(req) {
// //   try {
// //     await connectToDatabase();

// //     // Check if the user is an admin
// //     const session = await isAdmin(req);
// //     if (!session || !session.user || session.user.role !== 'admin') {
// //       return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
// //     }

// //     // Fetch unapproved agents
// //     const agents = await NwUser.find({ role: 'agent', isApproved: false });

// //     return new Response(JSON.stringify({ agents }), { status: 200 });
// //   } catch (error) {
// //     console.error('Error fetching agents:', error);
// //     return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
// //   }
// // }



// export async function GET(req) {
//   try {
//     await connectToDatabase();
//     console.log('Connected to database');

//     const session = await isAdmin(req);
//     if (!session || !session.user.isAdmin) {
//       console.log('Unauthorized access');
//       return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
//     }

//     const agents = await User.find({ role: 'agent', isApproved: false });
//     console.log('Agents fetched:', agents);

//     return new Response(JSON.stringify({ agents }), { status: 200 });
//   } catch (err) {
//     console.error('Error in API route:', err);
//     return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
//   }
// }





import Property from '@/app/models/Property';
import connectToDatabase from '@/app/lib/mongodb';
import { isAdmin } from '@/app/lib/auth';

export async function GET(req) {
  try {
    await connectToDatabase();

    const session = await isAdmin(req);
    if (!session) {
      return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
    }

    const properties = await Property.find({ isApproved: false }).populate('agentId', 'name email');

    return new Response(JSON.stringify({ properties }), { status: 200 });
  } catch (error) {
    console.error('Error fetching unapproved properties:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}
