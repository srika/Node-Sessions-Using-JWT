var express = require('express');
var router = express.Router();
var verifyToken = require('../middleware/verifytoken');

router.use('/user', require('./user'));
router.use('/protected',verifyToken, require('./protected'));

module.exports = router;