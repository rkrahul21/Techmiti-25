// src/components/EventCard.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
const EventCard = ({ event }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-70 h-70 shadow-[0_4px_30px_rgba(0,255,255,0.5)] overflow-hidden rounded-2xl cursor-pointer group transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl  border-gradient-to-r from-blue-400 to-purple-500 "
        onClick={() => navigate(`/events/detail?id=${event.id}`)}
      >
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full shadow-[0_4px_30px_rgba(0,255,255,0.5)] object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <h3
        className="text-center mt-5 text-2xl font-bold  cursor-pointer text-white bg-gradient-to-r to-blue-500  from-purple-600 px-4 py-1 rounded-full shadow-md backdrop-blur-md"
        onClick={() => navigate(`/events/detail?id=${event.id}`)}
      >
        {event.name}
      </h3>
    </div>
  );
};

export default EventCard;
