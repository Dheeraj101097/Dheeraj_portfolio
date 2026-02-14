# 🚀 Dheeraj Patnaik - Portfolio Website

A modern, responsive portfolio website showcasing embedded systems, IoT projects, and technical expertise. Built with React, Vite, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/React-18.3.1-blue) ![Vite](https://img.shields.io/badge/Vite-5.4.2-purple) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-cyan)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🌓 **Dark/Light Mode** - Toggle between themes (defaults to light mode)
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- 🎬 **Video Background** - Dynamic hero section with responsive video (desktop/mobile)
- 📧 **Contact Form** - MongoDB integration for message storage
- 🎯 **Scroll Spy Navigation** - Active section highlighting in header
- ⚡ **Performance Optimized** - Lazy loading, code splitting, image optimization
- 🎭 **Smooth Animations** - Framer Motion powered transitions

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **Vite 5.4.2** - Build tool & dev server
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Framer Motion 10.16.16** - Animation library
- **Lucide React** - Icon library

### Backend
- **Express 5.2.1** - Node.js web framework
- **MongoDB** - Database for contact form submissions
- **Mongoose 9.2.1** - MongoDB ODM

### Additional Tools
- **Concurrently** - Run multiple commands simultaneously
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
portfolio/
├── api/                    # Vercel serverless functions
│   └── contact.js         # Contact form API endpoint
├── src/
│   ├── assets/            # Images, videos, certificates
│   │   ├── herovid.mp4   # Desktop hero video
│   │   └── herovidmob.mp4 # Mobile hero video
│   ├── components_g/      # Main components
│   │   ├── Header.jsx    # Navigation with scroll spy
│   │   ├── Hero.jsx      # Hero section with video
│   │   ├── Skills.jsx    # Skills showcase
│   │   ├── Projects.jsx  # Project portfolio
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Certificate.jsx
│   │   ├── Contact.jsx   # Contact form
│   │   └── Footer.jsx
│   ├── lib/
│   │   └── mongodb.js    # MongoDB connection & schema
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── server.js             # Express backend for local dev
├── .env                  # Environment variables (not in git)
├── .env.example          # Environment template
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account (for contact form)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Copy the example env file
copy .env.example .env

# Edit .env and add your MongoDB connection string
MONGODB_URI=mongodb+srv://<username>:<password>@portfolio.gnwiunn.mongodb.net/portfolio
```

4. **Start development servers**

**Option A: Run both frontend and backend together (Recommended)**
```bash
npm run dev:full
```

**Option B: Run separately**

Terminal 1 - Frontend:
```bash
npm run dev
```

Terminal 2 - Backend:
```bash
npm run server
```

5. **Open browser**
```
http://localhost:5173
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server (frontend only) |
| `npm run server` | Start Express server (backend only) |
| `npm run dev:full` | Start both frontend & backend |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🔧 Configuration

### MongoDB Setup

1. Create a MongoDB Atlas account at https://mongodb.com/cloud/atlas
2. Create a cluster and database named `portfolio`
3. Create a collection named `contacts`
4. Get your connection string and add to `.env`

### Resume Link

Update the Google Drive link in `src/components_g/Hero.jsx`:
```javascript
href="https://drive.google.com/file/d/YOUR_RESUME_FILE_ID/view"
```

### Email Configuration

Email is pre-configured to `dheerajap6@gmail.com`. Update in:
- `src/components_g/Hero.jsx` (Contact button)
- `src/components_g/Contact.jsx` (Contact info)

## 🎨 Customization

### Colors (Tailwind Config)

The portfolio uses a green theme. Modify in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* Green shades */ },
  secondary: { /* Teal shades */ },
  accent: { /* Mint shades */ }
}
```

### Content

Update personal information in:
- `src/components_g/Hero.jsx` - Name, title, description
- `src/components_g/Skills.jsx` - Skills list
- `src/components_g/Projects.jsx` - Project details
- `src/components_g/Experience.jsx` - Work experience
- `src/components_g/Education.jsx` - Educational background
- `src/components_g/Certificate.jsx` - Certifications

## 📦 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
vercel
```

3. **Add environment variables in Vercel dashboard**
- Go to Project Settings → Environment Variables
- Add `MONGODB_URI` with your connection string

### Other Platforms

The portfolio can be deployed to:
- Netlify
- GitHub Pages
- AWS Amplify
- Railway

Make sure to:
1. Set `MONGODB_URI` environment variable
2. Configure serverless functions (if supported)

## 🐛 Troubleshooting

### Contact form not working
- Ensure backend server is running on port 3245
- Check MongoDB connection string in `.env`
- Verify CORS is enabled

### Video not loading
- Check video files exist in `src/assets/`
- Ensure video format is MP4
- Check browser console for errors

### Build errors
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf .vite`
- Update dependencies: `npm update`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Dheeraj Patnaik**
- Email: dheerajap6@gmail.com
- GitHub: [@Dheeraj101097](https://github.com/Dheeraj101097)
- LinkedIn: [dheerajpatnaik10](https://www.linkedin.com/in/dheerajpatnaik10/)

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- UI Framework by [Tailwind CSS](https://tailwindcss.com/)

---

⭐ If you found this helpful, please give it a star!
