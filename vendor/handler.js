'use strict';
//vendor

const eventPool = require('../eventPool');
let Chance = require('chance');
let chance = new Chance();

// listens for delivered event
eventPool.on('Delivery', confirmDelivery);

function createPackage(payload=null) {
  if(!payload) {
  let payload = {
    store: '1-206-flowers',
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };
}
//not required but helpful for debugging
  console.log('vendor: we have an order ready');
  eventPool.emit('pickup', payload);
}

function thankDriver() {

  console.log('thank you for ordering');
}


module.exports = {
createPackage,
confirmDelivery,
thankDriver,
};

