const express = require('express');

const router = express.Router();

const coffeeController = require('../controllers/coffeeController.js');

router.get('/', coffeeController.index);

router.get('/:index', coffeeController.show)

module.exports = router;