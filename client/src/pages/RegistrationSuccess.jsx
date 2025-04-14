import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import events from "../data/events";
import { CheckCircle } from "lucide-react";

const RegistrationSuccess = () => {
  const { eventId } = useParams();
  const event = events.find((e) => e.id === eventId);

  // Clear form data from localStorage if it exists
  useEffect(() => {
    localStorage.removeItem(`teamForm-${eventId}`);
  }, [eventId]);

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-cyan-400 mb-4">
            Event not found
          </h1>
          <Link to="/events" className="text-blue-400 hover:underline">
            Back to events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-black/30 backdrop-blur-md rounded-xl border border-green-500/20 p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500 animate-bounce" />
        </div>

        <h1 className="text-3xl font-bold text-green-400 mb-4">
          Registration Successful!
        </h1>

        <h2 className="text-xl text-cyan-300 mb-2">{event.name}</h2>

        <div className="space-y-4 my-6 text-left bg-black/20 p-4 rounded-lg border border-cyan-500/10">
          <div className="flex items-center gap-3">
            <svg
              className="h-5 w-5 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Your team has been successfully registered</span>
          </div>

          {/* <div className="flex items-center gap-3">
            <svg
              className="h-5 w-5 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Event details have been sent to your email</span>
          </div> */}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to={`/event`}
            className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white hover:from-cyan-600 hover:to-blue-600 transition-all"
          >
            Back to Events
          </Link>
        </div>

        <p className="text-sm text-gray-400 mt-8">
          Need help? Contact us at{" "}
          <span className="text-cyan-400">moxiemit@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
