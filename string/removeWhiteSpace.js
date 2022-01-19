

let s = "A man, a plan, a canal: Panama";

//Approach 1:to remove white space
let m=s.replaceAll(' ','');
console.log(m);

//Approach 2 : to remove white space use regex
let n =s.replace(/\s+/g,'');
console.log(n);

//Remove all non alphanumeric values Approach 1: regex
const regex = /[^A-Za-z0-9]/g;
let t = s.toLowerCase().replace(regex,'');
console.log(t);
