import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import Home from './Home';
import Register from './components/pages/Register';
import Events from './pages/Events';
import EventDetail from './pages/EventDetails';


// hlh
function App() {
  
  return (
    <div className='py-16'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Events />} />
        <Route path="/events/detail" element={<EventDetail />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
      </div>
  );
}

export default App;