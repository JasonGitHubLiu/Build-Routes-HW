const cake = require('../models/cake');

function index(req, res) {
  res.render('cake/Index', { cake });
}

function show(req, res) {
  res.render('cake/Show', { cake: cake[req.params.index] });
}

module.exports = { index, show };
