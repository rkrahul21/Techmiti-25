import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import logo from "../assets/logo.jpg";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-14 px-4 overflow-hidden shadow-inner border-t border-gray-700">
      
      {/* 🔵 Glowing Background (Static) */}
      <div className="absolute -top-10 left-0 w-full h-80 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 opacity-10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center space-y-8 z-10">

        {/* 🔹 Logo */}
        <div className="flex flex-col items-center">
          <div className="p-1 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600">
            <div className="rounded-full bg-black p-1">
              <img
                src={logo}
                alt="TechMITi'25 Logo"
                className="h-24 w-24 rounded-full object-cover shadow-xl hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-cyan-400 mt-4 drop-shadow-lg">
            TechMITi'25
          </h1>
        </div>

        {/* 🔗 Navigation */}
        <nav className="flex flex-wrap justify-center gap-8 text-lg font-semibold">
          {["HOME", "EVENTS", "GLIMPSE", "BROCHURE", "CA RULEBOOK", "REGISTER"].map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
              className="text-gray-300 hover:text-cyan-300 hover:tracking-wider transition-all duration-300 transform hover:-translate-y-1"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* 📱 Social Icons */}
        <div className="flex gap-8 text-2xl text-gray-300">
          <a href="#" className="hover:text-cyan-300 hover:scale-125 transition duration-300"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-400 hover:scale-125 transition duration-300"><FaLinkedin /></a>
          <a href="#" className="hover:text-blue-600 hover:scale-125 transition duration-300"><FaFacebook /></a>
        </div>

        {/* ━ Divider */}
        <div className="w-3/4 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 rounded-full my-4 shadow-md"></div>

        {/* 📜 Footer Info */}
        <div className="text-gray-400 text-sm space-y-1">
          <p>© {currentYear} TechMITi'25. All rights reserved.</p>
          <p>
            Made with <span className="text-cyan-400">♥</span> by{" "}
            <span className="text-white font-semibold">Team MOXIE</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
