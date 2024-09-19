

// import mongoose from 'mongoose';

// const UserSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ['admin', 'agent', 'user'],// default: 'user'

//    },
//   isApproved: { type: Boolean, default: false }
// });

// export default mongoose.models.User || mongoose.model('User', UserSchema);







//   app/models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'], // Defining the possible roles
    default: 'user',         // Default role is 'user', but can be 'admin'
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the User model using the schema
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
