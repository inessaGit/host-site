/*
https://www.educative.io/module/lesson/data-structures-in-javascript/qZ9K1LGnDRR
Given three integer arrays sorted in ascending order, return the smallest number that is common in all three arrays.

Use three-pointers​.
*/

let findLeastCommonNumber = function(a, b, c) {
    let smallest;
    //compare length of each array and find smallest 
    // iterate over smallest length 
    //if el exists in all arrays find Math.min 

    let length =Math.min(a.length,b.length,c.length)
    for (let i=0;i<length;i++){
        if (b.includes(a[i])===true&&c.includes(a[i])===true){
            smallest=a[i];
                return smallest;
            }
        }
     return -1;
   };

   //using 3 pointers  approach
   let findLeastCommonNumber1 = function(a, b, c) {
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < a.length && j < b.length && k < c.length) {
      // Finding the smallest common number
      if (a[i] === b[j] && b[j] === c[k]) {
        return a[i];
      }
      // Let's increment the iterator for the smallest value.
      if (a[i] <= b[j] && a[i] <= c[k]) {
        i++;
      } 
      else if (b[j] <= a[i] && b[j] <= c[k]) {
        j++;
      }
      else if (c[k] <= a[i] && c[k] <= b[j]) {
        k++;
      }
    }
    return -1;
  };
  
  let v1 = [6, 7, 10, 25, 30, 63, 64];
  let v2 = [0, 4, 5, 6, 7, 8, 50];
  let v3 = [1, 6, 10, 14];
  console.log("Least Common Number: " + findLeastCommonNumber(v1, v2, v3));


let a=[3,6,7,10,25,30,63,64]
let b=[0,4,5,6,7,8,50]
let c =[1,6,10,14]; 

console.log(findLeastCommonNumber(a,b,c))