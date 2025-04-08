// src/components/ParticipantTable.jsx
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Mock event details lookup (can be later replaced with API or context)
const eventDetails = {
  "Line Tracer": {
    date: "2025-04-21",
    time: "10:00 AM",
    venue: "Auditorium A",
  },
  Circuitron: {
    date: "2025-04-22",
    time: "2:00 PM",
    venue: "Lab 1",
  },
  RoboRace: {
    date: "2025-04-23",
    time: "12:00 PM",
    venue: "Track Arena",
  },
  Dangal: {
    date: "2025-04-24",
    time: "11:00 AM",
    venue: "Seminar Hall",
  },
};

const mockParticipants = {
  "Line Tracer": [
    { id: 1, name: "Ravi Sharma", email: "ravi@hack.com", techmiti_id: "TM001", college: "MIT" },
    { id: 2, name: "Simran Kaur", email: "simran@hack.com", techmiti_id: "TM002", college: "MIT" },
  ],
  Circuitron: [
    { id: 3, name: "Aman Raj", email: "aman@code.com", techmiti_id: "TM003", college: "GCE" },
  ],
  RoboRace: [
    { id: 4, name: "Pooja Sinha", email: "pooja@robo.com", techmiti_id: "TM004", college: "DCE" },
  ],
  Dangal: [
    { id: 5, name: "Vikram Singh", email: "vikram@quiz.com", techmiti_id: "TM005", college: "MIT" },
  ],
};

const ParticipantTable = ({ event }) => {
  const participants = mockParticipants[event.name] || [];
  const details = eventDetails[event.name] || {};

  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Participants for {event.name}</h2>
        <p className="text-sm text-gray-600">
          {details.date} at {details.time} • {details.venue}
        </p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Techmiti ID</TableHead>
            <TableHead>College</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {participants.map((p) => (
            <TableRow key={p.id}>
              <TableCell>{p.id}</TableCell>
              <TableCell>{p.name}</TableCell>
              <TableCell>{p.email}</TableCell>
              <TableCell>{p.techmiti_id}</TableCell>
              <TableCell>{p.college}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ParticipantTable;
