
// app/lib/mongodb.js
import mongoose from 'mongoose';

const connectToDatabase = async () => {
  // Check if we're already connected
  if (mongoose.connection.readyState === 1) {
    console.log('Already connected to MongoDB');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI); // No deprecated options
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1); // Exit the process with an error code
  }
};

export default connectToDatabase;