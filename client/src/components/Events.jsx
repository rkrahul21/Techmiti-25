import React, { useState, useEffect } from "react";
// Import events data
import eventsData from "../data/events";
import { motion } from "framer-motion";
import {
  FaBook,
  FaRegCalendarAlt,
  FaUsers,
  FaTrophy,
  FaRupeeSign,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(eventsData);

  // Categories for filter
  const categories = [
    "all",
    ...new Set(eventsData.map((event) => event.subcategory)),
  ];

  // Filter events based on category and search query
  useEffect(() => {
    let filtered = eventsData;
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (event) => event.subcategory === selectedCategory
      );
    }
    if (searchQuery) {
      filtered = filtered.filter(
        (event) =>
          event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredEvents(filtered);
  }, [selectedCategory, searchQuery]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          TECHMITI'25 Events
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore our diverse range of technical events and competitions
          designed to challenge your skills and creativity.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredEvents.map((event) => (
          <motion.div
            key={event.id}
            variants={itemVariants}
            className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
          >
            {/* Event Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                {event.difficulty}
              </div>
            </div>

            {/* Event Content */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{event.icon}</span>
                <h3 className="text-xl font-bold">{event.name}</h3>
              </div>

              <p className="text-gray-300 mb-4 line-clamp-3">
                {event.description}
              </p>

              {/* Event Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-300">
                  <FaUsers className="text-blue-500" />
                  <span>
                    {event.teamSize.min}-{event.teamSize.max} members
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <FaRegCalendarAlt className="text-blue-500" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <FaTrophy className="text-blue-500" />
                  <span>{event.prize}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <FaRupeeSign className="text-blue-500" />
                  <span>{event.registrationFee}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a
                  href={event.ruleBook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-700 text-white text-center py-2 rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
                >
                  <FaBook /> Rulebook
                </a>
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Register Now
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* No Results Message */}
      {filteredEvents.length === 0 && (
        <div className="text-center text-gray-300 mt-12">
          <p className="text-xl">No events found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Events;
