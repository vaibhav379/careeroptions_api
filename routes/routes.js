const express = require('express');
const router = express.Router();
const career  = require('./career');


router.use('/career',career);

module.exports = router;