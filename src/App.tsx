import './App.css'
import Login from './pages/Login/Login'
import Restaurant from './pages/Restaurant/Restaurant'
import Restaurants from './pages/Restaurants/Restaurants'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Footer from './sections/Footer/Footer'
import Header from './sections/Header/Header'
import Dashboard from './pages/Dashboard/Dashboard'
import { Link } from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Restaurants />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
