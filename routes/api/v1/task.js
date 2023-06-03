const express = require('express');
const router = express.Router();
const passport = require('passport');
const taskController = require('../../../controlers/api/v1/taskController');

router.post('/create', passport.authenticate('jwt', {session: false}), taskController.create);
router.put('/update/:id', passport.authenticate('jwt', {session: false}), taskController.update);
router.get('/:id', passport.authenticate('jwt', {session: false}), taskController.task);
router.delete('/delete/:id', passport.authenticate('jwt', {session: false}), taskController.delete);

module.exports = router;