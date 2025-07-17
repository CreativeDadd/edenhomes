// app/lib/database.js
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

let pool;
let db;

const connectToDatabase = async () => {
  if (db) {
    console.log('Already connected to PostgreSQL');
    return db;
  }

  if (!process.env.DATABASE_URL) {
    console.log('DATABASE_URL not set, skipping database connection');
    return null;
  }

  try {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    });

    db = drizzle(pool);
    console.log('Connected to PostgreSQL');
    return db;
  } catch (error) {
    console.error('Failed to connect to PostgreSQL:', error);
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
    return null;
  }
};

export default connectToDatabase;
export { pool };
