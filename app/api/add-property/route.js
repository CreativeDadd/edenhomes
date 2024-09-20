// import { isAdmin } from '@/app/lib/auth';
// import Property from '@/app/models/Property';
// import connectToDatabase from '@/app/lib/mongodb';

// export async function POST(req) {
//   // Connect to the database
//   await connectToDatabase();

//   try {
//     // Check if the user is an admin
//     const session = await isAdmin(req);
//     if (!session) {
//       return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
//     }

//     // Parse the request body
//     const body = await req.json();

//     // Log the received body for debugging
//     console.log('Received request body:', body);

//     const {
//       title,
//       description,
//       location,
//       price,
//       discountPrice,
//       discountPercent,
//       imageUrl,
//       bedrooms,
//       bathrooms,
//       images,
//       agentId = null, // Set a default value of `null` if `agentId` is not provided
//     } = body;

//     // Check for missing fields and log missing fields
//     if (
//       !title ||
//       !description ||
//       !location ||
//       !price ||
//       !discountPrice ||
//       !discountPercent ||
//       !imageUrl ||
//       !bedrooms ||
//       !bathrooms ||
//       !images ||
//       !images.kitchen ||
//       !images.front ||
//       !images.compound ||
//       !images.sittingRoom ||
//       !images.specialPlace
//     ) {
//       console.log('Missing fields:', {
//         title, description, location, price, discountPrice,
//         discountPercent, imageUrl, bedrooms, bathrooms, images,
//         kitchen: images?.kitchen, front: images?.front,
//         compound: images?.compound, sittingRoom: images?.sittingRoom,
//         specialPlace: images?.specialPlace,
//       });
//       return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
//     }

//     // Create the new property
//     const newProperty = new Property({
//       title,
//       description,
//       location,
//       price,
//       discountPrice,
//       discountPercent,
//       imageUrl,
//       bedrooms,
//       bathrooms,
//       images, // Assign the images object directly
//       agentId, // Admin can submit without `agentId`
//       status: 'pending', // Default status for admin approval
//     });

//     // Save the new property to the database
//     await newProperty.save();

//     // Return a success response
//     return new Response(JSON.stringify({ message: 'Property added successfully' }), { status: 201 });
//     console.log(imageUrl)

//   } catch (error) {
//     console.error('Error adding property:', error);
//     return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
//   }
// }

































// // app/api/add-property/route.js
// import { isAdmin } from '@/app/lib/auth';
// import Property from '@/app/models/Property';
// import connectToDatabase from '@/app/lib/mongodb';

// export async function POST(req) {
//   // Connect to the database
//   await connectToDatabase();

//   try {
//     // Check if the user is an admin
//     const session = await isAdmin(req);
//     if (!session) {
//       return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
//     }

//     // Parse the request body
//     const body = await req.json();

//     // Log the received body for debugging
//     console.log('Received request body:', body);

//     const {
//       title,
//       description,
//       location,
//       price,
//       discountPrice,
//       discountPercent,
//       imageUrl,
//       bedrooms,
//       bathrooms,
//       images,
//       agentId = null, // Set a default value of `null` if `agentId` is not provided
//     } = body;

//     // Check for missing fields and log missing fields
//     if (
//       !title ||
//       !description ||
//       !location ||
//       !price ||
//       !imageUrl ||
//       bedrooms === undefined ||
//       bathrooms === undefined
//     ) {
//       console.error('Missing required fields:', {
//         title,
//         description,
//         location,
//         price,
//         imageUrl,
//         bedrooms,
//         bathrooms,
//       });
//       return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
//     }

//     // Log before creating the property
//     console.log('Creating new property with the following data:', body);

//     // Create a new property in the database
//     const newProperty = await Property.create({
//       title,
//       description,
//       location,
//       price,
//       discountPrice,
//       discountPercent,
//       imageUrl,
//       bedrooms,
//       bathrooms,
//       images,
//       agentId,
//     });

//     // Log the created property for debugging
//     console.log('Property created:', newProperty);

