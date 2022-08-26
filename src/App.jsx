import React from 'react'
import Courses from './pages/Courses'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Team from './pages/Team'
import Pricing from './pages/Pricing'
import Journal from './pages/Journal'
import Contact from './pages/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
export default function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Journal" element={<Journal />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  )
}
