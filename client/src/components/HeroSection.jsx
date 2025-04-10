import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import CountdownTimer from "./CoundownTimer";

const videoBackground =
  "https://assets.mixkit.co/videos/preview/mixkit-lines-of-code-in-a-digital-screen-10392-large.mp4";

// Binary code animation component
const BinaryRain = () => {
  const binaryChars = "01";
  const columns = 20;
  const rows = 10;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: columns }).map((_, colIndex) => (
        <div
          key={colIndex}
          className="absolute top-0 left-0"
          style={{
            left: `${(colIndex * 100) / columns}%`,
            animation: `binary-fall ${Math.random() * 2 + 1}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <span
              key={rowIndex}
              className="text-techmiti-cyan/20 text-xs"
              style={{
                display: "block",
                opacity: Math.random(),
              }}
            >
              {binaryChars[Math.floor(Math.random() * binaryChars.length)]}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showBinary, setShowBinary] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    // Show content after text animation completes
    const contentTimer = setTimeout(() => {
      setShowContent(true);
      setShowBinary(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, []);

  const letters = "TECHMITI'25".split("");
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 100,
      x: Math.random() * 300 - 150,
      rotate: Math.random() * 360,
      scale: 0,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        mass: 1,
      },
    },
  };

  return (
    <>
      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/85"></div>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-white p-4 relative overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-28"
      >
        <div className="container mx-auto text-center px-4">
          <div
            className={`transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <motion.div
                className="relative"
                variants={container}
                initial="hidden"
                animate="show"
              >
                <AnimatePresence>
                  {showBinary && <BinaryRain />}
                </AnimatePresence>

                {/* Further reduced brightness neon glowing effect behind TECHMITI'25 */}
                <div className="absolute -inset-8 sm:-inset-12 bg-gradient-to-r from-[#4facfe]/15 via-[#6a75f7]/15 to-[#00f2fe]/15 blur-2xl sm:blur-3xl rounded-full opacity-40 animate-pulse"></div>
                <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-[#4facfe]/10 via-[#6a75f7]/10 to-[#00f2fe]/10 blur-xl sm:blur-2xl rounded-full opacity-30 animate-pulse delay-300"></div>
                <div className="absolute -inset-4 sm:-inset-4 bg-gradient-to-r from-[#4facfe]/5 via-[#6a75f7]/5 to-[#00f2fe]/5 blur-lg sm:blur-xl rounded-full opacity-20 animate-pulse delay-500"></div>

                {/* Additional radial glow with further reduced brightness */}
                <div className="absolute -inset-12 sm:-inset-16 bg-gradient-to-r from-[#4facfe]/3 via-[#6a75f7]/3 to-[#00f2fe]/3 blur-[80px] sm:blur-[100px] rounded-full opacity-15 animate-pulse delay-700"></div>

                <div className="flex flex-col items-center">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-2 sm:mb-3 text-center relative flex flex-wrap justify-center items-center group tracking-wider">
                    {letters.map((letter, index) => (
                      <motion.span
                        key={index}
                        variants={item}
                        className={cn(
                          "inline-block mx-0.5 sm:mx-1 transition-all duration-1000 ease-in-out",
                          index < 4
                            ? "text-white"
                            : index < 7
                            ? "bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFA500] group-hover:to-[#FF8C00] transition-all duration-1000 ease-in-out group-hover:animate-pulse"
                            : "text-white"
                        )}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </h1>

                  {/* Underline element below MIT - with coordinated hover effect */}
                  <div className="relative w-full flex justify-center mt-2 sm:mt-3">
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ delay: 3.5, duration: 0.5 }}
                      className="h-1 sm:h-1.5 w-20 sm:w-24 md:w-32 lg:w-40 xl:w-56 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full ml-4 sm:ml-6 md:ml-8 lg:ml-12 transition-all duration-1000 ease-in-out group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFA500] group-hover:to-[#FF8C00] group-hover:shadow-[0_0_15px_rgba(255,215,0,0.5)] group-hover:animate-pulse"
                      style={{ transformOrigin: "center" }}
                    />
                  </div>
                </div>
              </motion.div>

              <AnimatePresence>
                {showContent && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-4 sm:mt-6 md:mt-8"
                  >
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 mb-3 sm:mb-4 md:mb-5 max-w-2xl mx-auto font-medium">
                      Annual Technical Fest of MIT Muzaffarpur
                    </p>

                    {/* Enhanced date display with eye-catching styling */}
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-techmiti-cyan animate-float">
                      <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold tracking-wider bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(79,172,254,0.5)]">
                        14th - 16th May, 2025
                      </span>
                    </div>

                    {/* Wider timer component with improved mobile responsiveness */}
                    <div className="w-full max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto mb-2">
                      <CountdownTimer />
                    </div>

                    {/* Down arrow - Moved higher up */}
                    <div className="mt-2 sm:mt-3 flex justify-center">
                      <a
                        href="#about"
                        className="text-white/70 hover:text-white animate-bounce inline-block"
                        aria-label="Scroll to About section"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                        </svg>
                      </a>
                    </div>

                    {/* Buttons moved to main screen */}
                    <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                      <Button className="w-full sm:w-auto text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 bg-gradient-to-r from-[#FF3CAC] via-[#784BA0] to-[#2B86C5] hover:from-[#2B86C5] hover:via-[#784BA0] hover:to-[#FF3CAC] shadow-lg hover:shadow-[#FF3CAC]/30 transition-all duration-500 transform hover:scale-105 relative group overflow-hidden rounded-xl border-2 border-transparent hover:border-white/20">
                        <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        <span className="absolute inset-0 bg-gradient-to-r from-[#FF3CAC]/20 to-[#2B86C5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        <span className="relative z-10 flex items-center justify-center font-bold tracking-wide">
                          Explore All Events
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </span>
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 border-2 border-[#00F5A0] text-[#00F5A0] hover:bg-[#00F5A0]/10 shadow-lg hover:shadow-[#00F5A0]/30 transition-all duration-500 transform hover:scale-105 relative group overflow-hidden rounded-xl hover:border-[#00F5A0]/80"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-[#00F5A0]/10 to-[#00D9F5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        <span className="absolute inset-0 bg-gradient-to-r from-[#00F5A0]/5 to-[#00D9F5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        <span className="relative z-10 flex items-center justify-center font-bold tracking-wide">
                          Register Now
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </span>
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
