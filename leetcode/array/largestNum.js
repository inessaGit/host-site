/*
https://leetcode.com/explore/learn/card/array-and-string/201/introduction-to-array/1147/
You are given an integer array nums where the largest integer is unique.
Determine whether the largest element in the array is at least twice 
as much as every other number in the array.
 If it is, return the index of the largest element, or return -1 otherwise.

--
*/

var dominantIndex=function(nums){

//scan array to find the unique largest m keeping track of it index maxIndex;
//Scan through the array again. If we find some `x != m` with `m < 2*x`, 
//we should return `-1`. Otherwise, we should return `maxIndex`.

let max=nums[0]; //for starters assign largest to first arr elelement
let maxIndex=0;

 for (let i=0; i<nums.length; i++){
      if (max<nums[i]){ //compare each item in array to max
          max=nums[i];
          maxIndex=i;
          console.log(`max = ${max} and maxIndex=${maxIndex}`);
      }
 }

 for (let i=0; i<nums.length; i++){
    if (max!=nums[i] && max<2*nums[i])
    console.log(`doing if `)
         return -1;
     }
     return maxIndex;
 }


dominantIndex([1,2,3,4]);

let dominantIndexUsingMath=function(nums){

    if (nums == null || nums.length == 0) return -1
    
    const max_v = Math.max(...nums)
    for (let n of nums){
        if ((max_v >= (2*n)) || n == max_v) continue  //filter the largest element which is unique
        else {
            console.log(n)
            return -1
        }
    }
    return nums.indexOf(max_v)
}