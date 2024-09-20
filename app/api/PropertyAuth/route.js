import { getSession } from 'next-auth/react';
import Property from '@/models/Property';
import connectToDatabase from '@/lib/mongodb';

export async function POST(req) {
  const session = await getSession({ req });

  if (!session || session.user.role !== 'agent') {
    return new Response(JSON.stringify({ message: 'Access denied' }), { status: 403 });
  }

  const { title, description, price } = await req.json();

  await connectToDatabase();

  const newProperty = new Property({
    title,
    description,
    price,
    userId: session.user.id,
  });

  await newProperty.save();

  return new Response(JSON.stringify({ message: 'Property created, awaiting approval' }), { status: 201 });
}
