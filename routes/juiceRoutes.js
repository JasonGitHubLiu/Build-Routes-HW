const express = require('express');

const router = express.Router();

const juiceController = require('../controllers/juiceController');

router.get('/', juiceController.index);

router.get('/:index', juiceController.show);

module.exports = router;
