const icecream = require('../models/icecream');

function index(req, res) {
  res.render('icecream/Index', { icecream });
}

function show(req, res) {
  res.render('icecream/Show', { icecream: icecream[req.params.index] });
}

module.exports = { index, show };
