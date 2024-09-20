import Property from '@/app/models/Property';
import connectToDatabase from '@/app/lib/mongodb';
import { isAdmin } from '@/app/lib/auth';

export async function POST(req) {
  try {
    await connectToDatabase();

    const session = await isAdmin(req);
    if (!session) {
      return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
    }

    const { propertyId } = await req.json();

    // Approve the property by updating `isApproved` to true
    const updatedProperty = await Property.findByIdAndUpdate(
      propertyId,
      { isApproved: true },
      { new: true }
    );

    if (!updatedProperty) {
      return new Response(JSON.stringify({ message: 'Property not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: 'Property approved' }), { status: 200 });
  } catch (error) {
    console.error('Error approving property:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
  }
}
