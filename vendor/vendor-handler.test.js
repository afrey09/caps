'use strict';

const eventPool = require('.eventPool');
const { createPackage, thankDriver } = require('./handler');

jest.mock('./eventPool', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});
console.log = jest.fn();

describe('vendor', () => {
  it('emits an order as expected', () => {
    let payload = {
      store: '1-206-flowers',
    orderID: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
};
createPackage(payload);
expect(console.log).toHaveBeenCalledWith('vendor: we have an order ready');
expect(eventPool.emit).toHaveBeenCalledWith('pickup', payload);
});
it('thanks driver', () => {
  thankDriver();
  expect(console.log).toHaveBeenCalledWith('thank you for ordering');
});
});