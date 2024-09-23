// app/api/agents/getAgentId/route.js
import Agent from '@/app/models/Agent';
import connectToDatabase from '@/app/lib/mongodb';
import { getSession } from 'next-auth/react';
export const dynamic = 'force-dynamic';


export async function GET(req) {
  try {
    await connectToDatabase();
    const session = await getSession({ req });

    if (!session || !session.user.email) {
      return new Response(JSON.stringify({ error: 'Not authenticated' }), { status: 401 });
    }

    const agent = await Agent.findOne({ email: session.user.email });

    if (!agent) {
      return new Response(JSON.stringify({ error: 'Agent not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ agentId: agent._id }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch agent ID' }), { status: 500 });
  }
}
