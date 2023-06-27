const http = require('http');

http.createServer((req, res) => {
  res.write('hi world'/*başka bişi koy hesap makinen gibi*/)
  //res.
  res.end()
}).listen(5000, () => console.log('server runnin like ezzz'));