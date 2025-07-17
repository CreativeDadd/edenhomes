# Database Migration: MongoDB to PostgreSQL

This guide explains how to migrate your EdenHomes application from MongoDB to PostgreSQL.

## Prerequisites

1. **PostgreSQL Installation**: Install PostgreSQL on your system
   - Windows: Download from https://www.postgresql.org/download/windows/
   - macOS: `brew install postgresql`
   - Linux: `sudo apt-get install postgresql postgresql-contrib`

2. **Database Setup**: Create a new PostgreSQL database
   ```sql
   CREATE DATABASE edenhomes;
   CREATE USER edenhomes_user WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE edenhomes TO edenhomes_user;
   ```

## Migration Steps

### 1. Install New Dependencies
```bash
npm install pg drizzle-orm drizzle-kit
npm uninstall mongodb mongoose
```

### 2. Environment Configuration
Copy `.env.example` to `.env` and update with your PostgreSQL credentials:
```env
DATABASE_URL=postgresql://edenhomes_user:your_password@localhost:5432/edenhomes
```

### 3. Generate Database Schema
```bash
npm run db:generate
```

### 4. Push Schema to Database
```bash
npm run db:push
```

### 5. Data Migration (Optional)
If you have existing data in MongoDB, you'll need to export it and import it into PostgreSQL:

1. Export MongoDB data:
   ```bash
   mongoexport --db edenhomes --collection users --out users.json
   mongoexport --db edenhomes --collection agents --out agents.json
   mongoexport --db edenhomes --collection properties --out properties.json
   mongoexport --db edenhomes --collection blogs --out blogs.json
   mongoexport --db edenhomes --collection contacts --out contacts.json
   ```

2. Create a custom migration script to import the data into PostgreSQL (manual process).

## Changes Made

### Files Modified:
- `package.json` - Updated dependencies and scripts
- `app/lib/database.js` - New PostgreSQL connection file
- `app/lib/schema.js` - Database schema definitions
- `app/models/*.js` - All model files updated for PostgreSQL
- `app/api/**/*.js` - API routes updated to use new database

### Key Differences:
- **IDs**: PostgreSQL uses UUID instead of MongoDB's ObjectId
- **Relationships**: Proper foreign key relationships defined
- **Queries**: Drizzle ORM syntax instead of Mongoose
- **Timestamps**: PostgreSQL timestamp columns with proper handling

## Testing

1. Start your application:
   ```bash
   npm run dev
   ```

2. Test the following functionality:
   - User registration and login
   - Agent signup and approval
   - Property creation and management
   - Blog creation and management
   - Contact form submission

## Troubleshooting

1. **Connection Issues**: Ensure PostgreSQL is running and credentials are correct
2. **Schema Issues**: Run `npm run db:push` to sync schema changes
3. **Data Type Errors**: Check that all data types match the schema definitions

## Rollback Plan

If you need to rollback to MongoDB:
1. Restore the original `package.json`
2. Restore original model files from git history
3. Update environment variables back to MongoDB
4. Run `npm install` to restore MongoDB dependencies
