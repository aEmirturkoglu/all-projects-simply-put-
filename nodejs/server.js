//console.log('omr ezm orgezm seni seviyom');
//console.log(global);

const os = require('os');
const path = require('path');
//const math = require('./math');
const {add,subtact,divide,multiply} = require('./math')

console.log(multiply(10,4));
//console.log(math.add(6, 6));
/*
//console.log(os.type());
//console.log(os.version());
//console.log(os.homedir());

//console.log(__dirname);
//console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__dirname));

console.log(path.parse(__filename));
*/

console.log(path.join(__dirname,'test','hiworld.html'));