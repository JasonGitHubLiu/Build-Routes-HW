const express = require('express');

const router = express.Router();

const bobaController = require('../controllers/bobaController.js');

router.get('/', bobaController.index);

router.get('/:index', bobaController.show)

module.exports = router;