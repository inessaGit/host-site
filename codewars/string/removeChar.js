/*

str.slice(2, -1) extracts the third character through the second to last character in the string.

If endIndex is negative, slice() treats it as str.length + endIndex. 
(E.g, if endIndex is -2, it is treated as str.length - 2 and "test".slice(1, -2) returns "e") .


*/

function removeChar(str) {
  return str.slice(1, -1);
  // return str.substring(1, str.length-1);

}


function removeChar1(str){
   let res = str.slice(1); 
   console.log(res);
   //res =res.slice(-1);
   res = res.slice(0,res.length-1)
   console.log(`res=${res}`) 
   return res; 

   };


let str="fzvsz"; //exp zvs act vsz
let str1 ="hello" ;
let res ="" ;
res=removeChar(str);
console.log(res)