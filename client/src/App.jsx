import React from 'react';
import AboutUs from './components/sections/AboutUs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import Countdown from './components/Countdown';
//import LandingPage from './components/LandingPage';
import videoSrc from './assets/88fcbfc0.mp4';


// hlh
function App() {
  const events = [
    "RoboRace",
    "Dangal",
    "Quiz",
    "Codingo",
    "Hackathon",
    "TechnoTalks",
    "Workshops",
    "Treasure Hunt",
    "Gaming",
    "Web Development",
    "App Development",
    "AI/ML",
  ];
  return (
    <>
    {/* Background Video Section */}
    <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
        />
        </div>
      <div className="bg-blue-900 text-white flex flex-col items-center justify-center h-screen">
        <Countdown />
        <h1>TECHMIT'25</h1>
        <h3>Coming Soon</h3>
        
      </div>

      <div>
        {events.map((event, index) => (
          <div key={index} className='bg-blue-900 text-white flex flex-col items-center justify-center'>
            <h1 className='bg-yellow-500 m-2 p-2 rounded-md shadow-lg'>{event}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;