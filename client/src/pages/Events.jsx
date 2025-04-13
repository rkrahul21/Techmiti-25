import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Terminal,
  Code2,
  Laptop,
  Cpu,
  Brain,
  Rocket,
  Search,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Calendar,
  MapPin,
  Users,
  Trophy,
  IndianRupee,
  FileText,
  X,
} from "lucide-react";
import events from "../data/events";

const Events = () => {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [terminalText, setTerminalText] = useState("");
  const [terminalVisible, setTerminalVisible] = useState(false);
  const navigate = useNavigate();

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Terminal typing effect
  useEffect(() => {
    if (terminalVisible) {
      const text =
        '> Loading events database...\n> Connecting to server...\n> Retrieving event data...\n> Data loaded successfully.\n> Type "help" for commands.';
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setTerminalText((prev) => prev + text[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [terminalVisible]);

  const categories = [
    {
      name: "All Events",
      icon: "🎯",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      name: "Technical",
      icon: "💻",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Cultural",
      icon: "🎭",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      name: "Gaming",
      icon: "🎮",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Workshops",
      icon: "🔧",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      currentCategory === "all" || event.category === currentCategory;
    const matchesSearch =
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseEvent = () => {
    setSelectedEvent(null);
  };

  const toggleTerminal = () => {
    setTerminalVisible(!terminalVisible);
    if (!terminalVisible) {
      setTerminalText("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white relative overflow-hidden">
      {/* Background Video */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-20"
        >
          <source src="/videos/tech-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Matrix-like background effect */}
      <div className="fixed inset-0 w-full h-full overflow-hidden -z-5 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)",
            backgroundSize: "100% 100%",
            animation: "pulse 8s infinite",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Terminal Button with enhanced tech effect */}
        <button
          onClick={toggleTerminal}
          className="fixed top-4 right-4 z-50 bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-lg p-2 text-cyan-400 hover:bg-black/70 hover:border-cyan-500/50 transition-all duration-300 group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
          <div className="relative flex items-center gap-2">
            <Terminal size={20} className="group-hover:animate-pulse" />
            <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              &gt;_
            </span>
          </div>
        </button>

        {/* Terminal Window */}
        <AnimatePresence>
          {terminalVisible && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-16 right-4 z-50 w-80 h-96 bg-black/90 backdrop-blur-md border border-cyan-500/30 rounded-lg overflow-hidden shadow-lg shadow-cyan-500/20"
            >
              <div className="flex items-center justify-between bg-cyan-900/50 p-2 border-b border-cyan-500/30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <button
                  onClick={toggleTerminal}
                  className="text-cyan-400 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="p-4 h-full overflow-auto font-mono text-sm text-cyan-400">
                <pre className="whitespace-pre-wrap">{terminalText}</pre>
                <div className="flex items-center mt-2">
                  <span className="text-green-500 mr-2">$</span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Title with enhanced tech effect */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"></div>
          <div className="relative">
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-md opacity-20 animate-pulse"></div>
                <Code2 className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 mr-3 relative animate-float" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold relative group">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:via-cyan-400 group-hover:to-blue-500 group-hover:bg-[length:200%_auto] group-hover:animate-gradient-pulse transition-all duration-500">
                  Events
                </span>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"></div>
              </h1>
            </div>
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/20 to-blue-500/20 rounded-full blur"></div>
              <p className="relative text-white/70 text-lg font-mono">
                <span className="text-cyan-400">&lt;</span>
                Explore the exciting events at TECHMITI'25
                <span className="text-cyan-400">/&gt;</span>
                <span className="animate-blink">_</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Search Bar with enhanced tech effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl mx-auto mb-8"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/30 to-blue-500/30 rounded-full blur group-hover:blur-md transition-all duration-300"></div>
            <div className="relative flex items-center bg-black/30 backdrop-blur-md rounded-lg border border-cyan-500/20 p-2 group-hover:border-cyan-500/40 transition-all duration-300">
              <Search className="h-5 w-5 text-cyan-400 ml-2 group-hover:animate-pulse" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-white placeholder-gray-400 w-full px-3 py-1 font-mono"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <div className="w-1 h-1 bg-cyan-500 rounded-full animate-ping"></div>
                <div className="w-1 h-1 bg-blue-500 rounded-full animate-ping delay-75"></div>
                <div className="w-1 h-1 bg-purple-500 rounded-full animate-ping delay-150"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Navigation with enhanced tech effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 relative w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-xl"></div>

          {/* Full-width container with centered content */}
          <div className="w-full flex justify-center">
            {/* Mobile-friendly filter container */}
            <div className="w-full max-w-5xl px-1 sm:px-4 py-2 relative">
              {/* Mobile scrollable container */}
              <div className="overflow-x-auto pb-2 -mx-1 sm:mx-0 scrollbar-hide">
                <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-1 sm:gap-3 min-w-max px-1 sm:px-0">
                  <button
                    onClick={() => setCurrentCategory("all")}
                    className={`px-2 xs:px-3 sm:px-6 py-1 xs:py-2 sm:py-3 rounded-full backdrop-blur-sm border transition-all duration-300 flex items-center gap-1 sm:gap-2 group relative overflow-hidden whitespace-nowrap ${
                      currentCategory === "all"
                        ? "bg-gradient-to-r from-cyan-600 to-blue-500 border-cyan-500/50 text-white"
                        : "bg-black/30 border-cyan-500/20 text-gray-300 hover:bg-black/50"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        currentCategory === "all" ? "opacity-100" : ""
                      }`}
                    ></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative flex items-center gap-1 sm:gap-2">
                      <Terminal
                        className={`h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 ${
                          currentCategory === "all"
                            ? "animate-pulse"
                            : "group-hover:animate-pulse"
                        }`}
                      />
                      <span className="text-[10px] xs:text-xs sm:text-sm md:text-base font-mono">
                        All Events
                      </span>
                      {currentCategory === "all" && (
                        <div className="absolute -top-1 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-ping"></div>
                      )}
                    </div>
                  </button>
                  {categories.slice(1).map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setCurrentCategory(category.name)}
                      className={`px-2 xs:px-3 sm:px-6 py-1 xs:py-2 sm:py-3 rounded-full backdrop-blur-sm border transition-all duration-300 flex items-center gap-1 sm:gap-2 group relative overflow-hidden whitespace-nowrap ${
                        currentCategory === category.name
                          ? `bg-gradient-to-r ${category.gradient} border-cyan-500/50 text-white`
                          : "bg-black/30 border-cyan-500/20 text-gray-300 hover:bg-black/50"
                      }`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${category.gradient
                          .replace("from", "from-")
                          .replace("to", "to-")
                          .replace(
                            "500",
                            "500/20"
                          )} opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                          currentCategory === category.name ? "opacity-100" : ""
                        }`}
                      ></div>
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                      ></div>
                      <div className="relative flex items-center gap-1 sm:gap-2">
                        <span
                          className={`text-base xs:text-lg sm:text-xl ${
                            currentCategory === category.name
                              ? "animate-pulse"
                              : "group-hover:animate-pulse"
                          }`}
                        >
                          {category.icon}
                        </span>
                        <span className="text-[10px] xs:text-xs sm:text-sm md:text-base font-mono">
                          {category.name}
                        </span>
                        {currentCategory === category.name && (
                          <div className="absolute -top-1 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-ping"></div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements - hidden on mobile */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent hidden sm:block"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/4 h-px bg-gradient-to-l from-transparent via-cyan-500/30 to-transparent hidden sm:block"></div>

          {/* Mobile indicator - only visible on mobile */}
          <div className="sm:hidden flex justify-center mt-2">
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-cyan-500/50"></div>
              <div className="w-1 h-1 rounded-full bg-cyan-500/30"></div>
              <div className="w-1 h-1 rounded-full bg-cyan-500/20"></div>
            </div>
          </div>
        </motion.div>

        {/* Loading State */}
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mb-4"></div>
            <p className="text-cyan-400 font-mono">
              Loading events database...
            </p>
          </motion.div>
        ) : (
          <>
            {/* Events Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-black/30 backdrop-blur-md rounded-xl border border-cyan-500/10 overflow-hidden hover:border-cyan-500/30 transition-all duration-300 cursor-pointer group"
                  onClick={() => handleEventClick(event)}
                >
                  {/* Event Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300">
                      <span className="text-xl group-hover:animate-pulse">
                        {event.icon}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {event.name}
                      </h3>
                      <p className="text-cyan-400 text-sm group-hover:text-cyan-300 transition-colors duration-300">
                        {event.category}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Event Details */}
                  <div className="p-6 relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <p className="text-white/70 mb-4 line-clamp-2 group-hover:text-white/90 transition-colors duration-300">
                      {event.description}
                    </p>

                    <div className="space-y-2 mb-6 relative">
                      <div className="flex items-center gap-2 text-white/80 group-hover:text-white/90 transition-colors duration-300">
                        <Calendar
                          size={16}
                          className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                        />
                        <span>
                          {event.date} at {event.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80 group-hover:text-white/90 transition-colors duration-300">
                        <MapPin
                          size={16}
                          className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                        />
                        <span>{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80 group-hover:text-white/90 transition-colors duration-300">
                        <Users
                          size={16}
                          className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                        />
                        <span>
                          Team Size: {event.teamSize.min}-{event.teamSize.max} (
                          {event.teamSize.recommended} recommended)
                        </span>
                      </div>
                      {event.prize !== "N/A" && (
                        <div className="flex items-center gap-2 text-white/80 group-hover:text-white/90 transition-colors duration-300">
                          <Trophy
                            size={16}
                            className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                          />
                          <span>Prize: {event.prize}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-white/80 group-hover:text-white/90 transition-colors duration-300">
                        <IndianRupee
                          size={16}
                          className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                        />
                        <span>Registration: {event.registrationFee}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 relative">
                      <a
                        href={event.ruleBook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-black/50 hover:bg-black/70 text-white py-2 rounded-lg transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500/40 group-hover:border-cyan-500/30"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FileText
                          size={18}
                          className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                        />
                        <span>Rule Book</span>
                      </a>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/register/${event.id}`);
                        }}
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/20"
                      >
                        <ExternalLink
                          size={18}
                          className="group-hover:animate-pulse"
                        />
                        <span>Register</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results Message */}
            {filteredEvents.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg font-mono">
                  &gt; No events found matching your criteria.
                </p>
              </motion.div>
            )}
          </>
        )}
      </div>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
            onClick={handleCloseEvent}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black/90 backdrop-blur-md rounded-xl border border-cyan-500/20 max-w-4xl w-full overflow-hidden my-4 sm:my-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-40 xs:h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 sm:p-3 border border-cyan-500/20">
                  <span className="text-xl sm:text-2xl">
                    {selectedEvent.icon}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6">
                  <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                    {selectedEvent.name}
                  </h3>
                  <p className="text-cyan-400 text-sm sm:text-base">
                    {selectedEvent.category}
                  </p>
                </div>
              </div>

              <div className="p-3 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-6">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-cyan-500/10">
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-2 sm:mb-3 flex items-center">
                      <span className="font-mono mr-1 sm:mr-2">&lt;</span>
                      Event Details
                      <span className="font-mono ml-1 sm:ml-2">/&gt;</span>
                    </h4>
                    <div className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-white/80">
                        <Calendar
                          size={14}
                          className="text-cyan-400 sm:w-4 sm:h-4"
                        />
                        <span>
                          {selectedEvent.date} at {selectedEvent.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-white/80">
                        <MapPin
                          size={14}
                          className="text-cyan-400 sm:w-4 sm:h-4"
                        />
                        <span>{selectedEvent.venue}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-white/80">
                        <Users
                          size={14}
                          className="text-cyan-400 sm:w-4 sm:h-4"
                        />
                        <span>
                          Team Size: {selectedEvent.teamSize.min}-
                          {selectedEvent.teamSize.max} (
                          {selectedEvent.teamSize.recommended} recommended)
                        </span>
                      </div>
                      {selectedEvent.prize !== "N/A" && (
                        <div className="flex items-center gap-1.5 sm:gap-2 text-white/80">
                          <Trophy
                            size={14}
                            className="text-cyan-400 sm:w-4 sm:h-4"
                          />
                          <span>Prize: {selectedEvent.prize}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5 sm:gap-2 text-white/80">
                        <IndianRupee
                          size={14}
                          className="text-cyan-400 sm:w-4 sm:h-4"
                        />
                        <span>
                          Registration: {selectedEvent.registrationFee}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-cyan-500/10">
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-2 sm:mb-3 flex items-center">
                      <span className="font-mono mr-1 sm:mr-2">&lt;</span>
                      Description
                      <span className="font-mono ml-1 sm:ml-2">/&gt;</span>
                    </h4>
                    <p className="text-white/80 text-sm sm:text-base">
                      {selectedEvent.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col xs:flex-row justify-end gap-2 sm:gap-3">
                  <button
                    onClick={handleCloseEvent}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-black/50 backdrop-blur-sm border border-cyan-500/20 text-cyan-400 hover:bg-black/70 hover:border-cyan-500/40 transition-all duration-300 text-sm sm:text-base"
                  >
                    Close
                  </button>
                  <a
                    href={selectedEvent.ruleBook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-black/50 backdrop-blur-sm border border-cyan-500/20 text-cyan-400 hover:bg-black/70 hover:border-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base"
                  >
                    <FileText size={16} className="sm:w-5 sm:h-5" />
                    <span>Rule Book</span>
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/register/${selectedEvent.id}`);
                    }}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base"
                  >
                    <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                    <span>Register Now</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
