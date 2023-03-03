'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;
const Queue = require('./lib/queue');
const capsQueue = new Queue();

// socket server singleton: listening for events at localhost:3001
const server = new Server();
// create namespace
const caps = server.of('/caps');

// socket connection to namespace(the eventpool)
caps.on('connection', (socket) => {
  console.log('Socket connected', socket.id);
  socket.onAny((event, payload) => {
    const time = new Date();
    console.log('Event received', { event, payload, time });
  });

  socket.on('JOIN', (room) => {
    socket.join(room);
    console.log(`${socket.id} joined the ${room} room`);
  });
  // manage Pickup event
  socket.on('pickup', (payload) => {
    
    let driverQueue = capsQueue.read('driver');
    if(!driverQueue) {
      let driverKey = capsQueue.store('driver', new Queue());
      driverQueue = capsQueue.read(driverKey);
    }
    driverQueue.store(payload.messageId, payload);

    socket.broadcast.emit('pickup', payload);
  });

  // manage In-Transit event
  socket.on('in-transit', (payload) => {
    socket.broadcast.emit('in-transit', payload);
  });

  // manage Delivered event
  socket.on('delivered', (payload) => {
    
    let storeQueue = capsQueue.read(payload.queueType);
    if(!storeQueue) {
      let driverKey = capsQueue.read(payload.queueType, new Queue());
      storeQueue = capsQueue.read(driverKey);
    }
    storeQueue.store(payload.messageId, payload);
    
    
    socket.to(payload.queueId).emit('delivered', payload);

  });
});
server.listen(PORT);
