/*
https://www.educative.io/courses/data-structures-coding-interviews-javascript/7nYN4DBMBDA

Given an array, return an array where each index stores the product of all numbers in the array except the number at the index itself
https://www.geeksforgeeks.org/a-product-array-puzzle/

Input: arr[]  = {10, 3, 5, 6, 2}
Output: prod[]  = {180, 600, 360, 300, 900}
3 * 5 * 6 * 2 product of other array 
elements except 10 is 180
*/

function findProduct(arr) {
   let prod=[];
   let productResult=0;

   
}

let ar2=[1,3,4];

//Shallow Copy stores the references of objects to the original memory address. 
let ar3=Array.from(ar2,x=>x*x);
console.log(ar3)
console.log(ar2);
ar3.push(5);
console.log(ar3)
console.log(ar2);

const array = [15, 16, 17, 18, 19];

function reducer(previous, current, index, array) {
  const returns = previous + current;
  console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
  return returns;
}

array.reduce(reducer);