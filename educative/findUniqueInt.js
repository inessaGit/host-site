/*
https://www.educative.io/courses/data-structures-coding-interviews-javascript/m274vRXDnMp
Given an array, find the FIRST integer, which is unique in the array. Unique means the number does not repeat and appears only once in the whole array. Implement your solution in JavaScript and see if it runs correctly!
The function should return null if no unique number is found.

brute force :
- go over array 
- - create a separate empty arr unique [];
-- if unique.includes (el) ==false unique.push(el);
return unique[0]; 
*/

function findFirstUnique(arr){
let unique=[]; 

    for (let el of arr){
       if (unique.includes(el)==false){
           unique.push(el);
       }
    }
     if (unique.length>0){
         return unique[0];
     }
     else 
     return null;
}
//findFirstUnique(4,5,1,2,0,4)	