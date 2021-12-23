
/*
https://leetcode.com/problems/merge-sorted-array/

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
The final sorted array should not be returned by the function, but instead 
be stored inside the array nums1

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
*/

//Approach 1: using sort()
let merge=function(arr1,arr2){

    let merged =[...arr1,...arr2];
   // return merged.sort((a,b)=>{return a-b});
//because the body of arrow function is only one return statement can ommit word return 
   merged= merged.sort((a,b)=>a-b);

   //Expected: [1,2,2,3,5,6]  removed 0
   merged =merged.filter(el=>el!=0)
   console.log(merged); 
   return merged;
}

//Approach 2: using two pointers
var merge1 = function(nums1, nums2) {
    
   nums1=[...nums1,...nums2];
   console.log(nums1);
};

let arr1=[1,2,3,0,0,0];
let arr2=[2,5,6];
merge1(arr1,arr2);