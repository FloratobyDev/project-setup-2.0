import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Enable external access for Docker
    port: 5173,        // Use the default port 4000
    watch: {
      usePolling: true  // Enable polling to detect file changes in Docker
    },
  },
  build: {
    outDir: 'dist',  // Ensure the output directory is `dist`
  },
});
