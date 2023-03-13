// load express
const express = require('express');

//  Create our express app
const app = express();

const PORT = 8083;

const homeRoutes = require('./routes/homeRoutes');
const icecreamRoutes = require('./routes/icecreamRoutes');
const waffleRoutes = require('./routes/waffleRoutes');
const hotdogRoutes = require('./routes/hotdogRoutes');
const coffeeRoutes = require('./routes/coffeeRoutes');
const consumablesRoutes = require('./routes/consumablesRoutes');
const juiceRoutes = require('./routes/juiceRoutes');
const sushiRoutes = require('./routes/sushiRoutes');
const bobaRoutes = require('./routes/bobaRoutes');
const cakeRoutes = require('./routes/cakeRoutes');

const { createEngine } = require('jsx-view-engine');

app.set('view engine', 'jsx');
app.engine('jsx', createEngine());

app.use('/', homeRoutes);
app.use('/icecream', icecreamRoutes);
app.use('/waffle', waffleRoutes);
app.use('/hotdog', hotdogRoutes);
app.use('/coffee', coffeeRoutes);
app.use('/consumables', consumablesRoutes);
app.use('/juice', juiceRoutes);
app.use('/sushi', sushiRoutes);
app.use('/boba', bobaRoutes);
app.use('/cake', cakeRoutes);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
