// connect-db.js - Database Connection Setup Helper
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

// Test database connection
async function testConnection() {
  if (!process.env.DATABASE_URL) {
    console.log('❌ DATABASE_URL not found in .env file');
    console.log('Please update your .env file with your PostgreSQL connection string');
    console.log('Example: DATABASE_URL=postgresql://username:password@host:port/database');
    return;
  }

  console.log('🔄 Testing database connection...');

  try {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    });

    const client = await pool.connect();
    console.log('✅ Database connection successful!');
    console.log('📊 Database info:', {
      host: client.host,
      port: client.port,
      database: client.database,
      user: client.user
    });

    client.release();
    await pool.end();
    
  } catch (error) {
    console.log('❌ Database connection failed:');
    console.error(error.message);
    console.log('\n💡 Check your DATABASE_URL and make sure:');
    console.log('1. The connection string is correct');
    console.log('2. Your database service is running');
    console.log('3. Your IP is whitelisted (if required)');
  }
}

testConnection();
