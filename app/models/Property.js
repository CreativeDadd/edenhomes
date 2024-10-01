














// // app/models/Property.js

// import mongoose from 'mongoose';

// const propertySchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   location: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   discountPrice: {
//     type: Number,
//     required: true,
//   },
//   discountPercent: {
//     type: Number,
//     required: true,
//   },
//   bedrooms: {
//     type: Number,
//     required: true,
//   },
//   bathrooms: {
//     type: Number,
//     required: true,
//   },
//   imageUrl: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);
// export default Property;














// import mongoose from 'mongoose';

// const propertySchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   location: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   discountPrice: {
//     type: Number,
//     required: true,
//   },
//   discountPercent: {
//     type: Number,
//     required: true,
//   },
//   bedrooms: {
//     type: Number,
//     required: true,
//   },
//   bathrooms: {
//     type: Number,
//     required: true,
//   },
//   images: {
//     kitchen: {
//       type: String,
//       required: true,
//     },
//     front: {
//       type: String,
//       required: true,
//     },
//     compound: {
//       type: String,
//       required: true,
//     },
//     sittingRoom: {
//       type: String,
//       required: true,
//     },
//     specialPlace: {
//       type: String,
//       required: true,
//     },
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);
// export default Property;






















// import mongoose from 'mongoose';

// const propertySchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   location: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
  
//   discountPrice: {
//     type: Number,
//     required: true,
//   },

//   discountPercent: {
//     type: Number,
//     required: true,
//   },
//   imageUrl: { type: String, required: true },
//   bedrooms: {
//     type: Number,
//     required: true,
//   },
//   bathrooms: {
//     type: Number,
//     required: true,
//   },
//   images: {
//     kitchen: {
//       type: String,
//       required: true,
//     },
//     front: {
//       type: String,
//       required: true,
//     },
//     compound: {
//       type: String,
//       required: true,
//     },
//     sittingRoom: {
//       type: String,
//       required: true,
//     },
//     specialPlace: {
//       type: String,
//       required: false,
//     },
//   },
//   agentId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     default: null, // Set default to `null`
//   },
//   status: {
//     type: String,
//     enum: ['pending', 'approved', 'rejected'],
//     default: 'pending',
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);
// export default Property;














// // app/models/Property.js
// import mongoose from 'mongoose';

// const propertySchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   location: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   discountPrice: {
//     type: Number,
//     required: true,
//   },
//   discountPercent: {
//     type: Number,
//     required: true,
//   },
//   imageUrl: { 
//     type: String, 
//     required: true, // Main image URL for the property
//   },
//   bedrooms: {
//     type: Number,
//     required: true,
//   },
//   bathrooms: {
//     type: Number,
//     required: true,
//   },
//   images: { // Nested object for additional images
//     kitchen: {
//       type: String,
//       required: true,
//     },
//     front: {
//       type: String,
//       required: true,
//     },
//     compound: {
//       type: String,
//       required: true,
//     },
//     sittingRoom: {
//       type: String,
//       required: true,
//     },
//     specialPlace: {
//       type: String,
//       required: false,
//     },
//   },
//   agentId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     default: null, // Reference to the agent who posted the property
//   },
//   status: {
//     type: String,
//     enum: ['pending', 'approved', 'rejected'], // Status of the property for admin approval
//     default: 'pending',
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now, // Timestamp for when the property was created
//   },
// });

// const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);
// export default Property;






























// app/models/Property.js
import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
 

  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountPrice: {
    type: Number,
    required: true,
  },
  discountPercent: {
    type: Number,
    required: true,
  },
  imageUrl: { 
    type: String, 
    required: true, 
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  kitchenImageUrl: {
    type: String,
    required: true,
  },
  frontImageUrl: {
    type: String,
    required: true,
  },
  compoundImageUrl: {
    type: String,
    required: true,
  },
  sittingRoomImageUrl: {
    type: String,
    required: true,
  },
  specialPlaceImageUrl: {
    type: String,
    required: false,
  },
  agentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent', required: false },

  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'], 
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  },
});

const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);
export default Property;
