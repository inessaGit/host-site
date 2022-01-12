/*
https://leetcode.com/problems/contains-duplicate-ii/

Best approach is to use : technique from two pointers using Hashmap 

https://www.educative.io/courses/grokking-the-coding-interview/xog6q15W9GP
*/

var containsNearbyDuplicate = function(nums, k) {
    let obj ={}; 
    let n=nums.length; 
    
    for (let i=0;i<n;i++){
        let index =obj[nums[i]]; //index 
        if (Math.abs(i-index)<=k){
            return true;
        }
        obj[nums[i]]=i; //store key val in obj
    }
    
    return false;
};

let nums = [1,2,3,1];
let k = 3; //true 
let nums2 = [1,2,3,1,2,3];
let  k2 = 2; //false 
console.log(containsNearbyDuplicate(nums,k))

