/*
Note: Instead of using regular expressions for parsing URLs, 
it is usually better to use the browsers built-in URL parser by using the URL API.
https://developer.mozilla.org/en-US/docs/Web/API/URL_API

1. Create URL object and then access url parts via object properties 
*/


let addr = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL_API");
let host = addr.host;
let path = addr.pathname;
let hostname = addr.hostname;
let password=addr.password; //A string containing the password specified before the domain name.
let port = addr.port;
let protocol = addr.protocol; 
let username = addr.username; 

console.log(`host=${host}`);
console.log(`path=${path}`);
console.log(`hostname=${hostname}`);
console.log(`password=${password}`);
console.log(`port=${port}`);
console.log(`protocol=${protocol}`);
console.log(`username=${username}`);

const url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/search?q=123');
let search = url.search ; 
console.log(`search=${search}`); // Logs "?q=123"

