const express = require('express');
const router = express.Router();

const translateController = require('../controllers/translateController');

router.post('/translate', translateController.translate);
module.exports = router;