//     return new Response(JSON.stringify(newProperty), { status: 201 });
//   } catch (error) {
//     console.error('Error creating property:', error);
//     return new Response(JSON.stringify({ error: 'Failed to add property' }), { status: 500 });
//   }
// }


















// // app/api/add-property/route.js
// import Property from '@/app/models/Property';
// import connectToDatabase from '@/app/lib/mongodb'; // Ensure this file connects to your MongoDB instance

// export async function POST(req) {
//   try {
//     // Connect to the database
//     await connectToDatabase();
    
//     // Parse the request body
//     const {
//       title,
//       description,
//       location,
//       price,
//       discountPrice,
//       discountPercent,
//       imageUrl,
//       bedrooms,
//       bathrooms,
//       kitchenImageUrl,
//       frontImageUrl,
//       compoundImageUrl,
//       sittingRoomImageUrl,
//       specialPlaceImageUrl,
//       agentId
//     } = await req.json();

//     // Validate all required fields are provided
//     if (
//       !title ||
//       !description ||
//       !location ||
//       !price ||
//       !discountPrice ||
//       !discountPercent ||
//       !imageUrl ||
//       !bedrooms ||
//       !bathrooms ||
//       !kitchenImageUrl ||
//       !frontImageUrl ||
//       !compoundImageUrl ||
//       !sittingRoomImageUrl
//     ) {
//       return new Response('All required fields must be provided.', { status: 400 });
//     }

//     // Create a new property document
//     const newProperty = new Property({
//       title,
//       description,
//       location,
//       price,
//       discountPrice,
//       discountPercent,
//       imageUrl,
//       bedrooms,
//       bathrooms,
//       images: {
//         kitchen: kitchenImageUrl,
//         front: frontImageUrl,
//         compound: compoundImageUrl,
//         sittingRoom: sittingRoomImageUrl,
//         specialPlace: specialPlaceImageUrl || '' // Optional field
//       },
//       agentId: agentId || null, // agentId can be null if not provided
//     });

//     // Save the property to the database
//     await newProperty.save();

//     // Return a success response
//     return new Response(JSON.stringify({ message: 'Property added successfully!' }), { status: 201 });
//   } catch (error) {
//     console.error(error);
//     return new Response('An error occurred while adding the property.', { status: 500 });
//   }
// }
























// // app/api/add-property/route.js
// import Property from '@/app/models/Property';
// import connectToDatabase from '@/app/lib/mongodb'; // Ensure this file connects to your MongoDB instance

// export async function POST(req) {
//   try {
//     // Connect to the database
//     await connectToDatabase();

//     // Parse the request body
//     const {
//       title,
//       description,
//       location,
//       price,
//       discountPrice,
//       discountPercent,
//       imageUrl,
//       bedrooms,
//       bathrooms,
//       kitchenImageUrl,
//       frontImageUrl,
//       compoundImageUrl,
//       sittingRoomImageUrl,
//       specialPlaceImageUrl, // Optional field
//       agentId
//     } = await req.json();

//     // Validate required fields
//     if (
//       !title ||
//       !description ||
//       !location ||
//       !price ||
//       !discountPrice ||
//       !discountPercent ||
//       !imageUrl ||
//       !bedrooms ||
//       !bathrooms ||
//       !kitchenImageUrl ||
//       !frontImageUrl ||
//       !compoundImageUrl ||
//       !sittingRoomImageUrl
//     ) {
//       return new Response('All required fields must be provided.', { status: 400 });
//     }

//     // Create a new property document
//     const newProperty = new Property({
//       title,
//       description,
//       location,
//       price,
//       discountPrice,
//       discountPercent,
//       imageUrl,
//       bedrooms,
//       bathrooms,
//       kitchenImageUrl,
//       frontImageUrl,
//       compoundImageUrl,
//       sittingRoomImageUrl,
//       specialPlaceImageUrl, // Optional field
//       agentId: agentId || null, // agentId can be null if not provided
//     });

