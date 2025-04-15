import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import events from "../constant/events";
import { useAuth } from "../context/AuthContext";
import { url } from "@/utils";


const RegistrationForm = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();
  const [event, setEvent] = useState(null);
  const [formData, setFormData] = useState({
    teamName: "",
    teamLeaderId: "",
    memberIds: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [memberErrors, setMemberErrors] = useState({});
  const [paymentError, setPaymentError] = useState(null);

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    // Check if user's payment is verified
    if (!user?.isPaymentVerified) {
      setPaymentError(
        "Your payment is not verified. Please complete payment verification before registering for events."
      );
      return;
    }

    const foundEvent = events.find((e) => e.id === eventId);
    setEvent(foundEvent);
    // Initialize memberIds array based on max team size minus 1 (for leader)
    if (foundEvent) {
      const initialMembers = Array(
        Math.max(0, foundEvent.teamSize.max - 1)
      ).fill("");
      setFormData((prev) => ({
        ...prev,
        memberIds: initialMembers,
        // Pre-fill team leader ID with the logged-in user's TechMITi ID
        teamLeaderId: user?.techmitiId || "",
      }));
    }
  }, [eventId, isAuthenticated, navigate, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMemberChange = (index, value) => {
    const newMembers = [...formData.memberIds];
    newMembers[index] = value;
    setFormData((prev) => ({ ...prev, memberIds: newMembers }));
    // Clear error for this member when they change the input
    setMemberErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[index];
      return newErrors;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setMemberErrors({});

    try {
      // Filter out empty member IDs
      const nonEmptyMembers = formData.memberIds.filter(
        (id) => id.trim() !== ""
      );

      const response = await axios.post(
       ` ${url}/user/team/create`,
        {
          team_name: formData.teamName,
          team_leader_id: formData.teamLeaderId,
          member_ids: nonEmptyMembers,
          event_id: event.id,
          event_name: event.name,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.success) {
        navigate(`/registration-success/${event.id}`);
      }
    } catch (err) {
      const errorData = err.response?.data;

      if (errorData?.details) {
        // Handle member-specific errors
        const newMemberErrors = {};
        errorData.details.forEach((error) => {
          const memberId = error.match(/Member (TM\d+)/)?.[1];
          if (memberId) {
            const index = formData.memberIds.findIndex((id) => id === memberId);
            if (index !== -1) {
              newMemberErrors[index] = error;
            }
          }
        });
        setMemberErrors(newMemberErrors);
        setError("Please wait for the payment verification to complete.");
      } else {
        const errorMessage =
          errorData?.error || "Registration failed. Please try again.";
        setError(errorMessage);

        // Check if the error is related to payment verification
        if (
          errorMessage.includes("payment") &&
          errorMessage.includes("verified")
        ) {
          setPaymentError(errorMessage);
        }
      }

      console.error("Registration error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // If not authenticated, don't render the form
  if (!isAuthenticated) {
    return null;
  }

  // If payment is not verified, show payment error message
  if (paymentError) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-6">
        <div className="max-w-md mx-auto bg-black/30 backdrop-blur-md rounded-xl border border-red-500/20 p-6">
          <h1 className="text-2xl font-bold mb-4 text-red-400">
            Payment Verification Required
          </h1>
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300">
            {paymentError}
          </div>
          <button
            onClick={() => navigate("/login")}
            className="w-full px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 rounded-lg text-white font-medium hover:from-red-600 hover:to-red-700 transition-all"
          >
            Go to Profile
          </button>
        </div>
      </div>
    );
  }

  if (!event)
    return (
      <div className="text-center py-12 text-cyan-400">
        Loading event details...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-6">
      <div className="max-w-md mx-auto bg-black/30 backdrop-blur-md rounded-xl border border-cyan-500/20 p-6">
        <h1 className="text-2xl font-bold mb-4 text-cyan-400">
          Register for: {event.name}
        </h1>

        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Team Name */}
          <div>
            <label className="block text-cyan-300 mb-1">Team Name*</label>
            <input
              type="text"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              className="w-full bg-black/50 border border-cyan-500/30 rounded-lg p-2 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              required
            />
          </div>

          {/* Team Leader */}
          <div>
            <label className="block text-cyan-300 mb-1">
              TechMITi'25 ID of Team Leader*
            </label>
            <input
              type="text"
              name="teamLeaderId"
              value={formData.teamLeaderId}
              onChange={handleChange}
              className="w-full bg-black/50 border border-cyan-500/30 rounded-lg p-2 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              required
              readOnly={!!user?.techmitiId}
            />
          </div>

          {/* Team Members - only show if team size > 1 */}
          {event.teamSize.max > 1 && (
            <div className="space-y-3">
              {formData.memberIds.map((memberId, index) => (
                <div key={index}>
                  <label className="block text-cyan-300 mb-1">
                    TechMITi'25 ID of Member {index + 1}
                    {index < event.teamSize.min - 1 ? "*" : ""}
                  </label>
                  <input
                    type="text"
                    value={memberId}
                    onChange={(e) => handleMemberChange(index, e.target.value)}
                    className={`w-full bg-black/50 border ${
                      memberErrors[index]
                        ? "border-red-500/50 focus:border-red-500 focus:ring-red-500"
                        : "border-cyan-500/30 focus:border-cyan-500 focus:ring-cyan-500"
                    } rounded-lg p-2 text-white focus:ring-1`}
                    required={index < event.teamSize.min - 1}
                  />
                  {memberErrors[index] ? (
                    <p className="text-xs text-red-400 mt-1">
                      {memberErrors[index]}
                    </p>
                  ) : (
                    <p className="text-xs text-cyan-300/70 mt-1">
                      Note: All team members must have verified payments
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full mt-6 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-600 transition-all ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Registering...
              </span>
            ) : (
              "Submit Registration"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
