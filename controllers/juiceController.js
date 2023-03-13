const juice = require('../models/juice');

function index(req, res) {
  res.render('juice/Index', { juice });
}

function show(req, res) {
  res.render('juice/Show', { juice: juice[req.params.index] });
}

module.exports = { index, show };
