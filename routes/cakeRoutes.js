const express = require('express');

const router = express.Router();

const cakeController = require('../controllers/cakeController.js');

router.get('/', cakeController.index);

router.get('/:index', cakeController.show)

module.exports = router;