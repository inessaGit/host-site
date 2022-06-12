
//Example: using map generically; map chars to char code values 
//String.prototype.charCodeAt() returns an integer between 0 and 65535 representing the UTF-16 code unit
let str ="Hello World"
const charCodes = Array.prototype.map.call(str, (ch) => ch.charCodeAt(0));
console.log(charCodes);

//using non generically 
let codes =str.split("").map((ch)=>{
    return ch.charCodeAt(0);
})
console.log(codes)