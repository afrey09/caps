'use strict';

// As a vendor, I want to alert the system when I have a package to be picked up.
// As a vendor, I want to be notified when my package has been delivered.

// const Chance = require('chance');
// const chance = new Chance();
const { io } = require('socket.io-client');
//const eventPool = require('../../eventPool');
const { createPackage, thankDriver } = require('./handler');

const socket = io.connect('http://localhost:3000/caps');

//eventPool.on('delivery', confirmDelivery);

socket.on('delivered', (payload) => {
 thankDriver(payload);
});


setInterval(() => {
  createPackage(socket);
}, 5000);


//responds by logging a message to the console:
// function confirmDelivery() {
//   setTimeout(() => {
//     thankDriver();
//   }, 1000);
// }

//gets event cycle started

