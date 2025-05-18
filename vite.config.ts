import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   css: {
    postcss: './postcss.config.js', // Point to your PostCSS config
  },
  server: {
    // Disable HMR overlay to prevent the error message display
    hmr: {
      overlay: false
    }
  }
})
