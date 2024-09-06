import cloudinary from '@/utils/cloudinary';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const image = formData.get('file'); // Assuming the image field is named 'file'

    // Upload the image to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(image.path, {
      folder: 'real_estate',
    });

    return new Response(JSON.stringify({ url: uploadResponse.secure_url }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Image upload failed' }), { status: 500 });
  }
}
