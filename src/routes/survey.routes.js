const express = require('express');
const router = express.Router();

const verifyToken = require('../middlewares/verifyToken')
const survey = require('../controllers/survey.controllers');

router.post('/survey', survey.createSurvey);

router.get('/survey/delete', verifyToken, survey.deleteSurvey);

module.exports = router;