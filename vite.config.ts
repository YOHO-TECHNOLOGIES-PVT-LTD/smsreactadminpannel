import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    include: ['recharts'],
    exclude: ['recharts'] 
  },
  build: {
    minify: false, // ✅ HERE
    sourcemap: true,
    outDir: 'dist',
    assetsDir: 'assets',
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor_react'
            if (id.includes('lodash')) return 'vendor_lodash'
            return 'vendor'
          }
        }
      }
    }
  }
})
