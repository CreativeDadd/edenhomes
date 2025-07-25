import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './app/lib/schema.js',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
});
