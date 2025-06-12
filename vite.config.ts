import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react({
    jsxImportSource: 'react'
  })],
    base: './',
    define: {
      global: 'globalThis',
      'process.env': {},
      __DEV__: 'false',
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'recharts'],
      exclude: [],
      force: true
    },
    resolve: {
      alias: {
        'react': 'react',
        'react-dom': 'react-dom'
      }
    },
	  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    commonjsOptions: {
      include: [/recharts/, /node_modules/]
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          charts: ['recharts'],
        },
      },
    },
  },
  server:{
    proxy:{
      '/socket.io': {
        target: 'http://localhost:3000',
        ws: true,
      },
    }
  }
});
