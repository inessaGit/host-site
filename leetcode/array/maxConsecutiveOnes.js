/*
https://leetcode.com/explore/featured/card/fun-with-arrays/521/introduction/3238/

https://leetcode.com/problems/max-consecutive-ones/

Given a binary array nums, return the maximum number of consecutive 1's in the array.

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Use sliding window pattern?
https://www.educative.io/courses/grokking-the-coding-interview/7D5NNZWQ8Wr

*/

var findMaxConsecutiveOnes = function(nums) {
    let counter =0;
    let max =0;
    let n=nums.length; 
    
    //[1,1,0,1,1,1]
    for (let i=0;i<n;i++){
        if (nums[i]==1){
            counter++;
        }
        else {
            counter=0;
        }
        max=Math.max(max,counter);
    }
    return max;
};

let nums =[1,0,1,1,0,1]; //exp 2 
let nums2=[1,1,0,1,1,1] //exp 3

findMaxConsecutiveOnes(nums);
findMaxConsecutiveOnes(nums2);

