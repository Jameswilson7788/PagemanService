const express = require('express');
const router = express.Router();
const _ = require('lodash');
const User = require('../models/user');
const userController = require('../controllers/user')
/* GET users listing. */

router.post('/signup', userController.signup);

router.post('/login',[userController.login]);


module.exports = router;