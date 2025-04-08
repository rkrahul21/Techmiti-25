// src/components/EventList.jsx
import React from "react";
import { Button } from "@/components/ui/button";

const events = [
  { name: "Line Tracer" },
  { name: "Circuitron" },
  { name: "RoboRace" },
  { name: "Dangal" },
];

const EventList = ({ onSelectEvent }) => {
  return (
    <div className="space-y-2">
      {events.map((event, idx) => (
        <Button
          key={idx}
          variant="default"
          className="w-full text-left"
          onClick={() => onSelectEvent(event)}
        >
          {event.name}
        </Button>
      ))}
    </div>
  );
};

export default EventList;
