'use strict';

// As a driver, I want to be notified when there is a package to be delivered.
// As a driver, I want to alert the system when I have picked up a package and it is in transit.
// As a driver, I want to alert the system when a package has been delivered.

const { io } = require('socket.io-client');
const socket = io.connect('http://localhost:3001/caps');


socket.on('pickup', (payload) => {
  
  setTimeout(() => {
   
    console.log('driver: package picked up');
    socket.emit('in-transit', payload);
  }, 1000);
  
  setTimeout(() => {
    const order = {
      queueType: 'driver',
      payload,
    };

    console.log('driver:package delivered');
    socket.emit('delivered', order);
  }, 2000);
});
