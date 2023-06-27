const url = require('url');

const myUrl = new URL('https://google.com:8000/hi.html?id=100&status=active');

//düz yazılmış url
console.log(myUrl.href);
console.log(myUrl.toString());

//host root domain
console.log(myUrl.host);

// portname excluded
console.log(myUrl.hostname);

console.log(myUrl.pathname);
//seialised query and everything after the ? mark
console.log(myUrl.search);

console.log(myUrl.searchParams);

myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

myUrl.searchParams.forEach((value, name) => {console.log(name, value);
//console.log(`${name}: ${value}`)
});