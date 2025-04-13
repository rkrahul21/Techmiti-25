const Team = require("../models/teams");
const User = require("../models/user");

exports.createTeam = async (req, res) => {
  try {
    const { team_name, team_leader_id, member_ids, event_id, event_name } =
      req.body;

    // Validate required fields
    if (!team_name || !team_leader_id || !event_id || !event_name) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Verify team leader exists and has payment verified
    const teamLeader = await User.findOne({ techmitiId: team_leader_id });
    if (!teamLeader) {
      return res.status(404).json({ error: "Team leader not found" });
    }

    if (!teamLeader.isPaymentVerified) {
      return res.status(403).json({
        error:
          "Team leader's payment is not verified. Please complete payment verification first.",
      });
    }

    // Verify that the authenticated user is the team leader
    if (req.user._id.toString() !== teamLeader._id.toString()) {
      return res
        .status(403)
        .json({ error: "You can only create teams where you are the leader" });
    }

    // Verify members exist and have payment verified
    const members = [];
    const memberErrors = [];

    // First validate all member IDs
    if (member_ids && member_ids.length > 0) {
      for (const memberId of member_ids) {
        // Skip empty member IDs
        if (!memberId.trim()) continue;

        const member = await User.findOne({ techmitiId: memberId.trim() });

        if (!member) {
          memberErrors.push(`Member ${memberId} not found`);
          continue;
        }

        if (!member.isPaymentVerified) {
          memberErrors.push(`Member ${memberId}'s payment is not verified`);
          continue;
        }

        // Check if member is trying to register themselves
        if (member._id.toString() === teamLeader._id.toString()) {
          memberErrors.push(`Team leader cannot be added as a team member`);
          continue;
        }

        members.push(member._id);
      }
    }

    // If there are any validation errors, return them all at once
    if (memberErrors.length > 0) {
      return res.status(400).json({
        error: "Team member validation failed",
        details: memberErrors,
      });
    }

    // Check if team already exists for this event
    const existingTeam = await Team.findOne({
      $or: [
        { team_member: teamLeader._id, event_id },
        { team_member: { $in: members }, event_id },
      ],
    });

    if (existingTeam) {
      return res.status(400).json({
        error:
          "You or one of your team members is already registered for this event",
      });
    }

    // Create the team
    const newTeam = new Team({
      team_name,
      team_member: [teamLeader._id, ...members],
      event_id,
      event_name,
    });

    const savedTeam = await newTeam.save();

    // Update users with team reference
    await User.updateMany(
      { _id: { $in: [teamLeader._id, ...members] } },
      { $push: { teams: savedTeam._id } }
    );

    res.status(201).json({
      success: true,
      team: savedTeam,
    });
  } catch (error) {
    console.error("Error creating team:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
