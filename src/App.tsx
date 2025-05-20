//import reactLogo from './assets/YESMECHANIC.jpg'
import './App.css'
import { MainLayout } from './Layout/MainLayout/MainLayout.tsx'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>

    </>
  )
}

export default App
