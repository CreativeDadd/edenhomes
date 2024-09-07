// app/api/delete-contact/[id]/route.js
import connectToDatabase from '@/app/lib/mongodb';
import Contact from '@/app/models/Contact';

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await connectToDatabase();
    await Contact.findByIdAndDelete(id);
    return new Response('Contact deleted successfully', { status: 200 });
  } catch (error) {
    console.error('Error deleting contact:', error);
    return new Response('Failed to delete contact', { status: 500 });
  }
}