//     // Save the property to the database
//     await newProperty.save();

//     // Return a success response
//     return new Response(JSON.stringify({ message: 'Property added successfully!' }), { status: 201 });
//   } catch (error) {
//     console.error(error);
//     return new Response('An error occurred while adding the property.', { status: 500 });
//   }
// }































// // app/api/add-property/route.js
// import Property from '@/app/models/Property';
// import connectToDatabase from '@/app/lib/mongodb'; 

// export async function POST(req) {
//   try {
//     // Connect to the database
//     await connectToDatabase();

//     // Parse the request body
//     const {
//       title,
//       description,
//       location,
//       price,
//       discountPrice,
//       discountPercent,
//       imageUrl,
//       bedrooms,
//       bathrooms,
//       kitchenImageUrl,
//       frontImageUrl,
//       compoundImageUrl,
//       sittingRoomImageUrl,
//       specialPlaceImageUrl, 
//       agentId
//     } = await req.json();

//     // Validate required fields
//     if (
//       !title ||
//       !description ||
//       !location ||
//       !price ||
//       !discountPrice ||
//       !discountPercent ||
//       !imageUrl ||
//       !bedrooms ||
//       !bathrooms ||
//       !kitchenImageUrl ||
//       !frontImageUrl ||
//       !compoundImageUrl ||
//       !sittingRoomImageUrl
//     ) {
//       return new Response('All required fields must be provided.', { status: 400 });
//     }

//     // Create a new property document with a flat structure
//     const newProperty = new Property({
//       title,
//       description,
//       location,
//       price,
//       discountPrice,
//       discountPercent,
//       imageUrl,
//       bedrooms,
//       bathrooms,
//       kitchenImageUrl,
//       frontImageUrl,
//       compoundImageUrl,
//       sittingRoomImageUrl,
//       specialPlaceImageUrl: specialPlaceImageUrl || '', 
//       agentId: agentId || null, 
//     });

//     // Save the property to the database
//     await newProperty.save();

//     // Return a success response
//     return new Response(JSON.stringify({ message: 'Property added successfully!' }), { status: 201 });
//   } catch (error) {
//     console.error(error);
//     return new Response('An error occurred while adding the property.', { status: 500 });
//   }
// }
















// app/api/add-property/route.js
import Property from '@/app/models/Property';
import connectToDatabase from '@/app/lib/mongodb';

export async function POST(req) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Parse the request body
    const {
      title,
      description,
      location,
      price,
      discountPrice,
      discountPercent,
      imageUrl,
      bedrooms,
      bathrooms,
      kitchenImageUrl,
      frontImageUrl,
      compoundImageUrl,
      sittingRoomImageUrl,
      specialPlaceImageUrl,
      agentId,
    } = await req.json();

    // Check for missing fields
    const requiredFields = [
      'title',
      'description',
      'location',
      'price',
      'discountPrice',
      'discountPercent',
      'imageUrl',
      'bedrooms',
      'bathrooms',
      'kitchenImageUrl',
      'frontImageUrl',
      'compoundImageUrl',
      'sittingRoomImageUrl',
    ];

    const missingFields = requiredFields.filter((field) => !eval(field));

    if (missingFields.length > 0) {
      return new Response(
        `Missing required fields: ${missingFields.join(', ')}`,
        { status: 400 }
      );
    }

    // Create a new property document with a flat structure
    const newProperty = new Property({
      title,
      description,
      location,
      price,
      discountPrice,
      discountPercent,
      imageUrl,
      bedrooms,
      bathrooms,
      kitchenImageUrl,
      frontImageUrl,
      compoundImageUrl,
      sittingRoomImageUrl,
      specialPlaceImageUrl: specialPlaceImageUrl || '',
      agentId: agentId || null,
    });

    // Save the property to the database
    await newProperty.save();

    // Return a success response
    return new Response(
      JSON.stringify({ message: 'Property added successfully!' }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response('An error occurred while adding the property.', {
      status: 500,
    });
  }
}
