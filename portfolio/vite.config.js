import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: isSsrBuild
        ? {}
        : {
            manualChunks: {
              'framer-motion': ['framer-motion'],
              'lucide': ['lucide-react'],
            },
          },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['framer-motion', 'lucide-react'],
  },
}));