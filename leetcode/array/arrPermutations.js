/*
Input: nums = [5,0,1,2,3,4]
Output: [4,5,0,1,2,3]
Explanation: The array ans is built as follows:
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
    = [4,5,0,1,2,3]

*/

var buildArray = function(nums) {
    let ans=[];
    for (let i=0;i<nums.length;i++){
        ans.push(nums[nums[i]]); //The push() method adds one or more elements to the end of an array and returns the new length of the array.

    }
     return ans;
};

var buildArray1 = function(nums) {
    return nums.map(a=>nums[a]);
};

let nums=[5,0,1,2,3,4]; //exp [4,5,0,1,2,3]
console.log(buildArray(nums))