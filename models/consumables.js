const coffee = require('../models/coffee');
const sushi = require('../models/sushi');
const hotdog = require('../models/hotdog');
const icecream = require('../models/icecream');
const waffle = require('../models/waffle');
const juice = require('../models/juice');
const boba = require('../models/boba');
const cake = require('../models/cake');

const allConsumables = [
  ...boba,
  ...coffee,
  ...juice,
  ...sushi,
  ...hotdog,
  ...waffle,
  ...cake,
  ...icecream,
];

const consumables = {
  boba: [...boba],
  coffee: [...coffee],
  juice: [...juice],
  sushi: [...sushi],
  hotdog: [...hotdog],
  waffle: [...waffle],
  cake: [...cake],
  icecream: [...icecream],
};

module.exports = { consumables, allConsumables };
