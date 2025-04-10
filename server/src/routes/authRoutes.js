const express = require("express");
const router = express.Router();
const { login, getUserProfile } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

// Login route
router.post("/login", login);

// Protected routes
router.get("/user/profile", protect, getUserProfile);

module.exports = router;
