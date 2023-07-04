const fs = require('fs');

if (!fs.existsSync('./new')) {
  fs.mkdir('./new', err => {
  if (err) throw err;
  console.log('done making mkdir');
})
} 

if (fs.existsSync('./new')) {
  fs.rmdir('./new', err => {
  if (err) throw err;
  console.log('done deleting mkdir');
})
} 