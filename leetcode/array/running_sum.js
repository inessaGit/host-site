

/*
https://leetcode.com/problems/running-sum-of-1d-array/

a: accumulator
c: current value
i: index
arr: source array
- previousValue
The value resulting from the previous call to callbackFn. 
On first call, initialValue if specified, otherwise the value of array[0].
- currentValue
The value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1]
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/

const runningSum = nums => {
    nums.reduce((a,c,i,arr) => arr[i] += a)
    return nums
}

var runningSum2 = function(nums) {
    for(let i=1;i<nums.length;i++){
        nums[i]+=nums[i-1]
    }
    return nums
};

var runningSum = function(nums) {
    let running_sum=[];
    let sum= nums.reduce((pv,cv)=>{
        running_sum.push(pv)
        return pv+cv;
     });
 
 running_sum.push(sum)
 console.log(running_sum)
     return running_sum; 
 };
 
 var runningSum4 = function(nums) {
    let sum=[];
    let s=0;
    sum=nums.map((el)=>{
     return s+=el;
});
    return sum;
};