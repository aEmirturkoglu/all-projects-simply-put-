app.use(logger) //google.com a gir ctrl shift ı yap ve konsola yaz bunu fetch('http://localhost:3500');

app.use(express.urlencoded({ extended: false}))

app.use(express.json())

app.use(express.static(path.join(__dirname, '/public'))) // neden / var publicte?

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

app.use(errorHandler)