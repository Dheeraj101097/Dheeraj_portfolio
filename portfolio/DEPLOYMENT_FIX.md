# 500 Error Fix - Deployment Guide

## Issues Fixed:
1. ✅ Removed deprecated MongoDB connection options (useNewUrlParser, useUnifiedTopology)
2. ✅ Consolidated serverless function to avoid import path issues
3. ✅ Added environment variable support with fallback
4. ✅ Added detailed error logging for debugging
5. ✅ Added error details in API response

## Critical: Set Environment Variable in Vercel

### Step 1: Go to Vercel Dashboard
1. Open your project in Vercel
2. Go to **Settings** → **Environment Variables**

### Step 2: Add MongoDB URI
Add this environment variable:
- **Key**: `MONGODB_URI`
- **Value**: `mongodb+srv://dheerajap6_db_user:vrV9WYPkorEeHSSH@portfoliocluster.gnwiunn.mongodb.net/portfolio?retryWrites=true&w=majority`
- **Environment**: Select all (Production, Preview, Development)

### Step 3: Redeploy
After adding the environment variable, redeploy your application:
```bash
git add .
git commit -m "Fix: Resolve 500 error in contact form API"
git push
```

## Testing Locally:
```bash
# Test the contact form
npm run dev:full
```

## Check Logs in Vercel:
1. Go to your deployment in Vercel
2. Click on **Functions** tab
3. Click on `/api/contact`
4. View the logs to see detailed error messages

## What Changed:
- **api/contact.js**: Now self-contained with MongoDB connection and schema
- **src/lib/mongodb.js**: Removed deprecated options, uses environment variable
- **Contact.jsx**: Added console logs for debugging
