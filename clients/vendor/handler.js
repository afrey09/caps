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
};


const thankDriver = (payload) => {
  console.log('Thank you for deliverying the package to', payload.customer);

};

module.exports = { createPackage, thankDriver };
