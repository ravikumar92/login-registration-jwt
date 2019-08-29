const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlrest = require('../controllers/forgetPassword.controller');
const ctrlStates = require('../controllers/states.controller');
const ctrlDistrict = require('../controllers/disctrict.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post('/forgetpassword',ctrlrest.reset);
router.get('/states',ctrlStates.states);
router.post('/district',ctrlDistrict.district);

module.exports = router;



