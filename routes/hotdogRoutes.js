const express = require('express');

const router = express.Router();

const hotdogController = require('../controllers/hotdogController.js');

router.get('/', hotdogController.index);

router.get('/:index', hotdogController.show);

module.exports = router;
