/*
https://leetcode.com/problems/rotate-array/submissions/

Given an array, rotate the array to the right by k steps, where k is non-negative.
Right rotation: 
- shift all elements to the right means arr[i]=arr[i-1]; 

The basic idea is that, for example, nums = [1,2,3,4,5,6,7] and k = 3, 
first we reverse [1,2,3,4], it becomes[4,3,2,1]; then we reverse[5,6,7], 
it becomes[7,6,5], finally we reverse the array as a whole, 
it becomes[4,3,2,1,7,6,5] ---> [5,6,7,1,2,3,4].
Reverse is done by using two pointers, 
one point at the head and the other point at the tail, 
after switch these two, these two pointers move one position 
towards the middle.

https://stackoverflow.com/questions/57999103/cyclic-rotation-of-array-explanation

*/

var rotate = function(nums, k) {
    if (nums === null || nums.length === 0) {
       return;
   }
   k = k % nums.length;
   if (k === 0) {
       return;
   }
   nums.reverse();
   reverse(nums, 0, k-1);
   reverse(nums, k, nums.length - 1);
};

let reverse = (arr, start, end) => {
       while(start < end) {
           [arr[start], arr[end]] = [arr[end], arr[start]];
           start++;
           end--;
       }
   };

  let nums = [1,2,3,4,5,6,7];
  let k = 3;
  //exp Output: [5,6,7,1,2,3,4]
rotate(nums,k);