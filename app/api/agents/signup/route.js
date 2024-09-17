// app/api/agents/signup/route.js

import bcrypt from 'bcryptjs';
import connectToDatabase from '@/app/lib/mongodb';
import NwUser from '@/app/models/User';

export async function POST(req) {
  try {
    await connectToDatabase();
    const { name, email, password } = await req.json();

    // Check if the agent already exists
    const existingUser = await NwUser.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: 'User already exists' }), { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new agent
    const newUser = new NwUser({
      name,
      email,
      password: hashedPassword,
      role: 'agent',
    });

    await newUser.save();
    return new Response(JSON.stringify({ message: 'Agent created successfully' }), { status: 201 });
  } catch (error) {
    console.error('Error signing up agent:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}
