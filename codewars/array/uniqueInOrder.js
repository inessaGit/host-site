/*
https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
Implement the function unique_in_order which takes as argument a sequence
 and returns a list of items without any elements 
 with the same value next to each other and preserving the original order of elements.


*/


var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    var arr = [];
    for (var i=0;i<iterable.length;i++) {
    // check if there is back to back letter
    if (iterable[i] !== iterable[i+1]) {
        // if not, push the current value to arr
      arr.push(iterable[i]);
    }
  }
  return arr;
  }

uniqueInOrder('AAAABBBCCDAABBB') // ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         // ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       // [1,2,3]