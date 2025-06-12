import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import 'preline'
import { HSStaticMethods } from 'preline'


document.addEventListener('DOMContentLoaded', () => {
  HSStaticMethods.autoInit()
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   
      <App />
    
  </StrictMode>,
)
