const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, '/test', 'hellowwwww.txt'), 'hihi wooorrrrllldddddssss', err => { /*'test' de olabilir*/
  if (err) {
    throw err
  }
  console.log('file done!!!');
})

//fs.writeFile(path.join(__dirname, '/test', 'hellowwwww.txt'), 'hihi wooorrrrllldddddssss', err => { /*'test' de olabilir ve farklara bak*/
//  if (err) {
//    throw err
//  }
//  console.log('file done!!!');
//
//  fs.appendFile(path.join(__dirname, '/test', 'hellowwwww.txt'), ' hihi wooorrrrllldddddssss222', err => { /*'test' de olabilir*/
//  if (err) {
//    throw err
//  }
//  console.log('file done!!!');
//})
//
//})
