import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Download,
  BookOpen,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const Brochure = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1c2hxvvyRGOY_v1XBHmGgf1PPgaBTGGMN/view?usp=drivesdk",
      "_blank"
    );
  };

  const brochurePages = [
    {
      title: "Welcome to TECHMITI'25",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              &lt;TECHMITI'25 /&gt;
            </h2>
            <p className="text-gray-300 text-lg">
              Where Innovation Meets Technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-purple-900/30 backdrop-blur-lg rounded-xl p-6 border border-purple-500/10">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                <span className="font-mono">&lt;</span> Event Overview
                <span className="font-mono">/&gt;</span>
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">&gt;</span>3 Days of
                  Innovation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">&gt;</span>
                  10+ Technical Events
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">&gt;</span>
                  5+ Workshops
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">&gt;</span>3 Guest Lectures
                </li>
              </ul>
            </div>
            <div className="bg-purple-900/30 backdrop-blur-lg rounded-xl p-6 border border-purple-500/10">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                <span className="font-mono">&lt;</span> Key Highlights
                <span className="font-mono">/&gt;</span>
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">&gt;</span>
                  Industry Expert Talks
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">&gt;</span>
                  Hands-on Workshops
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">&gt;</span>
                  Networking Opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">&gt;</span>
                  Prize Pool Worth ₹1L+
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Event Schedule",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              &lt;Event Timeline /&gt;
            </h2>
            <p className="text-gray-300 text-lg">
              Three Days of Technical Excellence
            </p>
          </div>
          <div className="space-y-4">
            {["Day 0", "Day 1", "Day 2"].map((day, index) => (
              <div
                key={day}
                className="bg-purple-900/30 backdrop-blur-lg rounded-xl p-6 border border-purple-500/10"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-cyan-400">
                    <span className="font-mono">&lt;</span> {day}
                    <span className="font-mono">/&gt;</span>
                  </h3>
                  <span className="text-sm text-purple-400">
                    May {14 + index}, 2025
                  </span>
                </div>
                <div className="space-y-2 text-gray-300">
                  <p className="flex items-center gap-2">
                    <span className="text-purple-400">&gt;</span>
                    Opening Ceremony
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-purple-400">&gt;</span>
                    Technical Events
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-purple-400">&gt;</span>
                    Workshops
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-purple-400">&gt;</span>
                    Guest Lectures
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Registration & Prizes",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              &lt;Join TECHMITI'25 /&gt;
            </h2>
            <p className="text-gray-300 text-lg">
              Be Part of Something Extraordinary
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-purple-900/30 backdrop-blur-lg rounded-xl p-6 border border-purple-500/10">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                <span className="font-mono">&lt;</span> Registration Details
                <span className="font-mono">/&gt;</span>
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">&gt;</span>
                  Early Bird: ₹299
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">&gt;</span>
                  Regular: ₹399
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">&gt;</span>
                  On Spot: ₹499
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">&gt;</span>
                  Team Size: 2-4 Members
                </li>
              </ul>
            </div>
            <div className="bg-purple-900/30 backdrop-blur-lg rounded-xl p-6 border border-purple-500/10">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                <span className="font-mono">&lt;</span> Prize Pool
                <span className="font-mono">/&gt;</span>
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">&gt;</span>
                  1st Prize: ₹50,000
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">&gt;</span>
                  2nd Prize: ₹30,000
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">&gt;</span>
                  3rd Prize: ₹20,000
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">&gt;</span>
                  Special Category Prizes
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0c29] text-white relative">
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover opacity-20 z-0"
        src="/bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 container mx-auto px-4 py-6 md:py-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 md:mb-8 lg:mb-12"
        >
          <div className="flex items-center justify-center mb-3 md:mb-4">
            <BookOpen className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 text-cyan-400 mr-2 md:mr-3 lg:mr-4" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Event Brochure
            </h1>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 rounded-full blur"></div>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto mb-4 md:mb-6 lg:mb-8 relative px-4">
              &lt;Explore the complete guide to TECHMITI'25 /&gt;
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block relative"
          >
            <button
              onClick={handleDownload}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`relative flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 rounded-full backdrop-blur-sm transition-all duration-300 min-w-[160px] md:min-w-[180px] ${
                isHovered
                  ? "bg-gradient-to-r from-purple-600 to-cyan-500 shadow-lg shadow-purple-500/30"
                  : "bg-gradient-to-r from-purple-600/30 to-cyan-500/30"
              }`}
            >
              {/* Decorative dots */}
              <div className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400/50"></div>
              <div className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-400/50"></div>

              <div
                className={`flex items-center justify-center gap-1.5 md:gap-2 text-sm md:text-base lg:text-lg font-medium transition-all duration-300 ${
                  isHovered
                    ? "text-white"
                    : "bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                }`}
              >
                {isHovered ? (
                  <>
                    <span className="font-mono">&lt;</span>
                    <span>Download Brochure</span>
                    <span className="font-mono">/&gt;</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 md:h-5 md:w-5 animate-bounce ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="font-mono">&lt;</span>
                    <span>Brochure</span>
                    <span className="font-mono">/&gt;</span>
                  </>
                )}
              </div>
            </button>
          </motion.div>
        </motion.div>

        {/* Brochure Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-purple-900/30 backdrop-blur-lg rounded-xl p-4 md:p-6 lg:p-8 border border-purple-500/10">
            {/* Navigation Dots - Hidden on mobile */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 hidden md:flex gap-2">
              {brochurePages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentPage === index
                      ? "bg-gradient-to-r from-purple-400 to-cyan-400"
                      : "bg-purple-400/30"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows - Adjusted for mobile */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:px-6">
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    prev === 0 ? brochurePages.length - 1 : prev - 1
                  )
                }
                className={`p-2 md:p-2.5 rounded-full bg-purple-900/50 backdrop-blur-sm border border-purple-500/20 text-purple-400 hover:text-white transition-colors ${
                  currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={currentPage === 0}
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    prev === brochurePages.length - 1 ? 0 : prev + 1
                  )
                }
                className={`p-2 md:p-2.5 rounded-full bg-purple-900/50 backdrop-blur-sm border border-purple-500/20 text-purple-400 hover:text-white transition-colors ${
                  currentPage === brochurePages.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={currentPage === brochurePages.length - 1}
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Page Content */}
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="px-2 md:px-4"
            >
              {brochurePages[currentPage].content}
            </motion.div>

            {/* Mobile Page Indicator - Improved touch targets */}
            <div className="mt-6 flex justify-center gap-3 md:hidden">
              {brochurePages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === index
                      ? "bg-gradient-to-r from-purple-400 to-cyan-400"
                      : "bg-purple-400/30"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Brochure;
