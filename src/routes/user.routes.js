const express = require('express');
const router = express.Router();
const user = require('../controllers/user.controllers');

const addUserValidation = require('../middlewares/user.validator');
const verifyToken = require("../middlewares/verifyToken")

router.post('/users', addUserValidation, user.create);

router.post('/users/login', user.login);
router.get('/verifytoken',verifyToken, user.verifyToken);

module.exports = router;