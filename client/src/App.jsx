import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import Home from "./Home";
import Register from "./components/pages/Register";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetails";
import Schedule from "./pages/Schedule";
import Brochure from "./pages/Brochure";
import Sponsors from "./pages/Sponsors";

// hlh
function App() {
  return (
    <div className="pt-16">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Events />} />
        <Route path="/events/detail" element={<EventDetail />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/brochure" element={<Brochure />} />
        <Route path="/sponsors" element={<Sponsors />} />
      </Routes>
    </div>
  );
}

export default App;
