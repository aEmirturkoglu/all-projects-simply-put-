const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// objyi başlat
const myEmitter = new MyEmitter();

// add listener for da log event myEmitter.on() and thats how we listen for an event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
  // emit event
  myEmitter.emit('log', 'Log event emitted!')
}, 2000);
