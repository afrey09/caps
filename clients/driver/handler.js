'use strict';
//driver

//const eventPool = require('./eventPool');
const { io } = require('socket.io-client');

const socket = io('http://localhost:3001/caps');

//listens for pickup event from the Global Event Pool and responds with the following:
socket.on('pickup', pickupAndDeliver);

function pickupAndDeliver(payload) {
  setTimeout(() => {
    pickup(payload);
  }, 1000);

  setTimeout(() => {
    delivery(payload);
  }, 2000);
}

function pickup(payload) {
  // log a message to the console: DRIVER: picked up <ORDER_ID>
  console.log(`DRIVER: picked up ${payload.orderID}`);
  // Emit an in-transit event to the Global Event Pool with the order payload
  socket.emit('in-transit', payload);
}

function delivery(payload) {
  // log a confirmation message to the console: DRIVER: delivered <ORDER_ID>
  console.log(`DRIVER: delivered ${payload.orderID}`);
  // Emit a delivered event to the Global Event Pool with the order payload
  socket.emit('delivered', payload);
}


module.exports = {
  pickup,
  delivery,
};
