// app/models/Property.js
import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
 

  title: {type: String, required: true },
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
  // agentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent', required: false },

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

// const Property = mongoose.models.Property || mongoose.model('Property', propertySchema);
// export default Property;
// export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
export default mongoose.models.Property || mongoose.model('Property', propertySchema);

