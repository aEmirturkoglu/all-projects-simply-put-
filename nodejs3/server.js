const http = require('http');
const fs = require('fs');
const fsPromises = fs.promises
const path = require('path');



const logEvents = require('./logEvents');

const EventEmitter = require('events');
const { da } = require('date-fns/locale');

class MyEmitter extends EventEmitter {};

// objyi başlat
const myEmitter = new MyEmitter();
myEmitter.on('log', (msg, fileName) => logEvents(msg , fileName));
const PORT = process.env.PORT || 3500; 

const serveFile = async (filePath, contentType, response) => {
  try {
    const rawData = await fsPromises.readFile(
      filePath,
      !contentType.includes('image') ? 'utf8' : ''  // if we dont specify, we let the img go
      ); 
    const data = contentType === 'applicatoin/json' ? 
      JSON.parse(rawData) : rawData; 
      response.writeHead(
        filePath.includes('404.html') ? 404 : 200,
        {'Content-Type': contentType}
      );
    response.end(
      contentType === 'application/json' ? 
        JSON.stringify(data) : data
    );
  } catch (err) {
    console.log(err);
    myEmitter.emit('log', `${err.name}: ${err.message}`, 'errLog.txt');
    response.statusCode = 500;
    response.end();
  };
};

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    myEmitter.emit('log', `${req.url}\t${req.method}`, 'reqLog.txt');

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

  
  let filePath =
  contentType === 'text/html' && req.url === '/'
      ? path.join(__dirname, 'views', 'index.html')
      : contentType === 'text/html' && req.url.slice(-1) === '/'
          ? path.join(__dirname, 'views', req.url, 'index.html')
          : contentType === 'text/html'
              ? path.join(__dirname, 'views', req.url)
              : path.join(__dirname, req.url);

              // makes .html extension not required in the browser
              if (!extension && req.url.slice(-1) !== '/') filePath = '.html'; 

              const fileExists = fs.existsSync(filePath);

              if (fileExists) {
                // serve the file
                serveFile(filePath. contentType. res);
              } else {
                //404
                //301 redirect
                switch (path.parse(filePath).base) {
                  case 'old-page.html':
                      res.writeHead(301, {'Location': '/new-page.html'})
                      res.end()
                    break;
                  case 'www.page.html':
                      res.writeHead(301, {'Location': '/'})
                      res.end()
                    break;
                  default:
                    // serve a 404 res
                    serveFile(path.join(__dirname, 'views', '404.html'),'text/html', res);
                    
                };
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

//myEmitter.emit('log', 'Log event emitted!')