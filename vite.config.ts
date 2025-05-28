import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/',
  plugins: [react()],
  optimizeDeps: {
    include: ['recharts'] // <-- Force pre-bundling
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    chunkSizeWarningLimit: 2000, // Increase warning limit to 1MB (optional)
     sourcemap: true, 
     minify: false,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Split react and react-dom into their own chunk
            if (id.includes('react')) {
              return 'vendor_react'
            }
            // Split lodash into its own chunk (example)
            if (id.includes('lodash')) {
              return 'vendor_lodash'
            }
            // All other node_modules into vendor chunk
            return 'vendor'
          }
        }
      }
    }
  }
})
