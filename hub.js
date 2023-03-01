'use strict';

let eventPool = require('./eventPool.js');
require('./vendor');
require('./driver');
var Chance = require('chance');
var chance = new Chance();


//listeners for all events
eventPool.on('pickup', (payload) => logger('pickup', payload));
eventPool.on('in-transit', (payload) => logger('in-transit', payload));
eventPool.on('delivered', (payload) => logger('delivered', payload));

function logger(event, payload) {
  const timeStamp= new Date();

  console.log(`EVENT`, {event, timeStamp, payload});
}
