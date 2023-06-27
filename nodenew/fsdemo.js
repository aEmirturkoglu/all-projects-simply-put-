const fs = require('fs');
const path = require('path');


// fs.mkdir(path.join(__dirname, '/test'), {}, err => { /*'test' de olabilir*/
//  if (err) {
//    throw err
//  }
//  console.log('folder done!!!');
// })


// fs.writeFile(path.join(__dirname, '/test', 'hellowwwww.txt'), 'hihi wooorrrrllldddddssss', err => { /*'test' de olabilir*/
//   if (err) {
//     throw err
//   }
//   console.log('file done!!!');
// })

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

//  fs.readFile(path.join(__dirname, '/test', 'hellowwwww.txt'), 'utf8', (err,data) => { /*'test' de olabilir*/
//    if (err) {
//      throw err
//    }
//    console.log(/*'file done!!!'*/ data);
//  })

fs.rename(path.join(__dirname, '/test', 'hellow22.txt'), 
path.join(__dirname, '/test', 'hellow1.txt'), (err /*,data*/) => {
if (err) {
  throw err
}
console.log(/*data*/ 'renamed');
})