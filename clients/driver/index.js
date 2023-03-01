'use strict';

const eventPool = require('../../eventPool');

eventPool.on('pickup', (payload) => {
  setTimeout(() => {
    console.log('in-transit');
    eventPool.emit('in-transit', payload);
  }, 1000);
  setTimeout(() => {
    console.log('delivered');
    eventPool.emit('delivered', payload);
  }, 3000);
});