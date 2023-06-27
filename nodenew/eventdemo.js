const EventEmitter = require('events');

//create class
class MyEmitter extends EventEmitter {};

// Init obj
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('event go brrr'));

// Init event
myEmitter.emit('event');