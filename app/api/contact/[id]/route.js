import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/lib/mongodb';
import Contact from '@/app/models/Contact';

export async function DELETE(req, { params }) {
  try {
    await connectToDatabase();
    const { id } = params;

    const result = await Contact.findByIdAndDelete(id);

    if (!result) {
      return new NextResponse('Contact not found', { status: 404 });
    }

    return new NextResponse('Contact deleted successfully', { status: 200 });
  } catch (error) {
    console.error('Error deleting contact:', error);
    return new NextResponse('Failed to delete contact', { status: 500 });
  }
}
