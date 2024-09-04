import  connectToDatabase  from '../../../lib/mongodb';
import Property from '../../../models/Property';

export async function DELETE(req, { params }) {
  await connectToDatabase();

  try {
    await Property.findByIdAndDelete(params.id);
    return new Response(JSON.stringify({ message: 'Property deleted' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Failed to delete property' }), { status: 500 });
  }
}
