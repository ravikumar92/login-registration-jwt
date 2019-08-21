const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlrest = require('../controllers/forgetPassword.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post('/forgetpassword',ctrlrest.reset)

module.exports = router;



