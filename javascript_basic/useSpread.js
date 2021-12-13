
/*
The spread operator allows you to spread out elements 
of an iterable object such as an array,a map, or a set.
*/
let word = "test";
let word2= "hello";
let arrword = ['this is',...word, ...word2]; //converted string into an array of chars
console.log(arrword); 
console.log(`length ${arrword.length}`);

