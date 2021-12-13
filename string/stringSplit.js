/*
The split() method divides a String into an ordered list of substrings, 
puts these substrings into an array, and returns the array

split()
split(separator)
split(separator, limit)
*/


const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
//console.log(words);

//reverse string 

const str1 = "Hello Annabel!";
//converst to array using .split()
let arr = str1.split('');//split into tokens that are chars

//reverse array it mutates original array 
arr.reverse(); 
let reversed =arr.join('');

console.log(reversed);