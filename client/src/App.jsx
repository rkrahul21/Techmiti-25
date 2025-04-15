import React from "react";
import { Routes, Route } from "react-router-dom";
// import Admin from "./pages/Admin";
// import AdminLogin from "./pages/AdminLogin";
import Home from "./Home";
import Register from "./components/pages/Register";
import Events from "./pages/Events";
// import EventDetail from "./pages/EventDetails";
import Schedule from "./pages/Schedule";
import Brochure from "./pages/Brochure";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import RegistrationForm from "./pages/RegistrationForm";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import Sponsors from "./components/sections/Sponsors";

// hlh
function App() {
  return (
    <div className="pt-16">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Events />} />
        <Route path="/register" element={<Register />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/brochure" element={<Brochure />} />
        <Route path="/sponsors" element={<Sponsors/>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/:eventId" element={<RegistrationForm />} />
        <Route
          path="/registration-success/:eventId"
          element={<RegistrationSuccess />}
        />
      </Routes>
    </div>
  );
}

export default App;
