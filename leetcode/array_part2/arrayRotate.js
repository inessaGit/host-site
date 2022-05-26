/*
https://leetcode.com/problems/rotate-array/
https://leetcode.com/problems/rotate-array/discuss/259418/Clear-cyclic-replacement-Java-solution-with-proof

Approach 1: 
- cyclic replacement

We will first take mod of K by N (K = K % N) 
because after every N rotation array will become the same as the initial array.

console.log(3%7)
- 3=divident , 7= divisor 
- first divide 3/7 =0.43
-- take the whole part which is 0 and multiply by 7 0*7=0
-- - divident minus 0  3-0=3 ; 
*/

var rotate = function(nums, k) {
    //1.Store the last element of the array. 2.Start from the last index and right shift the array by one.
  //Make the last element stored to be the first element of the array.
              let n =nums.length ;
              k=k%n; 
              console.log(`k=${k}`)
              for (let j=0;j<k;j++){
              let lastElement = nums[n -1] ;
                 for (let i = n - 1; i > 0; i--)
              {
                  nums[i] = nums[i - 1];
                 // console.log(nums)
              }
              nums[0] = lastElement;
              }
             
      console.log(nums)
  
          }
  
let nums =[1,2,3,4,5,6,7];
let k =3; 
rotate (nums,k);

let n=6;
let numOfRotations =13; 
let numOfRotations1 =3; 
console.log(numOfRotations%n); //1 
console.log(numOfRotations1%n); //3
