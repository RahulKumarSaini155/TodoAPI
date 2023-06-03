const express = require('express');
const router = express.Router();
const user = require('./api/v1/user');
const task = require('./api/v1/task');

router.use('/users', user);
router.use('/tasks', task);

module.exports = router;