const http = require('http');
const path = require('path');
const fs = require('fs');
const { error } = require('console');

const server = http.createServer((req, res) => {
  // console.log(req.url);
  // if (req.url === '/') {
  //   fs.readFile(__dirname,'babakurs', 'calculator.html')
  //   , (err, data) =>{
  //     if (err) throw err
  //     res.writeHead(200, {'Content-type':'text/html'});
  //     res.end(data);
  //   };

  //   //res.writeHead(200, {'Content-type':'text/html'});
  //   //res.end('<h1>hihhi</h1>');
  // };

  let /*const ama bak genede*/ filePath = 
    path.join(__dirname, 'folder-name-here',req.url === '/' ? 'index.html' : req.url);
    // gönderilen ne varsa gösterir
  // console.log(filePath); 
  // res.end();
  let extname = path.extname(filePath);

  let contentType = 'text/html';

  switch (extname) {
    case '.js':
      contentType = 'text/javascript'
      break;
    case '.css':
      contentType = 'text/css'
      break;
    case '.json':
      contentType = 'application/json'
      break;
    case '.png':
      contentType = 'image/png'
      break;
    case '.jpeg':
      contentType = 'image/jpeg'
      break;
  } 

  fs.readFile(filePath, (err, data) => {
    if (err.code === 'ENOENT') {
      fs.readFile(path.join(__dirname, 'folderhere', '404err.html'), (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data, 'utf-8')
      })
    } else {
      // some server error mostly 500
      res.writeHead(500)
      res.end('server error ', err.code)
    } else  {
      res.writeHead(200, {'Content-Type': contentType})
      res.end(data, 'utf-8')
    }
  })
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server runnin brr on port ${PORT}`)); // running mi listenig mi bak

//console.log(__dirname);

