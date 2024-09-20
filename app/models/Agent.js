// import mongoose from 'mongoose';

// const agentSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   phoneNumber: { type: String, required: true },
//   password: { type: String, required: true },
//   age: { type: Number, required: true },
//   address: { type: String, required: true },
//   isApproved: { type: Boolean, default: false },
//   createdAt: { type: Date, default: Date.now },
// });

// const Agent = mongoose.models.Agent || mongoose.model('Agent', agentSchema);

// export default Agent;



















// /app/models/Agent.js
import mongoose from 'mongoose';

const agentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true }, // Ensure it's phoneNumber, matching the signup API
  password: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
  isApproved: { type: Boolean, default: false }, // Awaiting approval
  role: { type: String, default: 'agent' }, // Default role is 'agent'
  createdAt: { type: Date, default: Date.now },
});

const Agent = mongoose.models.Agent || mongoose.model('Agent', agentSchema);

export default Agent;
