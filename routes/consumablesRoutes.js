const express = require('express');

const router = express.Router();

const consumablesController = require('../controllers/consumablesController');

router.get('/', consumablesController.index);

router.get('/:index', consumablesController.show);

module.exports = router;
