const express = require('express');

const router = express.Router();

const sushiController = require('../controllers/sushiController');

router.get('/', sushiController.index);

router.get('/:index', sushiController.show);

module.exports = router;
