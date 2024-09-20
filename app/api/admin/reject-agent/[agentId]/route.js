// /app/api/admin/reject-agent/[agentId]/route.js
import connectToDatabase from '@/app/lib/mongodb';
import Agent from '@/app/models/Agent';

export async function DELETE(req, { params }) {
  const { agentId } = params;
  await connectToDatabase();

  try {
    await Agent.findByIdAndDelete(agentId);
    return new Response(JSON.stringify({ message: 'Agent rejected and deleted' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error rejecting agent' }), { status: 500 });
  }
}
