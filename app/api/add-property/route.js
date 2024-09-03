import { connectToDatabase } from '../../lib/mongodb';
import Property from '../../models/Property';

export async function POST(req) {
  await connectToDatabase();
  const data = await req.json();

  try {
    const property = new Property(data);
    await property.save();
    return new Response(JSON.stringify(property), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Failed to add property' }), { status: 500 });
  }
}
