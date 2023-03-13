const sushi = require('../models/sushi');

function index(req, res) {
  res.render('sushi/Index', { sushi });
}

function show(req, res) {
  res.render('sushi/Show', { sushi: sushi[req.params.index] });
}

module.exports = { index, show };
