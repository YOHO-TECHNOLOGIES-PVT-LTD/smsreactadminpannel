//import reactLogo from './assets/YESMECHANIC.jpg'
import './App.css'
import { MainLayout } from './Layout/MainLayout/MainLayout.tsx'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes.tsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
