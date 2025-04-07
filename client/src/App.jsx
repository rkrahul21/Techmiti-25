import React from "react";
// hlh
function App() {
  const events = [
    "RoboRace",
    "Dangal",
    "Quiz",
    "Codingo",
    "Hackathon",
    "TechnoTalks",
    "Workshops",
    "Treasure Hunt",
    "Gaming",
    "Web Development",
    "App Development",
    "AI/ML",
  ];
  return (
    <>
      <div className="bg-blue-900 text-white flex flex-col items-center justify-center h-screen">
        <h1>TECHMIT'25</h1>
        <h3>Coming Soon adil</h3>
      </div>

      <div>
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-blue-900 text-white flex flex-col items-center justify-center "
          >
            <h1 className="bg-yellow-500 m-2 p-2 rounded-md shadow-lg">
              {event}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
