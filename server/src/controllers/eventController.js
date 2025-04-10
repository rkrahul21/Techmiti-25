const Registration = require("../models/Registration");

const registerEvent = async (req, res) => {
  try {
    const { techmitiId } = req.params;
    const { eventId, eventName, teamName, leader, members } = req.body;

    // Validate required fields
    if (!eventId || !eventName || !teamName || !leader) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // Find the user by techmitiId
    const user = await Registration.findOne({ techmitiId });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Validate leader's techmitiId exists
    const leaderUser = await Registration.findOne({
      techmitiId: leader.techmitiId,
    });
    if (!leaderUser) {
      return res.status(400).json({
        success: false,
        message: "Leader's TechMITi ID not found",
      });
    }

    // Validate all members' techmitiIds exist
    if (members && members.length > 0) {
      const memberIds = members.map((member) => member.techmitiId);
      const foundMembers = await Registration.find({
        techmitiId: { $in: memberIds },
      });

      if (foundMembers.length !== memberIds.length) {
        return res.status(400).json({
          success: false,
          message: "One or more member TechMITi IDs not found",
        });
      }
    }

    // Check if user is already registered for this event
    const existingTeam = user.teams.find((team) => team.eventId === eventId);
    if (existingTeam) {
      return res.status(400).json({
        success: false,
        message: "You are already registered for this event",
      });
    }

    // Create new team registration
    const newTeam = {
      eventId,
      eventName,
      teamName,
      leader,
      members: members || [],
      submittedBy: techmitiId,
    };

    // Add team to user's teams array
    user.teams.push(newTeam);
    await user.save();

    res.status(201).json({
      success: true,
      message: "Event registration successful",
      data: newTeam,
    });
  } catch (error) {
    console.error("Event registration error:", error);
    res.status(500).json({
      success: false,
      message: "Error during event registration",
      error: error.message,
    });
  }
};

module.exports = {
  registerEvent,
};
