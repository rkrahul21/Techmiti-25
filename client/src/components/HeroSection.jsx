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
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      scale: 1,
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95"></div>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-white p-4 relative overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-36"
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
                <div className="absolute -inset-8 sm:-inset-12 md:-inset-16 bg-gradient-to-r from-[#4facfe]/15 via-[#6a75f7]/15 to-[#00f2fe]/15 blur-2xl sm:blur-3xl md:blur-4xl rounded-full opacity-40 animate-pulse"></div>
                <div className="absolute -inset-6 sm:-inset-8 md:-inset-12 bg-gradient-to-r from-[#4facfe]/10 via-[#6a75f7]/10 to-[#00f2fe]/10 blur-xl sm:blur-2xl md:blur-3xl rounded-full opacity-30 animate-pulse delay-300"></div>
                <div className="absolute -inset-4 sm:-inset-4 md:-inset-8 bg-gradient-to-r from-[#4facfe]/5 via-[#6a75f7]/5 to-[#00f2fe]/5 blur-lg sm:blur-xl md:blur-2xl rounded-full opacity-20 animate-pulse delay-500"></div>

                {/* Additional radial glow with further reduced brightness */}
                <div className="absolute -inset-12 sm:-inset-16 md:-inset-20 bg-gradient-to-r from-[#4facfe]/3 via-[#6a75f7]/3 to-[#00f2fe]/3 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full opacity-15 animate-pulse delay-700"></div>

                <div className="flex flex-col items-center">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-2 sm:mb-3 md:mb-4 text-center relative flex flex-wrap justify-center items-center group tracking-wider">
                    {letters.map((letter, index) => (
                      <motion.span
                        key={index}
                        variants={item}
                        className={cn(
                          "inline-block mx-0.5 sm:mx-1 md:mx-1.5 transition-all duration-1000 ease-in-out",
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
                  <div className="relative w-full flex justify-center mt-2 sm:mt-3 md:mt-4">
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ delay: 3.5, duration: 0.5 }}
                      className="h-1 sm:h-1.5 md:h-2 w-20 sm:w-24 md:w-32 lg:w-40 xl:w-56 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] rounded-full ml-4 sm:ml-6 md:ml-8 lg:ml-12 transition-all duration-1000 ease-in-out group-hover:bg-gradient-to-r group-hover:from-[#FFD700] group-hover:via-[#FFA500] group-hover:to-[#FF8C00] group-hover:shadow-[0_0_15px_rgba(255,215,0,0.5)] group-hover:animate-pulse"
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
                    className="mt-6 sm:mt-8 md:mt-10"
                  >
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-4 sm:mb-5 md:mb-6 max-w-2xl mx-auto font-medium">
                      Annual Technical Fest of MIT Muzaffarpur
                    </p>

                    {/* Enhanced date display with eye-catching styling */}
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 md:mb-6 text-techmiti-cyan animate-float">
                      <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-wider bg-gradient-to-r from-[#4facfe] via-[#6a75f7] to-[#00f2fe] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(79,172,254,0.5)]">
                        14th - 16th May, 2025
                      </span>
                    </div>

                    {/* Wider timer component with improved mobile responsiveness */}
                    <div className="w-full max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto mb-4 sm:mb-6">
                      <CountdownTimer />
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
