/*
https://leetcode.com/problems/running-sum-of-1d-array/
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
*/

var runningSum = function(nums) {
    let ans=[];
    let runningSum=0;

    for (let el of nums){
        runningSum+=el;
        ans.push(runningSum)
    }
    console.log(ans)
};



let nums=[1,1,1,1,1];
let nums1=[1,2,3,4];

console.log(runningSum(nums1));

let initVal =nums[0];
let ans=nums.reduce((prevVal,curVal)=>{
   return prevVal+curVal
}, initVal);
console.log(ans);
