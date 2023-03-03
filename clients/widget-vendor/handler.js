'use strict';

let Chance = require('chance');
let chance = new Chance();
const store = 'acme-widgets';


const createPackage = (socket, order = null) => {
  if (!order) {
    order = {
      store: 'acme-widgets',
      orderID: chance.guid(),
      customer: chance.name(),
      address: chance.address(),
    };
  }
  let payload = {
    event: 'pickup',
    messageId: order.id,
    queueId: store,
    order,
  };

  console.log('vendor: order ready for pickup');
  socket.emit('pickup', payload);
};


const thankDriver = (payload) => {
  console.log('Thank you for deliverying the package to', payload.order.customer);

};

module.exports = { createPackage, thankDriver };

