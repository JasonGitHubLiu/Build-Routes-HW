const hotdog = require('../models/hotdog');

function index(req, res) {
  res.render('hotdog/Index', { hotdog });
}

function show(req, res) {
  res.render('hotdog/Show', { hotdog: hotdog[req.params.index] });
}

module.exports = { index, show };
