'use strict';
//vendor

//const eventPool = require('../../eventPool');
let Chance = require('chance');
let chance = new Chance();



const createPackage = (socket, payload=null) => {
  if(!payload){
    payload = {
    store: '1-206-flowers',
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };
  console.log('vendor: order ready for pickup');
  socket.emit('pickup', payload);
}




// function createPackage(payload=null) {
//   if(!payload) {
//   let payload = {
//     store: '1-206-flowers',
//     orderID: chance.guid(),
//     customer: chance.name(),
//     address: chance.address(),
//   };
// }
// //not required but helpful for debugging
//   //console.log('vendor: we have an order ready');
//   eventPool.emit('pickup', payload);
// }

function thankDriver(payload) {


  console.log('thank you for ordering');
}


module.exports = {
createPackage
//thankDriver
};

