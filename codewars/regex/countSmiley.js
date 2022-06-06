/*
https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

[:;] signifies that, we want only : or ; as eyes(As per Problem).
[-~]? signifies that, either we want - or ~ as nose , or we don't want it(As per Problem).
      ? is used to match 0 or 1 occurrences.
[)D] signifies that, we want ) or D as mouth(As per Problem).

Use String.match with regex ; result will be array or null 
('[:;][-~]?[)D]'
*/

function countSmileys(arr) {
    //must eyes : or ; must mouth : ) or D 
   let regex=/[:;][-~]?[)D]/g
   let res = arr.filter((el)=>{
         return el.match(regex)     ;               
   }).length ; 
   
   console.log(res)
   return res; 
 }