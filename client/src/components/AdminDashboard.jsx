// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import UserTable from "./UserTable";
// import ParticipantTable from "./ParticipantTable";
// // import EventList from "./EventList";
// import EventSummary from "./EventSummary";

// const AdminDashboard = () => {
//   const [view, setView] = useState("none");
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   return (
//     <div className="min-h-screen flex">
//       <aside className="w-64 bg-white shadow-md p-4 hidden md:block">
//         <h2 className="text-xl font-bold mb-4">Events</h2>
//         <EventList
//           onSelectEvent={(event) => {
//             setSelectedEvent(event);
//             setView("participants");
//           }}
//         />
//       </aside>

//       <main className="flex-1 p-6 bg-gray-100">
//         <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6">
//           <div className="flex flex-col md:flex-row justify-between mb-6">
//             <h1 className="text-2xl font-bold mb-4 md:mb-0">Admin Panel</h1>
//             <div className="flex gap-4 flex-wrap">
//               <Button onClick={() => setView("users")}>Registered Users</Button>
//               <Button onClick={() => setView("summary")}>Event Summary</Button>
//               <Button  onClick={() => setView("none")}>Dashboard</Button>
//             </div>
//           </div>

//           {view === "users" && <UserTable />}
//           {view === "participants" && selectedEvent && (
//             <ParticipantTable event={selectedEvent} />
//           )}
//           {view === "summary" && <EventSummary />}
//           {view === "none" && <p className="text-gray-500">Select a section to view</p>}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;