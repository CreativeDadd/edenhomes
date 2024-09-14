import bcrypt from 'bcryptjs';
import User from '@/app/models/User';
import connectToDatabase from '@/app/lib/mongodb';

export async function POST(req) {
  const { email, password, role } = await req.json();
  await connectToDatabase();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new Response(JSON.stringify({ message: 'User already exists' }), { status: 422 });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = new User({ email, password: hashedPassword, role });
  await newUser.save();

  return new Response(JSON.stringify({ message: 'User created!' }), { status: 201 });
}












// // app/api/auth/signup/route.js
// import bcrypt from 'bcryptjs';
// import User from '@/app/models/User';
// import connectToDatabase from '@/app/lib/mongodb';

// export async function POST(req) {
//   const { email, password, role } = await req.json();
//   await connectToDatabase();

//   // Allow only a specific role to be assigned by default (e.g., 'user')
//   if (role !== 'user') {
//     return new Response(JSON.stringify({ message: 'Invalid role' }), { status: 422 });
//   }

//   const existingUser = await User.findOne({ email });
//   if (existingUser) {
//     return new Response(JSON.stringify({ message: 'User already exists' }), { status: 422 });
//   }

//   const hashedPassword = await bcrypt.hash(password, 12);

//   const newUser = new User({ email, password: hashedPassword, role });
//   await newUser.save();

//   return new Response(JSON.stringify({ message: 'User created!' }), { status: 201 });
// }
