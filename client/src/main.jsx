import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import AboutUs from './components/sections/AboutUs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path="/register" element={<Registraion />} />
        <Route path="/events" element={<Events />} />
        <Route path='/events/:eventId' element={<EventDetails />} /> */}
      </Routes>
       
    </BrowserRouter>
  </StrictMode>,
)
