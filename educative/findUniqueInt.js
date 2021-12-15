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
    const result = arr.find((x) => arr.indexOf(x) === arr.lastIndexOf(x));
    return result;
}
//findFirstUnique(4,5,1,2,0,4)	

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter(function(el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}

console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']