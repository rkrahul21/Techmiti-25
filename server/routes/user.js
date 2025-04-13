const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const userController = require("../controller/user_controller");
const teamController = require("../controller/teamController");

router.post("/create", userController.create);
router.post("/login", userController.login);
router.post("/logout", auth, userController.logout);

// Team registration route - protected with auth middleware
router.post("/team/create", auth, teamController.createTeam);

module.exports = router;
