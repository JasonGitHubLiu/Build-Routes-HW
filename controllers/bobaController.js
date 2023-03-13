const boba = require('../models/boba');

function index(req, res) {
  res.render('boba/Index', { boba });
}

function show(req, res) {
  res.render('boba/Show', { boba: boba[req.params.index] });
}

module.exports = { index, show };
