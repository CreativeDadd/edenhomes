// /app/api/auth/admin-signup/route.js
import bcrypt from 'bcryptjs';
import User from '@/app/models/User';
import connectToDatabase from '@/app/lib/mongodb';

export async function POST(req) {
  const { name, email, password } = await req.json();
  await connectToDatabase();

  // Check if the admin user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ message: 'Admin already exists' }), { status: 422 });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Save new admin user to the database with the 'admin' role
  const newAdmin = new User({ name, email, password: hashedPassword, role: 'admin' });
  await newAdmin.save();

  return new Response(JSON.stringify({ message: 'Admin account created successfully' }), { status: 201 });
}
