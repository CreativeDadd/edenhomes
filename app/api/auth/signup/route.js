// import bcrypt from 'bcryptjs';
// import User from '@/app/models/User';
// import connectToDatabase from '@/app/lib/mongodb';

// export async function POST(req) {
//   const { email, password, role } = await req.json();
//   await connectToDatabase();

//   const existingUser = await User.findOne({ email });
//   if (existingUser) {
//     return new Response(JSON.stringify({ message: 'User already exists' }), { status: 422 });
//   }

//   const hashedPassword = await bcrypt.hash(password, 12);

//   const newUser = new User({ email, password: hashedPassword, role });
//   await newUser.save();

//   return new Response(JSON.stringify({ message: 'User created!' }), { status: 201 });
// }








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














//  /api/auth/signup/route.js

// import bcrypt from 'bcryptjs';
// import Agent from '@/app/models/Agent';
// import connectToDatabase from '@/app/lib/mongodb';

// export async function POST(req) {
//   const { name, email, phone, address, age, password, role } = await req.json();
//   await connectToDatabase();

//   // Ensure the role is 'agent'
//   if (role !== 'agent') {
//     return new Response(JSON.stringify({ message: 'Invalid role' }), { status: 422 });
//   }

//   // Check if the user already exists
//   const existingUser = await Agent.findOne({ email });
//   if (existingUser) {
//     return new Response(JSON.stringify({ message: 'User already exists' }), { status: 422 });
//   }

//   // Hash the password
//   const hashedPassword = await bcrypt.hash(password, 12);

//   // Create new user with the 'agent' role
//   const agent = new Agent({
//     name,
//     email,
//     phone,
//     address,
//     age,
//     password: hashedPassword,
//     role,
//     isApproved: false, // Add this field for admin approval
//   });
//   await agent.save();

//   return new Response(JSON.stringify({ message: 'Signup successful! Awaiting admin approval.' }), { status: 201 });
// }












// /app/api/auth/signup/route.js
import bcrypt from 'bcryptjs';
import Agent from '@/app/models/Agent';
import connectToDatabase from '@/app/lib/database';

export async function POST(req) {
  const { name, email, phone, address, age, password, role } = await req.json();
  await connectToDatabase();

  // Ensure the role is 'agent'
  if (role !== 'agent') {
    return new Response(JSON.stringify({ message: 'Invalid role' }), { status: 422 });
  }

  // Check if the agent already exists
  const existingAgent = await Agent.findOne({ email });
  if (existingAgent) {
    return new Response(JSON.stringify({ message: 'Agent already exists' }), { status: 422 });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create new agent
  const agent = await Agent.create({
    name,
    email,
    phoneNumber: phone, // Use consistent naming in the schema
    address,
    age,
    password: hashedPassword,
    role: 'agent',
    isApproved: false, // Default is false, awaiting admin approval
  });

  return new Response(JSON.stringify({ message: 'Signup successful! Awaiting admin approval.' }), { status: 201 });
}
