/*
https://leetcode.com/problems/squares-of-a-sorted-array/

Example1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
*/

var sortedSquares = function(nums) {
    nums=nums.map((el)=>{
        return Math.pow(el,2)
    })
   // console.log(nums)
    nums=nums.sort((a,b)=>{
        return (a-b)
    });
    console.log(nums)
    return nums;
};

let a=[-4,-1,0,3,10];
sortedSquares(a);

console.log(Math.pow(4,2))