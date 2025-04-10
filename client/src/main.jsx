import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <App/>
       
    </BrowserRouter>
  </StrictMode>,
)
