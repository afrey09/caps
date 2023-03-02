'use strict';

// As a vendor, I want to alert the system when I have a package to be picked up.
// As a vendor, I want to be notified when my package has been delivered.

const { io } = require('socket.io-client');
const { createPackage, thankDriver } = require('./handler');
const socket = io.connect('http://localhost:3001/caps');


socket.on('delivered', (payload) => {
  thankDriver(payload);
});


setInterval(() => {
  createPackage(socket);
}, 5000);
