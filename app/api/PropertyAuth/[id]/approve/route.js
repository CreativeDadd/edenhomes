import Property from '@/models/Property';
import connectToDatabase from '@/lib/mongodb';
import { getSession } from 'next-auth/react';

export async function PUT(req) {
  const session = await getSession({ req });

  if (!session || session.user.role !== 'admin') {
    return new Response(JSON.stringify({ message: 'Access denied' }), { status: 403 });
  }

  const { id } = req.query;
  await connectToDatabase();

  const property = await Property.findById(id);

  if (!property) {
    return new Response(JSON.stringify({ message: 'Property not found' }), { status: 404 });
  }

  property.approved = true;
  await property.save();

  return new Response(JSON.stringify({ message: 'Property approved' }), { status: 200 });
}
