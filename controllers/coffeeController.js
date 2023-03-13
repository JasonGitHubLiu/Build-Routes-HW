const coffee = require('../models/coffee');

function index(req, res) {
  res.render('coffee/Index', { coffee });
}

function show(req, res) {
  res.render('coffee/Show', { coffee: coffee[req.params.index] });
}

module.exports = { index, show };
