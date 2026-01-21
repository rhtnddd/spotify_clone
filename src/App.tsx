import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomeMobile, HomeWeb } from './pages/Home'
import { useMediaQuery } from './hooks/useMediaQuery'
import './App.css'

function HomePage() {
  const isMobile = useMediaQuery('(max-width: 767px)')
  return isMobile ? <HomeMobile /> : <HomeWeb />
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App