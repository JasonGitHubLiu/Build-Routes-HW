const express = require('express');

const router = express.Router();

const waffleController = require('../controllers/waffleController');

router.get('/', waffleController.index);

router.get('/:index', waffleController.show);

module.exports = router;
