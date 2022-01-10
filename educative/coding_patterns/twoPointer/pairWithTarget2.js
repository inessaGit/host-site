/*
Given an array of SORTED numbers and a target sum, find a pair in the array 
whose sum is equal to the given target.
Write a function to return the indices of the two numbers (i.e. the pair) 
such that they add up to the given target.

https://leetcode.com/problems/two-sum/
Array not sorted -> so hashtable works even with NON sorted array  ;

When array sorted use two pointers : 
https://leetcode.com/submissions/detail/611100471/
*/

function pair_with_target_sum(arr, targetSum) {
    const nums = {}; // to store numbers and their indices using object
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      let complimentary = targetSum-num;
      if (complimentary in nums) {
        return [nums[complimentary], i]; //cur index and index of compl num
      }
      nums[arr[i]] = i; //{1: 0}  i=index  inserting into Hashtable 
      //console.log(nums);
    }
    return [-1, -1];
  }
  
  
  console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
  console.log(pair_with_target_sum([2, 5, 9, 11], 11));