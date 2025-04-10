const express = require("express");
const router = express.Router();
const { registerEvent } = require("../controllers/eventController");
const { protect } = require("../middleware/authMiddleware");

// Event registration route (protected)
router.post("/register-event/:techmitiId", protect, registerEvent);

module.exports = router;
