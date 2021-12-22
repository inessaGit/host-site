/*
https://www.educative.io/module/lesson/data-structures-in-javascript/gkO8WpYrlgG

Remove duplicate characters from a string which is passed by reference.
*/

//Case 1: using set and built in methods 
let removeDuplicates = function(str) {
    let set = new Set(str);
    str=Array.from(set).join("");
 
    return str;
 
 };
//Case 2: using 2 pointer approach
 let removeDuplicates1 = function(str) {
  
 };