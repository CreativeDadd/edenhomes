// // app/api/agents/[agentId]/route.js
// import connectToDatabase from '@/app/lib/mongodb';
// import Agent from '@/app/models/Agent';

// export async function GET(req, { params }) {
//   const { agentId } = params;
//   await connectToDatabase();

//   try {
//     const agent = await Agent.findById(agentId).lean();
//     if (!agent) {
//       return new Response(JSON.stringify({ message: 'Agent not found' }), { status: 404 });
//     }
    
//     return new Response(JSON.stringify(agent), { status: 200 });
//   } catch (error) {
//     return new Response(JSON.stringify({ message: 'Error fetching agent data' }), { status: 500 });
//   }
// }



















// app/api/agents/[agentId]/route.js
import Agent from '@/app/models/Agent';
import connectToDatabase from '@/app/lib/mongodb';
import { Types } from 'mongoose';

export async function GET(req, { params }) {
  await connectToDatabase();

  const { agentId } = params; // This is actually MongoDB's _id field

  // Check if the provided agentId is a valid MongoDB ObjectId
  if (!Types.ObjectId.isValid(agentId)) {
    return new Response(JSON.stringify({ message: 'Invalid Agent ID' }), { status: 400 });
  }

  const agent = await Agent.findById(agentId); // Use _id to search for the agent

  if (!agent) {
    return new Response(JSON.stringify({ message: 'Agent not found' }), { status: 404 });
  }

  return new Response(JSON.stringify(agent), { status: 200 });
}
