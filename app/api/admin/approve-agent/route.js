// import User from '@/app/models/User';
// import connectToDatabase from '@/app/lib/mongodb';
// import { isAdmin } from '@/app/lib/auth'; // Admin auth helper

// export async function POST(req) {
//   const { agentId } = await req.json();
//   await connectToDatabase();

//   // Check if the user is an admin
//   const session = await isAdmin(req);
//   if (!session || !session.user.isAdmin) {
//     return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
//   }

//   // Update the agent's isApproved status to true
//   const updatedAgent = await User.findByIdAndUpdate(
//     agentId,
//     { isApproved: true },
//     { new: true }
//   );

//   if (!updatedAgent) {
//     return new Response(JSON.stringify({ message: 'Agent not found' }), { status: 404 });
//   }

//   return new Response(JSON.stringify({ message: 'Agent approved' }), { status: 200 });
// }









// app/api/admin/approve-agent/route.js
import User from '@/app/models/User';
import connectToDatabase from '@/app/lib/mongodb';
import { isAdmin } from '@/app/lib/auth';

export async function POST(req) {
  try {
    await connectToDatabase();
    
    const session = await isAdmin(req);
    if (!session || !session.user || session.user.role !== 'admin') {
      return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
    }

    const { agentId } = await req.json();

    // Approve the agent by updating the `isApproved` field
    await User.findByIdAndUpdate(agentId, { isApproved: true });

    return new Response(JSON.stringify({ message: 'Agent approved' }), { status: 200 });
  } catch (error) {
    console.error('Error approving agent:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}
