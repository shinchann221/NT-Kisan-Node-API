const express = require('express');
var router = express.Router();

//Auth
var auth = require('../middleware/client-auth');

//Routers
const user = require('./user');
const entry =require('./entry');


//Authentication
router.use(auth);

//Routess
router.use('/user',user);
router.use('/entry', entry);

module.exports = router;
