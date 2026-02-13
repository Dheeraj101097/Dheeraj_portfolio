# Contact Form Setup - Two Options

## Option 1: Web3Forms (Easiest - No Backend)

### Steps:
1. Go to https://web3forms.com
2. Sign up for free
3. Get your Access Key
4. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `Contact.jsx` line 42
5. Done! Form will send emails to your registered email

**Pros:** No backend needed, instant setup, free tier available

---

## Option 2: MongoDB with Vercel Serverless (For Production)

### Steps:
1. Install MongoDB driver:
```bash
npm install mongodb
```

2. Create `.env` file:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@portfolio.gnwiunn.mongodb.net/
```

3. Deploy to Vercel:
- The `/api/contact.js` serverless function will work automatically
- Add `MONGODB_URI` environment variable in Vercel dashboard

4. Update Contact.jsx to use `/api/contact` endpoint

**Pros:** Data stored in your database, full control

---

## Recommended: Use Option 1 for Development, Option 2 for Production
