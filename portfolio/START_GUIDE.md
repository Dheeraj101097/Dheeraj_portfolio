# 🚀 How to Start the Portfolio

## Step 1: Install Dependencies
```bash
npm install
```

## Step 2: Start Both Servers

### Option A: Run Both Together (Recommended)
```bash
npm run dev:full
```

This will start:
- ✅ Frontend (Vite) on http://localhost:5173
- ✅ Backend (Express) on http://localhost:5000

### Option B: Run Separately

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
npm run server
```

## Step 3: Open Browser
Navigate to: http://localhost:5173

## Step 4: Test Contact Form
1. Scroll to Contact section
2. Fill out the form
3. Submit
4. Check MongoDB Atlas → Collections → portfolio → contacts

---

## Environment Variables

The `.env` file contains:
```
MONGODB_URI=mongodb+srv://dheerajap6:Dheeraj%4010@portfolio.gnwiunn.mongodb.net/portfolio
```

---

## Troubleshooting

**If backend fails to start:**
- Check if MongoDB URI is correct in `.env`
- Ensure port 5000 is not in use

**If contact form doesn't work:**
- Make sure both servers are running
- Check browser console for errors
- Verify backend is running on port 5000
