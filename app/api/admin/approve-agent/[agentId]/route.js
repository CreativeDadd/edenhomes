// /app/api/admin/approve-agent/[agentId]/route.js
import connectToDatabase from '@/app/lib/mongodb';
import Agent from '@/app/models/Agent';

export async function PATCH(req, { params }) {
  const { agentId } = params;
  await connectToDatabase();

  try {
    await Agent.findByIdAndUpdate(agentId, { isApproved: true });
    return new Response(JSON.stringify({ message: 'Agent approved successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error approving agent' }), { status: 500 });
  }
}
