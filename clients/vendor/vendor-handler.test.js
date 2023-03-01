'use strict';

const socket = require('.socket');
const { createPackage, thankDriver } = require('./handler');

jest.mock('./socket', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});
console.log = jest.fn();

describe('vendor', () => {
  let payload = {
    store: '1-206-flowers',
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };
  createPackage(payload);
  expect(console.log).toHaveBeenCalledWith('vendor: we have an order ready');
  expect(socket.emit).toHaveBeenCalledWith('pickup', payload);
});
it('thanks driver', () => {
  thankDriver();
  expect(console.log).toHaveBeenCalledWith('thank you for ordering', payload.customer);
});
