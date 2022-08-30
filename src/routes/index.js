const express = require('express');
const router = express.Router();

const userRouter = require('./user.routes');
const surveyRouter = require('./survey.routes')

router.use(userRouter);
router.use(surveyRouter)

module.exports = router;