const express = require('express');
const router = express.Router();

const userController = require('../controller/user_controller');
const utils = require('../utils');

// router.get( '/profile',  utils.isAuth,   userController.profile );
router.post('/create', userController.create);
// router.get('/check-email', userController.checkEmail);
// router.post('/check-phone', userController.checkPhone);

// router.post('/create-session', userController.createSession);

// router.post('/register',  userController.registerEvent);



module.exports = router;
