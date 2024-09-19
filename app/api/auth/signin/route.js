// app/api/auth/signin/route.js
import bcrypt from 'bcryptjs';
import connectToDatabase from '@/app/lib/mongodb';
import Agent from '@/app/models/Agent';

export async function POST(req) {
  const { email, password } = await req.json();
  await connectToDatabase();

  try {
    // Find agent by email
    const agent = await Agent.findOne({ email });
    if (!agent) {
      return new Response(JSON.stringify({ message: 'Agent not found' }), { status: 404 });
    }

    // Check if the agent is approved
    if (!agent.isApproved) {
      return new Response(JSON.stringify({ message: 'Your account has not been approved by the admin' }), { status: 403 });
    }

    // Validate the password
    const isPasswordValid = await bcrypt.compare(password, agent.password);
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });
    }

    // If valid and approved, return agent's profile information
    return new Response(
      JSON.stringify({
        message: 'Sign-in successful',
        agentId: agent._id,
        email: agent.email,
        name: agent.name,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error during sign-in:', error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
  }
}
