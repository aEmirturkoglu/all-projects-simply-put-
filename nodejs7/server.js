const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500; 
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const  errorHandler  = require('./middleware/logEvents');
const { callbackify } = require('util');

// app.use((req, res, next) => {
//   logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt');
//     console.log(`${req.method} ${req.path}`);
// })

app.use(logger) // neden logger() değil bak google.com a gir ctrl shift ı yap ve konsola yaz bunu fetch('http://localhost:3500');
                // ve cost hatası al cross origin resource sharing
// cross origin resource sharing


app.use(cors(corsOptions))

//app.use(cors()); // neden düz cors değil bak   ve bunu yapınca cors hatası yok 

app.use(express.urlencoded({ extended: false}))

app.use(express.json())

app.use(express.static(path.join(__dirname, '/public'))) // neden / var publicte?

app.use('/subdir', express.static( path.join(__dirname, '/public'))) // neden / var publicte?

// default for top is app.use('/', express.static(path.join(__dirname, '/public')))

//routes
app.use('/subdir', require('./routes/root')) // why use routers and these lines? look 4 dis upp and try running this npm run dev as well

app.use('/subdir', require('./routes/subdir')) // why use routers and these lines? look 4 dis upp and try running this npm run dev as well

app.use('/employees', require('./routes/api/employees'))

// route handler(s)

app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type('txt').send("404 Not Found");
  }
})

// app.get('/*', (req, res) => {
//   res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
// })

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})
