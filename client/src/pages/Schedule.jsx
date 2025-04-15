import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Calendar, MapPin, Clock, Info } from "lucide-react";

const scheduleData = {
  "Day 0 (14th May)": [
    {
      time: "09:00 AM - 10:00 AM",
      event: "Opening Ceremony",
      venue: "Main Auditorium",
      description: "Welcome address and inauguration of TECHMITI'25",
      icon: "🎉",
    },
    {
      time: "10:00 AM - 10:00 AM (Next day)",
      event: "Hackathon",
      venue: "Main Auditorium",
      description: "24-hour coding challenge to build innovative solutions",
      icon: "💻",
    },
    {
      time: "11:00 AM - 02:00 PM",
      event: "Code Crusade",
      venue: "Computer Lab",
      description: "Competitive programming contest",
      icon: "⚔️",
    },
    {
      time: "02:00 PM - 05:00 PM",
      event: "Gaming Tournament (Day 1)",
      venue: "Gaming Arena",
      description: "Preliminary rounds of esports competition",
      icon: "🎮",
    },
  ],
  "Day 1 (15th May)": [
    {
      time: "10:00 AM - 01:00 PM",
      event: "Circuit Design",
      venue: "Electronics Lab",
      description: "Hardware design and implementation challenge",
      icon: "⚡",
    },
    {
      time: "02:00 PM - 06:00 PM",
      event: "Robo Wars",
      venue: "Open Ground",
      description: "Robot combat competition",
      icon: "🤖",
    },
    {
      time: "02:00 PM - 05:00 PM",
      event: "Gaming Tournament (Day 2)",
      venue: "Gaming Arena",
      description: "Semi-final rounds of esports competition",
      icon: "🎮",
    },
  ],
  "Day 2 (16th May)": [
    {
      time: "10:00 AM - 04:00 PM",
      event: "Tech Talks",
      venue: "Seminar Hall",
      description: "Industry experts sharing insights on latest technologies",
      icon: "🎤",
    },
    {
      time: "02:00 PM - 05:00 PM",
      event: "Gaming Tournament Finals",
      venue: "Gaming Arena",
      description: "Final showdown of the gaming championship",
      icon: "🏆",
    },
    {
      time: "06:00 PM - 08:00 PM",
      event: "Closing Ceremony & Prize Distribution",
      venue: "Main Auditorium",
      description: "Celebration of achievements and distribution of awards",
      icon: "🌟",
    },
  ],
};

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("Day 0 (14th May)");
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    window.open(
      // "https://drive.google.com/file/d/1c2hxvvyRGOY_v1XBHmGgf1PPgaBTGGMN/view?usp=drivesdk",
      "/schedule"
      // "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-[#0f0c29] text-white relative">
      {/* Background Video - matching homepage style */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover opacity-20 z-0"
        src="/bg-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Terminal className="w-8 h-8 md:w-12 md:h-12 text-cyan-400 mr-3 md:mr-4" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Event Timeline
            </h1>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 rounded-full blur"></div>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8 relative">
              &lt;Plan your <span className="text-cyan-400">TECHMITI</span>{" "}
              experience with our comprehensive event schedule /&gt;
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
              className={`relative flex items-center justify-center px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300 min-w-[180px] ${
                isHovered
                  ? "bg-gradient-to-r from-purple-600 to-cyan-500 shadow-lg shadow-purple-500/30"
                  : "bg-gradient-to-r from-purple-600/30 to-cyan-500/30"
              }`}
            >
              {/* Decorative dots */}
              <div className="absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400/50"></div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-400/50"></div>

              <div
                className={`flex items-center justify-center gap-2 text-base md:text-lg font-medium transition-all duration-300 ${
                  isHovered
                    ? "text-white"
                    : "bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                }`}
              >
                {isHovered ? (
                  <>
                    <span className="font-mono">&lt;</span>
                    <span>Download Schedule</span>
                    <span className="font-mono">/&gt;</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 animate-bounce ml-1"
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
                    <Calendar className="h-5 w-5" />
                    <span className="font-mono">&lt;</span>
                    <span>Schedule</span>
                    <span className="font-mono">/&gt;</span>
                  </>
                )}
              </div>
            </button>
          </motion.div>
        </motion.div>
       

        {/* Day Selection Tabs - Single Row */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 gap-2 md:gap-4 mb-8 md:mb-12 max-w-3xl mx-auto px-2 md:px-4"
        > */}
          {/* {Object.keys(scheduleData).map((day, index) => (
            <motion.button
              key={day}
              onClick={() => setSelectedDay(day)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 md:py-4 px-2 md:px-4 rounded-xl transition-all duration-500 backdrop-blur-sm border relative overflow-hidden ${
                selectedDay === day
                  ? "bg-gradient-to-r from-purple-600/40 to-cyan-500/40 border-purple-500/50 shadow-lg shadow-purple-500/20"
                  : "bg-purple-900/20 border-transparent hover:border-purple-500/30 hover:bg-purple-900/30"
              }`}
            > */}
              {/* Technical decorative elements */}
              {/* <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1 left-1 w-1 h-1 md:w-2 md:h-2 rounded-full bg-cyan-400/30"></div>
                <div className="absolute top-1 right-1 w-1 h-1 md:w-2 md:h-2 rounded-full bg-purple-400/30"></div>
                <div className="absolute bottom-1 left-1 w-1 h-1 md:w-2 md:h-2 rounded-full bg-purple-400/30"></div>
                <div className="absolute bottom-1 right-1 w-1 h-1 md:w-2 md:h-2 rounded-full bg-cyan-400/30"></div>
              </div> */}

              {/* Progress bar */}
              {/* <div
                className="absolute top-0 left-0 w-full h-0.5 md:h-1 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 transition-opacity duration-300"
                style={{ opacity: selectedDay === day ? 1 : 0 }}
              /> */}

              {/* Content */}
              {/* <div className="relative space-y-1 md:space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-base md:text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent flex items-center font-mono">
                    <span className="mr-1 md:mr-2">&lt;</span>
                    Day {index}
                    <span className="ml-1 md:ml-2">/&gt;</span>
                  </div>
                  {selectedDay === day && (
                    <div className="hidden md:flex items-center text-[10px] md:text-xs text-cyan-400">
                      <span className="animate-pulse mr-1">●</span>
                      ACTIVE
                    </div>
                  )}
                </div>

                <div className="flex flex-col items-start">
                  <div className="text-sm md:text-lg font-mono text-white">
                    MAY {14 + index}
                  </div>
                  <div className="text-[10px] md:text-sm text-cyan-400 font-mono">
                    {index === 0 ? (
                      <span className="flex items-center gap-1">
                        <span className="text-purple-400">&gt;</span> Opening
                      </span>
                    ) : index === 1 ? (
                      <span className="flex items-center gap-1">
                        <span className="text-purple-400">&gt;</span> Main
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <span className="text-purple-400">&gt;</span> Final
                      </span>
                    )}
                  </div>
                </div>
              </div> */}
            {/* </motion.button>
          ))}
        </motion.div> */}

        {/* Event Cards */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2 md:px-4"
        >
          {scheduleData[selectedDay].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/50 to-cyan-500/50 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-purple-900/30 backdrop-blur-lg rounded-xl p-4 md:p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-3 md:gap-6">
                    <div className="md:w-1/3">
                      <div className="flex items-center text-base md:text-xl font-semibold text-cyan-400 mb-1 md:mb-2">
                        <Clock className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        {item.time}
                      </div>
                      <div className="flex items-center text-sm md:text-base text-gray-300">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                        {item.venue}
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="flex items-center mb-1 md:mb-2">
                        <span className="text-2xl md:text-3xl mr-2 md:mr-3">
                          {item.icon}
                        </span>
                        <h3 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                          {item.event}
                        </h3>
                      </div>
                      <div className="hidden md:flex items-start text-sm md:text-base text-gray-300">
                        <Info className="w-3 h-3 md:w-4 md:h-4 mr-2 mt-1 flex-shrink-0" />
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        <div className="text-center font-semibold text-3xl mb-8 md:mb-12">
          Visit Again .....
        </div>
      </div>
    </div>
  );
};

export default Schedule;
