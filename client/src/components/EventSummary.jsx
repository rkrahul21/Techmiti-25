import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const mockEventData = [
  {
    eventName: "Line Tracer",
    maxTeamSize: 4,
    totalParticipants: 12,
    registeredTeams: 3,
  },
  {
    eventName: "Circuitron",
    maxTeamSize: 2,
    totalParticipants: 4,
    registeredTeams: 2,
  },
  {
    eventName: "RoboRace",
    maxTeamSize: 3,
    totalParticipants: 3,
    registeredTeams: 1,
  },
  {
    eventName: "Dangal",
    maxTeamSize: 2,
    totalParticipants: 2,
    registeredTeams: 1,
  },
];

const EventSummary = () => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Event Summary</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {mockEventData.map((event, idx) => (
          <Card key={idx} className="shadow-sm">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold mb-2">{event.eventName}</h3>
              <p className="text-gray-700">Total Participants: {event.totalParticipants}</p>
              <p className="text-gray-700">Max Team Size: {event.maxTeamSize}</p>
              <p className="text-gray-700">Registered Teams: {event.registeredTeams}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default EventSummary;