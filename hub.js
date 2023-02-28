'use strict';

let eventPool = require('./eventPool.js');
var Chance = require('chance');
var chance = new Chance();

//handlers
const driverHandler = require('./driver/index');
const vendorHandler = require('./vendor/index');


//listens to all events
eventPool.on('pickup', driverHandler);
eventPool.on('in-transit', driverHandler);
eventPool.on('delivered', driverHandler);
eventPool.on('pick-up', vendorHandler);
eventPool.on('delivered', vendorHandler);

setInterval(() => {
  console.log('--------new interval begins-------');
});

const start = () => {
  setInterval(() => {
    let store = chance.company();
    eventPool.emit('VENDOR', store);
  }, 1000);
};

start();