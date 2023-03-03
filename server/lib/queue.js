'use strict';

class Queue {
  constructor() {
    this.data = {};
    // this is what capsQueue will look like
    // this.data = {
    //   'driver': {},
    //   '1-800-flowers': {},
    //   'acme-widgets': {}
    // };
  }
  store(key, value) {
    this.data[key] = value;
    console.log(`Added ${value} to ${key} queue`);
    return key;
  }

  read(key) {
    return this.data[key];
  }

  remove(key) {
    console.log(`Removed ${this.data[key]}`);
    const value = this.data[key];
    delete this.data[key];
    return value;
  }
}

//mainQueue = {
//   this.data = {
//     driver = {
//       messageId: payload
//     },
//     flowers = {
//       messageId: payload
//     }
//     widgets = {
//       messageId: payload
//     }
//   }
// }

module.exports = Queue;