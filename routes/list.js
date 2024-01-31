const express = require('express');
const router = express.Router();
const list = require('../controller/listcontroller');

router.use('/', list);


module.exports = router;