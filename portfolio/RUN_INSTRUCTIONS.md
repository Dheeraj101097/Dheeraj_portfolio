# Running the Portfolio with MongoDB

## Development (Local):

### Option 1: Run Both Servers Together (Recommended)
```bash
npm run dev:full
```
This runs:
- Vite dev server on http://localhost:5173
- Express API server on http://localhost:5000

### Option 2: Run Separately
Terminal 1:
```bash
npm run dev
```

Terminal 2:
```bash
npm run server
```

## Production (Vercel):
The `/api/contact.js` serverless function will work automatically on Vercel.

Just deploy:
```bash
vercel
```

## Testing:
1. Open http://localhost:5173
2. Fill out the contact form
3. Submit
4. Check MongoDB Atlas -> Collections -> portfolio -> contacts
