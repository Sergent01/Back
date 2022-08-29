const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controllers');
const addUserValidation = require('../middlewares/user.validator');

router.post('/users', addUserValidation, user.create);

router.post('/users/login', user.login);

module.exports = router;