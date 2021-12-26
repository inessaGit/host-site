/*
https://leetcode.com/problems/create-target-array-in-the-given-order/

Given two arrays of integers nums and index. Your task is to create target array under the following rules:
Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.
Return the target array.

Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]

https://leetcode.com/problems/create-target-array-in-the-given-order/discuss/695423/O(NLogN)-Java-Solution-using-Merge-Sort-with-Pen-Paper-Explanation


*/

var createTargetArray = function(nums, index) {
    let target=[];
    
    return target;
};

var createTargetArray1 = function(nums, index) {
    let target=[];
    for(let i=0;i<nums.length; i++){
        target.splice(index[i],0,nums[i])
    }
   return target
};

var createTargetArray2 = function(nums, index) {
    let result=[]
    for(let number of nums){
        let idx = index.shift();
        result.splice(idx,0,number)
    }
    return result
};

let nums = [0,1,2,3,4];
let index=[0,1,2,2,1];
console.log(createTargetArray(nums,index)); 