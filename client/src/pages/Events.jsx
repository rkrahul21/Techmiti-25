import React from "react";
import EventCard from "../components/EventCard";
import { allEvents } from "../constant/events";

export const Events = () => {
  return (
    <section className="py-12 min-h-screen bg-gradient-to-b from-[#0f0c29] to-[#302b63]">
      <div className="max-w-screen-xl mx-auto px-">
        <h2 className="text-5xl  text-white font-bold mb-9 text-center relative group ]"
          style={{ fontFamily: '"Luxurious Roman", serif', fontWeight: 1500, fontStyle: 'normal', }}>ALL EVENTS
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r to-blue-500  from-purple-600 transition-all duration-300 group-hover:w-full"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
          {allEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Events;
