'use strict';

const eventPool = require('../../eventPool');
var Chance = require('chance');
var chance = new Chance();
const { createPackage, thankDriver } = require('./handler');

eventPool.on('delivery', confirmDelivery);

//responds by logging a message to the console:
function confirmDelivery() {
  setTimeout(() => {
    thankDriver();
  }, 1000);
}

//gets event cycle started

setInterval(() => {
  createPackage();
}, 5000);
