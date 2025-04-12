const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const userController = require("../controller/user_controller");

router.post("/create", userController.create);
router.post("/login", userController.login);
router.post("/logout", auth, userController.logout);

module.exports = router;
