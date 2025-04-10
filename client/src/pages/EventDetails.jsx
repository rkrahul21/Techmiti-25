import React from "react";
//import { useParams } from "react-router-dom";
import { allEvents } from "../constant/events";
import { useSearchParams } from "react-router-dom";

const EventDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const event = allEvents.find((e) => e.id === parseInt(id));

  if (!event) return <div className="text-white text-center mt-10">Event not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] to-[#302b63] px-2 py-6 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10">
      <div className="md:w-[50%] w-full py-6">
      <img
        src={event.image}
        alt={event.name}
        className="w-full  md:w-[80%] object-contain rounded-xl shadow-[0_4px_30px_rgba(0,255,255,0.5)] "
      />
    </div>
    <div className="md:w-[50%] w-full flex flex-col justify-start space-y-4 px-5 py-8">
      <h1 className="text-5xl text-center font-extrabold text-cyan-500 shadow-[0_4px_2px_rgba(0,255,255,0.5)]" style={{ fontFamily: 'poppins' }}>
        {event.name}
      </h1>
      <p className=" leading-relaxed text-center text-2xl py-6" style={{fontFamily:'poppins'}}>{event.description}</p>

      <div className="flex gap-4 mt-6 mx-auto">
        <a
          href="/rulebook.pdf"
          target="_blank"
          className="bg-gradient-to-r to-blue-500  from-purple-600 hover:bg-pink-600 text-white text-2xl mx-4 px-8 py-3 rounded-xl transition-all duration-300 shadow-md"
        >
          Rulebook
        </a>
        <a
          href="https://forms.gle/example"
          target="_blank"
          className="bg-gradient-to-r to-blue-500  from-purple-600 hover:bg-fuchsia-300 text-white text-2xl mx-4 px-8 py-3 rounded-xl transition-all duration-300 shadow-md"
        >
          Register
        </a>
      </div>
    </div>
      </div>
    </div>
  );
};
export default EventDetail;
