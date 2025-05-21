//import reactLogo from './assets/YESMECHANIC.jpg'
import './App.css'
import { MainLayout } from './Layout/MainLayout/MainLayout.tsx'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes.tsx'
import { AuthProvider } from './pages/auth/AuthContext.tsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
