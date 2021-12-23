/*
https://leetcode.com/problems/maximum-subarray/

Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.
A subarray is a contiguous part of an array.

- NOT sorted
Follow up: If you have figured out the O(n) solution, 
try another solution using the divide and conquer approach, which is more subtle

Approach: sliding window 
https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP

Kadane algorithm: 
TODO : return later ..who marked this question as easy grr
*/

var maxSubArray = function(nums) {
    let maxSum=0;
    let windowSum=0;
    let windowStart=0;

    for (windowEnd=0;windowEnd<nums.length;windowEnd++){
        windowSum+=nums[windowEnd]; 
    }
};

let a=[5,4,-1,7,8]; //exp 23
let b =[1] //exp 1 
let c =[-2,1,-3,4,-1,2,1,-5,4] //exp 6 [4,-1,2,1] has the largest sum = 6.