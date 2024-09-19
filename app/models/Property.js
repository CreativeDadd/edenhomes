// // // app/models/Property.js
// // import mongoose from 'mongoose';

// // const PropertySchema = new mongoose.Schema({
// //   title: String,
// //   description: String,
// //   imageUrl: String,
// //   mainPrice: String,
// //   discountedPrice: String,
// //   discountPercent: Number,
// // });

// // export default mongoose.models.Property || mongoose.model('Property', PropertySchema);



// import mongoose from 'mongoose';

// const PropertySchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   price: Number,
//   discountPrice: Number,
//   discountPercent: Number,
//   imageUrl: String,
//   location: String,
// });

// export default mongoose.models.Property || mongoose.model('Property', PropertySchema);





// // app/models/Property.js
// import mongoose from 'mongoose';

// const PropertySchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   price: Number,
//   discountPrice: Number,
//   discountPercent: Number,
//   imageUrl: String,
//   location: String,
//   bedrooms: Number,
//   bathrooms: Number,
//   images: {
//     kitchen: String,
//     front: String,
//     compound: String,
//     sittingRoom: String,
//     specialPlace: String,
//   },
// });

// export default mongoose.models.Property || mongoose.model('Property', PropertySchema);











// // app/models/Property.js
// import mongoose from 'mongoose';

// const PropertySchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   price: Number,
//   discountPrice: Number,
//   discountPercent: Number,
//   imageUrl: String,
//   location: String,  // Location field added
//   bedrooms: Number,  // New field for bedrooms
//   bathrooms: Number, // New field for bathrooms
//   images: {          // New object for specific images
//     kitchen: String,
//     front: String,
//     compound: String,
//     sittingRoom: String,
//     specialPlace: String,
//   },
// });

// export default mongoose.models.Property || mongoose.model('Property', PropertySchema);



// import mongoose from 'mongoose';

// const propertySchema = new mongoose.Schema({
//   agentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   imageUrl: { type: String }, // Assuming you're storing image URLs
//   price: { type: Number, required: true },
//   location: { type: String, required: true },
//   isApproved: { type: Boolean, default: false }, // New field for admin approval
//   createdAt: { type: Date, default: Date.now },
// });

// const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);

// export default Property;









// import mongoose from 'mongoose';

// const propertySchema = new mongoose.Schema({
//   agentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   imageUrl: { type: String },
//   price: { type: Number, required: true },
//   location: { type: String, required: true },
//   isApproved: { type: Boolean, default: false }, // Admin approval
//   createdAt: { type: Date, default: Date.now },
// });

// const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);

// export default Property;














// // models/Property.js
// const mongoose = require('mongoose');

// const PropertySchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   discountPrice: { type: Number, required: true },
//   discountPercent: { type: Number, required: true },
//   imageUrl: { type: String, required: true },
//   location: { type: String, required: true },
//   bedrooms: { type: Number, required: true },
//   bathrooms: { type: Number, required: true },
//   images: {
//     kitchen: String,
//     front: String,
//     compound: String,
//     sittingRoom: String,
//     specialPlace: String,
//   },
//   agentId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Agent',
//     required: function () {
//       // Only required if the uploader is an agent
//       return this.uploaderType === 'agent';
//     },
//   },
//   uploaderType: { type: String, enum: ['admin', 'agent'], required: true },  // New field
// });

// // module.exports = mongoose.model('Property', PropertySchema);


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
    required: true, // Main image URL for the property
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  images: { // Nested object for additional images
    kitchen: {
      type: String,
      required: true,
    },
    front: {
      type: String,
      required: true,
    },
    compound: {
      type: String,
      required: true,
    },
    sittingRoom: {
      type: String,
      required: true,
    },
    specialPlace: {
      type: String,
      required: false,
    },
  },
  agentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null, // Reference to the agent who posted the property
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'], // Status of the property for admin approval
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now, // Timestamp for when the property was created
  },
});

const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);
export default Property;
