const { consumables, allConsumables } = require('../models/consumables');
function index(req, res) {
  res.render('consumables/Index', { consumables: allConsumables });
}

function show(req, res) {
  res.render('consumables/Show', {
    consumables: allConsumables[req.params.index],
  });
}

module.exports = { index, show };
