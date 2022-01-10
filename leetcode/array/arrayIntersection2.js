/*
https://leetcode.com/problems/intersection-of-two-arrays/
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]    

*/

//Approach 1: using Set 
var intersection = function(nums1, nums2) {
    let set1= new Set(nums1);
    let set2= new Set(nums2);
    
    let res = [...set1].filter(el=>set2.has(el));
    console.log (res)
};

//Approach 2: sort and use two pointer approach
var intersection2 = function(nums1, nums2) {
    
    nums1= nums1.sort((a,b)=> a-b )
    nums2=nums2.sort((a,b)=>a-b); 
     let n=nums1.length;
     let m= nums2.length; 
     let i=0; let j=0;
     let res=[];
     //console.log (nums2)
     while(i<n && j<m){
         let a=nums1[i];
         let b= nums2[j];
         a===b ? (i++,j++, res.push(a)):a<b ? (i++): j++;
     }

     return res; 
};


let nums1 = [4,9,5], nums2 = [9,4,9,8,4];  //exp [9,4]
//console.log (intersection(nums1,nums2));
console.log (intersection2(nums1,nums2));

