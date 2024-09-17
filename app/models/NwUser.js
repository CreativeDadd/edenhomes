// app/models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  age: { type: Number, required: true },
  password: { type: String, required: true },
  role: { type: String, default: 'agent' }, // Default role is 'agent'
  isApproved: { type: Boolean, default: false }, // Admin approval status
  createdAt: { type: Date, default: Date.now },
});

const NwUser = mongoose.models.User || mongoose.model('User', userSchema);

export default NwUser;
