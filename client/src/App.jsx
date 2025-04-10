import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import Home from './Home';
import Register from './components/pages/Register';


// hlh
function App() {
  
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
  );
}

export default App;