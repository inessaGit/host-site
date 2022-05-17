/*
https://leetcode.com/problems/largest-perimeter-triangle/

Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, 
formed from three of these lengths. 
If it is impossible to form any triangle of a non-zero area, return 0.

  Approach : 
 - sort the array 
 - use loop because 3 <= nums.length <= 104

*/

var largestPerimeter = function(nums) {
    let n = nums.length; 
    nums.sort((a,b)=>{return a-b}); 
    
    for (let i=n-3; i>=0;i--){
     if (nums[i]+nums[i+1]>nums[i+2])
            return nums[i]+nums[i+1]+nums[i+2];
    }
    return 0;
};