# 🌐 Online PostgreSQL Database Setup Guide

## Quick Setup (3 Steps)

### Step 1: Choose Your Database Provider

#### 🟢 **Supabase (Recommended)**
- **Website**: https://supabase.com
- **Free Tier**: 500MB, 2 databases
- **Features**: Built-in auth, real-time, dashboard
- **Setup Time**: 2 minutes

#### 🟡 **Neon**
- **Website**: https://neon.tech
- **Free Tier**: 512MB, 1 database
- **Features**: Serverless, auto-scaling
- **Setup Time**: 1 minute

#### 🔵 **Railway**
- **Website**: https://railway.app
- **Free Tier**: $5/month credit
- **Features**: Simple deployment
- **Setup Time**: 2 minutes

### Step 2: Get Your Connection String

After creating your database, you'll get a connection string like:
```
postgresql://username:password@host:port/database
```

### Step 3: Update Your .env File

Replace the DATABASE_URL in your `.env` file with your actual connection string:

```env
DATABASE_URL=postgresql://your-username:your-password@your-host:5432/your-database
```

### Step 4: Test Connection

Run this command to test your database connection:
```bash
node connect-db.js
```

### Step 5: Create Tables

Run this command to create your database tables:
```bash
node setup-db.js
```

### Step 6: Start Your App

```bash
npm run dev
```

## 🔧 Example Setup (Supabase)

### 1. Create Supabase Project
```
1. Go to https://supabase.com
2. Sign up/Login
3. Click "New Project"
4. Choose organization
5. Enter project name: "edenhomes"
6. Enter database password
7. Choose region
8. Click "Create new project"
```

### 2. Get Connection String
```
1. Go to Settings > Database
2. Copy "Connection string"
3. Replace [YOUR-PASSWORD] with your actual password
```

### 3. Update .env
```env
DATABASE_URL=postgresql://postgres.abcdefg:your-password@aws-0-us-west-1.pooler.supabase.com:5432/postgres
```

### 4. Test & Deploy
```bash
# Test connection
node connect-db.js

# Setup tables
node setup-db.js

# Start app
npm run dev
```

## 🚨 Troubleshooting

### Connection Issues:
- ✅ Check if DATABASE_URL is correct
- ✅ Verify password doesn't contain special characters
- ✅ Ensure database service is running
- ✅ Check if IP is whitelisted (some providers require this)

### SSL Issues:
- Add `?sslmode=require` to your connection string
- Or use `ssl: { rejectUnauthorized: false }` in connection config

## 🎯 What Happens Next

Once connected:
1. ✅ Your app will show real data instead of "No properties available"
2. ✅ You can add/edit properties, blogs, users
3. ✅ All CRUD operations will work
4. ✅ Your app will be production-ready!

---

**Need help?** Run `node connect-db.js` to test your connection!
