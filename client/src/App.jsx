import React from 'react'
import AboutUs from './components/sections/AboutUs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";


function App() {
  // const events = [
  //   "RoboRace",
  //   "Dangal",
  //   "Quiz",
  //   "Codingo",
  //   "Hackathon",
  //   "TechnoTalks",
  //   "Workshops",
  //   "Treasure Hunt",
  //   "Gaming",
  //   "Web Development",
  //   "App Development",
  //   "AI/ML",
  // ];
  return (
    <>
     

        <Routes>
          <Route path="/" element={""} />
          <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    
      {/* <div className="bg-blue-900 text-white flex flex-col items-center justify-center h-screen">
        <h1>TECHMIT'25</h1>
        <h3>Coming Soon</h3>
      </div>

      <div>
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-blue-900 text-white flex flex-col items-center justify-center "
          >
            <h1 className="bg-yellow-500 m-2 p-2 rounded-md shadow-lg">
              {event}
            </h1>
          </div>
        ))}
      </div> */}
    </>
  );
}

export default App;
