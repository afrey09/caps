'use strict';

let eventPool = require('./eventPool.js');

//handlers
const driverHandler = require('./driver/index');
const vendorHandler = require('./vendor/index');


//listeners for all events
eventPool.on('pickup', (payload) => logger('pickup', payload));
eventPool.on('in-transit', (payload) => logger('in-transit', payload));
eventPool.on('delivered', (payload) => logger('delivered', payload));
// eventPool.on('pick-up', vendorHandler);
// eventPool.on('delivered', vendorHandler);

function logger(event, payload) {
  const timeStamp= new Date();

  console.log(`EVENT`, {event, timeStamp, payload});
}
