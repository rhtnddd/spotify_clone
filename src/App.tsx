import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomeMobile, HomeWeb } from './pages/Home'
import { LoginMobile, LoginWeb } from './pages/Login'
import { SignUpMobile, SignUpWeb } from './pages/SignUp'
import { useMediaQuery } from './hooks/useMediaQuery'
import './App.css'
function LoginPage() {
  const isMobile = useMediaQuery('(max-width: 767px)')
  return isMobile ? <LoginMobile /> : <LoginWeb />
}
function SignUpPage() {
  const isMobile = useMediaQuery('(max-width: 767px)')
  return isMobile ? <SignUpMobile /> : <SignUpWeb />
}
function HomePage() {
  const isMobile = useMediaQuery('(max-width: 767px)')
  return isMobile ? <HomeMobile /> : <HomeWeb />
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App