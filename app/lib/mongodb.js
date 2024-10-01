// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// export async function connectToDatabase() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const options = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(MONGODB_URI, options).then((mongoose) => {
//       return mongoose;
//     });
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }


/////////##############################################///////////
// // lib/mongodb.js
// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error('Define the MONGODB_URI environment variable inside .env.local');
// }

// let cachedClient = null;
// let cachedDb = null;

// export async function connectToDatabase() {
//   if (cachedDb) {
//     return { client: cachedClient, db: cachedDb };
//   }

//   const client = await mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });

//   cachedClient = client;
//   cachedDb = client.connection.db;

//   return { client, db: cachedDb };
// }
///////#####################



 // lib/mongodb.js
// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error('Define the MONGODB_URI environment variable inside .env.local');
// }

// let cachedClient = null;
// let cachedDb = null;

// export async function connectToDatabase() {
//   if (cachedDb) {
//     return { client: cachedClient, db: cachedDb };
//   }

//   const client = await mongoose.connect(MONGODB_URI);

//   cachedClient = client;
//   cachedDb = client.connection.db;

//   return { client, db: cachedDb };
// }













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























// import mongoose from 'mongoose';

// let isConnected = false;

// const connectToDatabase = async () => {
//   if (isConnected) {
//     console.log('Using existing MongoDB connection');
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     isConnected = true;
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     throw new Error('Failed to connect to MongoDB');
//   }
// };

// export default connectToDatabase;

