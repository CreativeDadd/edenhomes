import { NextResponse } from 'next/server';
// import cloudinary from 'cloudinary';
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get('file');
  console.log(file)

  try {
    const uploadedImage = await cloudinary.v2.uploader.upload(file.path, {
      folder: 'real_estate', // Optional: specify folder in Cloudinary

    });

    return NextResponse.json({ url: uploadedImage.secure_url });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
  }
}
