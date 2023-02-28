'use strict';

const eventPool = require('../eventPool');
var Chance = require('chance');
var chance = new Chance();


setInterval(() => {

  const payload = {
    store:store,
    orderID:chance.guid(),
    customer:chance.name(),
    address:chance.address(),
  };
  eventPool.emit('pickup', payload);
}, 5000);

eventPool.on('delivered', (payload) => console.log('has been delievered'))
