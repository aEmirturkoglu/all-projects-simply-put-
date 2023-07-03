
const fs = require('fs');
const path = require('path');

// fs.readFile('./asd.txt', 'utf-8', (err , data) => {
//   if (err) throw err;
//   console.log(data);
// });

// using path.join() is a much better approach
fs.readFile(path.join(__dirname, /*'nodejs',*/ 'asd.txt'), 'utf-8', (err , data) => {
  if (err) throw err;
  console.log(data);
});

console.log('hello...');

fs.writeFile(path.join(__dirname, /*'nodejs',*/ 'asd.txt'), /*'utf-8',  bu zaten hazır kullanımda olacak*/ 'nice to meet ya', (err /*, data*/) => {
  if (err) throw err;
  console.log('writing done');
});
