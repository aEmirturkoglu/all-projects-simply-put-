
const fsPromises = require('fs').promises;
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

//console.log('hello...');

// fs.writeFile(path.join(__dirname, /*'nodejs',*/ 'reply.txt'), /*'utf-8',  bu zaten hazır kullanımda olacak*/ 'nice to meet ya', (err /*, data*/) => {
//   if (err) throw err;
//   console.log('writing done');

//   fs.appendFile(path.join(__dirname, 'reply.txt'), '\n\nyes yes yes', (err) => {
//     if (err) throw err;
//     console.log( 'Append complete');

//     fs.rename(path.join(__dirname, 'reply.txt'),path.join(__dirname, 'replied.txt'), (err) => {
//       if (err) throw err;
//       console.log( 'rename complete');
//     });
//   });
// });

// fs.appendFile(path.join(__dirname, 'test.txt'), 'Testing text.', (err) => {
//   if (err) throw err;
//   console.log( 'Append complete');
// });
  