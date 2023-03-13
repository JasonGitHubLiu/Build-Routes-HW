const express = require('express');

const router = express.Router();

const icecreamController = require('../controllers/icecreamController');

router.get('/', icecreamController.index);

router.get('/:index', icecreamController.show);

module.exports = router;
