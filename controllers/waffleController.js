const waffle = require('../models/waffle');

function index(req, res) {
  res.render('waffle/Index', { waffle });
}

function show(req, res) {
  res.render('waffle/Show', { waffle: waffle[req.params.index] });
}

module.exports = { index, show };
