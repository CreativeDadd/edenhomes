import { hash } from 'bcrypt';
import User from '@/app/models/User';
import connectToDatabase from '@/app/lib/mongodb';

export async function POST(req) {
  const { email, password } = await req.json();

  await connectToDatabase();

  // Hash the password
  const hashedPassword = await hash(password, 10);

  // Save the user to the database
  const user = new User({ email, password: hashedPassword });
  await user.save();

  return new Response(JSON.stringify({ success: true }), { status: 201 });
}
