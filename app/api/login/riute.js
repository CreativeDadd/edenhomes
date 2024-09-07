import { compare } from 'bcrypt';
import User from '@/models/User';
import connectToDatabase from '@/utils/db';

export async function POST(req) {
  const { email, password } = await req.json();

  await connectToDatabase();

  const user = await User.findOne({ email });
  if (!user) {
    return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
  }

  const isMatch = await compare(password, user.password);
  if (!isMatch) {
    return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
