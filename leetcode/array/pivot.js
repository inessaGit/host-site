/*
https://leetcode.com/problems/find-the-middle-index-in-array/

We need to quickly compute the sum of values to the left and the right of every index.

Let's say we knew S as the sum of the numbers, and we are at index i. If we knew the sum of numbers leftsum that are to the left of index i, then the other sum to the right of the index would just be S - nums[i] - leftsum.

As such, we only need to know about leftsum to check whether an index is a pivot index in constant time. Let's do that: as we iterate through candidate indexes i, we will maintain the correct value of leftsum.
*/

var findMiddleIndex = function(nums) {
    let sum=0; 
    let leftSum=0; 

    for (let el of nums){
        sum+=el;
    }

    for (let i=0;i<nums.length;++i){
       if (leftSum==sum-leftSum-nums[i])
       return i;
       leftSum+=nums[i];
    }

    return -1; 
};