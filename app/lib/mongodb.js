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



// lib/mongodb.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Define the MONGODB_URI environment variable inside .env.local');
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedClient = client;
  cachedDb = client.connection.db;

  return { client, db: cachedDb };
}



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

//   const client = await mongoose.connect(MONGODB_URI);

//   cachedClient = client;
//   cachedDb = client.connection.db;

//   return { client, db: cachedDb };
// }
