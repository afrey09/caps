'use strict';

const { io } = require('socket.io-client');
const { createPackage, thankDriver } = require('./handler');
const socket = io.connect('http://localhost:3001/caps');

socket.on('delivered', (payload) => {
  thankDriver(payload);
});


setInterval(() => {
  createPackage(socket);
}, 5000);
