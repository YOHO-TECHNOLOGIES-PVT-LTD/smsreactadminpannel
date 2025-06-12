// Import React shim first to ensure React is available globally
import './react-shim'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Ensure DOM is ready and React is available
const initializeApp = () => {
  const rootElement = document.getElementById('root')
  if (!rootElement) throw new Error('Failed to find the root element')

  // Double-check React is available globally
  if (typeof window !== 'undefined' && !(window as any).React) {
    console.warn('React not found globally, some libraries may fail');
  }

  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
};

// Initialize the app
initializeApp();
