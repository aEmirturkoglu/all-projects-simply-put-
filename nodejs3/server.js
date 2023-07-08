const http = require('http');
const fs = require('fs');
const fsPromises = fs.promises
const path = require('path');



const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// objyi başlat
const myEmitter = new MyEmitter();

const PORT = process.env.PORT || 3500; 

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    const extension = path.extname(req.url);

    let contentType;

    switch (extension) {
      case '.css':
          contentType = 'text/css';
          break;
      case '.js':
          contentType = 'text/javascript';
          break;
      case '.json':
          contentType = 'application/json';
          break;
      case '.jpg':
          contentType = 'image/jpeg';
          break;
      case '.png':
          contentType = 'image/png';
          break;
      case '.txt':
          contentType = 'text/plain';
          break;
      default:
          contentType = 'text/html';
  }

})

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})

// // add listener for da log event myEmitter.on() and thats how we listen for an event
// myEmitter.on('log', (msg) => logEvents(msg));

// setTimeout(() => {
//   // emit event
//   myEmitter.emit('log', 'Log event emitted!')
// }, 2000);

