// import { NextResponse } from 'next/server';
// import connectToDatabase from '@/app/lib/mongodb';
// import Property from '@/app/models/Property';
// import { v2 as cloudinary } from 'cloudinary';

// // Connect to the database
// connectToDatabase();

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
//   api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
// });

// // Helper function to extract public_id from the Cloudinary URL
// const extractPublicId = (url) => {
//   const parts = url.split('/');
//   const filename = parts[parts.length - 1];
//   return filename.split('.')[0]; // Remove file extension
// };

// export async function DELETE(req, { params }) {
//   const { id } = params;

//   try {
//     // console.log(`Attempting to delete property with ID: ${id}`);
    
//     // Find the property
//     const property = await Property.findById(id);
//     if (!property) {
//       console.log('Property not found');
//       return NextResponse.json({ message: 'Property not found' }, { status: 404 });
//     }
    
//     // console.log('Property found:', property);

//     // Image URLs to delete
//     const imageUrls = [
//       property.imageUrl,
//       property.kitchenImageUrl,
//       property.frontImageUrl,
//       property.compoundImageUrl,
//       property.sittingRoomImageUrl,
//       property.specialPlaceImageUrl,
//     ].filter(Boolean); // Filter out any undefined URLs

//     // console.log('Image URLs to delete:', imageUrls);

//     // Deleting images from Cloudinary
//     const imageDeletionPromises = imageUrls.map((url) => {
//       const publicId = extractPublicId(url); // Extract Cloudinary public_id from the URL
//       console.log(`Deleting image with publicId: ${publicId}`);
//       return cloudinary.uploader.destroy(publicId, { invalidate: true });
//     });

//     // Execute the Cloudinary image deletions
//     await Promise.all(imageDeletionPromises);
//     // console.log('Images deleted successfully');

//     // Delete the property from the database
//     await Property.findByIdAndDelete(id);
//     console.log('Property deleted successfully');

//     return NextResponse.json({ message: 'Property and associated images deleted successfully' }, { status: 200 });

//   } catch (error) {
//     console.error('Error deleting property:', error.message, error.stack);
//     return NextResponse.json({ message: 'Failed to delete property', error: error.message }, { status: 500 });
//   }
// }




























// connectToDatabase();

// // GET method to fetch a property by ID
// export async function GET(req, { params }) {
//   const { id } = params;

//   try {
//     // Find the property by ID
//     const property = await Property.findById(id);

//     if (!property) {
//       return NextResponse.json({ message: 'Property not found' }, { status: 404 });
//     }

//     return NextResponse.json(property, { status: 200 });
//   } catch (error) {
//     console.error('Error fetching property:', error.message);
//     return NextResponse.json({ message: 'Failed to fetch property', error: error.message }, { status: 500 });
//   }
// }

// // PUT method to update a property by ID
// export async function PUT(req, { params }) {
//   const { id } = params;
//   const data = await req.json();

//   try {
//     // Find the property by ID
//     const property = await Property.findById(id);

//     if (!property) {
//       return NextResponse.json({ message: 'Property not found' }, { status: 404 });
//     }

//     // Update the property fields with the new data
//     property.title = data.title || property.title;
//     property.description = data.description || property.description;
//     property.location = data.location || property.location;
//     property.price = data.price || property.price;
//     property.discountPrice = data.discountPrice || property.discountPrice;
//     property.imageUrl = data.imageUrl || property.imageUrl;
//     property.kitchenImageUrl = data.kitchenImageUrl || property.kitchenImageUrl;
//     property.frontImageUrl = data.frontImageUrl || property.frontImageUrl;
//     property.compoundImageUrl = data.compoundImageUrl || property.compoundImageUrl;
//     property.sittingRoomImageUrl = data.sittingRoomImageUrl || property.sittingRoomImageUrl;
//     property.specialPlaceImageUrl = data.specialPlaceImageUrl || property.specialPlaceImageUrl;

//     // Save the updated property to the database
//     await property.save();

//     return NextResponse.json({ message: 'Property updated successfully' }, { status: 200 });
//   } catch (error) {
//     console.error('Error updating property:', error.message);
//     return NextResponse.json({ message: 'Failed to update property', error: error.message }, { status: 500 });
//   }
// }































import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/lib/mongodb';
import Property from '@/app/models/Property';
import { v2 as cloudinary } from 'cloudinary';

// Ensure the database connection
await connectToDatabase();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

// Helper function to extract public_id from a Cloudinary URL
const extractPublicId = (url) => {
  if (!url) return null;
  const parts = url.split('/');
  const filename = parts[parts.length - 1];
  return filename.split('.')[0]; // Remove file extension
};

// **DELETE Property**
export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    const property = await Property.findById(id);
    if (!property) {
      return NextResponse.json({ message: 'Property not found' }, { status: 404 });
    }

    // Extract image URLs
    const imageUrls = [
      property.imageUrl,
      property.kitchenImageUrl,
      property.frontImageUrl,
      property.compoundImageUrl,
      property.sittingRoomImageUrl,
      property.specialPlaceImageUrl,
    ].filter(Boolean);

    // Delete images from Cloudinary
    await Promise.all(
      imageUrls.map(async (url) => {
        const publicId = extractPublicId(url);
        if (publicId) {
          await cloudinary.uploader.destroy(publicId, { invalidate: true });
        }
      })
    );

    // Delete property from the database
    await Property.findByIdAndDelete(id);

    return NextResponse.json({ message: 'Property and images deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting property:', error.message);
    return NextResponse.json({ message: 'Failed to delete property', error: error.message }, { status: 500 });
  }
}

// **GET Property by ID**
export async function GET(req, { params }) {
  const { id } = params;

  try {
    const property = await Property.findById(id);
    if (!property) {
      return NextResponse.json({ message: 'Property not found' }, { status: 404 });
    }

    return NextResponse.json({ property }, { status: 200 });
  } catch (error) {
    console.error('Error fetching property:', error.message);
    return NextResponse.json({ message: 'Failed to fetch property', error: error.message }, { status: 500 });
  }
}

// **PUT - Update Property**
export async function PUT(req, { params }) {
  const { id } = params;
  const data = await req.json();

  try {
    const property = await Property.findById(id);
    if (!property) {
      return NextResponse.json({ message: 'Property not found' }, { status: 404 });
    }

    // Update the property with the new data
    Object.assign(property, data);
    await property.save();

    return NextResponse.json({ message: 'Property updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error updating property:', error.message);
    return NextResponse.json({ message: 'Failed to update property', error: error.message }, { status: 500 });
  }
}
