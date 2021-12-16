/*
https://www.educative.io/courses/data-structures-coding-interviews-javascript/YQrnlJ3kx80

Given an array of size n, can you find the second maximum element in the array?
- input will contain at least 2 unique elements
- input will not contain Number.NEGATIVE_INFINITY

- sort array 
- - remove duplicates 
---- return 2nd el from start 
*/

function findSecondMaximum1(arr){
 let second =arr.sort((a,b)=>{
   return b-a 
  });
  console.log(second) ; //[ 3, 3, 3, 3, 2 ]

  //dump array into Set to remove dups 
  let set1= new Set(second);
  console.log(set1);
  second = Array.from(set1);
   console.log(second);
    if (second.length>1 ) return second[1];
    else if(second.length==1) second[0]; 
    else return -1; 

}

function findSecondMaximum(arr) {
  var max = Number.NEGATIVE_INFINITY;
  var secondmax = Number.NEGATIVE_INFINITY;
  for (var el of arr) {
      if (el > max) {
          secondmax = max
          max = el
      } else if (el > secondmax && el!=max)
          secondmax = el
  }
  return secondmax
}


let a=[9,2,3,6];
let b=[2,3,3,3,3];
findSecondMaximum(a); 