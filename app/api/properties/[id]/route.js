// 

















import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/lib/mongodb'; // Update path as necessary
import Property from '@/app/models/Property'; // Update path as necessary
import cloudinary from 'cloudinary';

// Connect to the database
connectToDatabase();

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Your Cloudinary cloud name
  api_key: process.env.CLOUDINARY_API_KEY, // Your Cloudinary API key
  api_secret: process.env.CLOUDINARY_API_SECRET, // Your Cloudinary API secret
});

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    // Find the property to delete
    const property = await Property.findById(id);
    
    if (!property) {
      return NextResponse.json({ message: 'Property not found' }, { status: 404 });
    }

    // Assuming `property.images` contains an array of public_ids for Cloudinary
    const imageDeletionPromises = property.images.map(public_id => {
      return cloudinary.v2.uploader.destroy(public_id, { invalidate: true });
    });

    // Delete images from Cloudinary
    await Promise.all(imageDeletionPromises);

    // Delete the property from the database
    await Property.findByIdAndDelete(id);

    return NextResponse.json({ message: 'Property and associated images deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting property:', error);
    return NextResponse.json({ message: 'Failed to delete property' }, { status: 500 });
  }
}

