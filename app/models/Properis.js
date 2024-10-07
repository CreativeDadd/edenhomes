


import mongoose from 'mongoose';
const ProperiSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, required: true },
}, { timestamps: true });


export default mongoose.models.ProperiSchema || mongoose.model('Properis', ProperiSchema);
