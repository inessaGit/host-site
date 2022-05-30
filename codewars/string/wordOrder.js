/*
https://www.codewars.com/kata/55c45be3b2079eccff00010f/solutions/javascript
Your task is to sort a given string. Each word in the string will contain a single number. 
This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. 
The words in the input String will only contain valid consecutive numbers.



*/

function order(words){
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
  }    

let s="is2 Thi1s T4est 3a"  //exp  "Thi1s is2 3a T4est"
 let s2= "4of Fo1r pe6ople g3ood th5e the2"  // "Fo1r the2 g3ood 4of th5e pe6ople"
 let s3="" //exp  ""

console.log( order(s)); 
console.log( order(s2)); 
console.log( order(s3)); 

//string.match returns array of matcheds or null if not found
let w= "hello1 test2 leetcode8  hackerrank5";
let res =w.split(' ').sort((a,b)=>{
    return a.match(/\d/) -b.match(/\d/)
});
console.log(   `res=${res}`);
res=res.join(' ');
console.log(   `res=${res}`);
