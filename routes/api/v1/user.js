const express = require('express');
const router = express.Router();
const userController = require('../../../controlers/api/v1/userController');
// const { register } = require('../../../controlers/api/v1/userController');

router.post('/sign-up', userController.register);
router.get('/sign-in', userController.login);

module.exports = router;